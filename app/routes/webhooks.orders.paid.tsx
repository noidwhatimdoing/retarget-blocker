import { ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { prisma } from "../db.server";

export async function action({ request }: ActionFunctionArgs) {
  const { topic, shop, session, payload } = await authenticate.webhook(request);

  if (topic !== "ORDERS_PAID") {
    return new Response("Invalid topic", { status: 400 });
  }

  console.log(`🎯 Received order webhook for shop: ${shop}`);

  try {
    const order = payload as any;
    
    // Find or create customer
    let customer = await prisma.customer.findUnique({
      where: {
        shopId_email: {
          shopId: session?.shop || shop,
          email: order.customer?.email || "",
        },
      },
    });

    if (!customer && order.customer?.email) {
      customer = await prisma.customer.create({
        data: {
          shopId: session?.shop || shop,
          shopifyId: order.customer.id.toString(),
          email: order.customer.email,
          phone: order.customer.phone,
          firstName: order.customer.first_name,
          lastName: order.customer.last_name,
          totalSpent: parseFloat(order.customer.total_spent || "0"),
          ordersCount: parseInt(order.customer.orders_count || "0"),
        },
      });
      console.log(`📝 Created new customer: ${customer.email}`);
    }

    if (customer) {
      // Create order record
      const newOrder = await prisma.order.create({
        data: {
          shopId: session?.shop || shop,
          customerId: customer.id,
          shopifyOrderId: order.id.toString(),
          orderNumber: order.order_number.toString(),
          totalPrice: parseFloat(order.total_price),
          currency: order.currency,
          orderDate: new Date(order.created_at),
          fulfillmentStatus: order.fulfillment_status,
          financialStatus: order.financial_status,
        },
      });

      // Update customer stats
      await prisma.customer.update({
        where: { id: customer.id },
        data: {
          totalSpent: parseFloat(order.customer?.total_spent || "0"),
          ordersCount: parseInt(order.customer?.orders_count || "0"),
          lastOrderDate: new Date(order.created_at),
        },
      });

      console.log(`💰 Order ${order.order_number} processed for ${customer.email}`);
      console.log(`🚀 TODO: Add customer to suppression lists`);
    }

    return new Response("OK", { status: 200 });

  } catch (error) {
    console.error("❌ Error processing order webhook:", error);
    return new Response("Error processing webhook", { status: 500 });
  }
}
