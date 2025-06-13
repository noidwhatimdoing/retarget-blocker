import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useState } from 'react';

interface LoaderData {
  shop: string;
  installed: boolean;
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

interface Integration {
  connected: boolean;
  suppressionDays: number;
  accountId?: string | null;
  customerId?: string | null;
  advertiserId?: string | null;
}

interface Integrations {
  meta: Integration;
  google: Integration;
  tiktok: Integration;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop") || "test-store-76000.myshopify.com";
  const installed = url.searchParams.get("installed") === "true";
  
  return { shop, installed };
}

export default function App() {
  const { shop, installed } = useLoaderData<typeof loader>() as LoaderData;
  const [currentPage, setCurrentPage] = useState('home');
  const [integrations, setIntegrations] = useState<Integrations>({
    meta: { connected: false, suppressionDays: 90, accountId: null },
    google: { connected: false, suppressionDays: 90, customerId: null },
    tiktok: { connected: false, suppressionDays: 90, advertiserId: null }
  });

  const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, color }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-green-600">{change}</p>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <span className="text-sm text-gray-600">Connected to: {shop}</span>
      </div>

      {/* Success Message */}
      {shop && (
        <div style={{
          backgroundColor: '#d1fae5',
          border: '1px solid #10b981',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#065f46',
            marginBottom: '4px'
          }}>
            🎉 Installation Successful!
          </h2>
          <p style={{ color: '#047857', margin: 0 }}>
            Your app is now connected and ready to save ad spend!
          </p>
        </div>
      )}
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Customers Suppressed"
          value="2,347"
          change="+12% this month"
          icon="👥"
          color="#8b5cf6"
        />
        <StatCard
          title="Ad Spend Saved"
          value="$8,429"
          change="+18% this month"
          icon="💰"
          color="#10b981"
        />
        <StatCard
          title="Active Campaigns"
          value="12"
          change="3 optimized today"
          icon="🎯"
          color="#f59e0b"
        />
        <StatCard
          title="Suppression Rate"
          value="94.2%"
          change="+2.1% this week"
          icon="📊"
          color="#ef4444"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-green-500">✅</span>
            <div className="flex-1">
              <span className="text-sm font-medium">247 customers added to Meta suppression list</span>
              <div className="text-xs text-gray-500">2 hours ago</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-green-500">✅</span>
            <div className="flex-1">
              <span className="text-sm font-medium">Google Ads audience updated with 89 new customers</span>
              <div className="text-xs text-gray-500">4 hours ago</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-blue-500">🎯</span>
            <div className="flex-1">
              <span className="text-sm font-medium">Campaign "Summer Sale 2025" optimized</span>
              <div className="text-xs text-gray-500">6 hours ago</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-yellow-500">⚠️</span>
            <div className="flex-1">
              <span className="text-sm font-medium">TikTok sync pending review</span>
              <div className="text-xs text-gray-500">8 hours ago</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-purple-500">📈</span>
            <div className="flex-1">
              <span className="text-sm font-medium">Weekly report generated</span>
              <div className="text-xs text-gray-500">1 day ago</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-red-500">🚨</span>
            <div className="flex-1">
              <span className="text-sm font-medium">High-value customer detected</span>
              <div className="text-xs text-gray-500">1 day ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // FIXED INTEGRATIONS PAGE - No global suppression, individual controls per platform
  const IntegrationsPage = () => {
    const platforms = [
      {
        id: "meta" as keyof Integrations,
        name: "Meta Ads",
        description: "Connect your Facebook and Instagram ad accounts",
        icon: "📘",
        color: "#1877f2",
      },
      {
        id: "google" as keyof Integrations,
        name: "Google Ads",
        description: "Connect your Google Ads account for enhanced conversions",
        icon: "🔍",
        color: "#4285f4",
      },
      {
        id: "tiktok" as keyof Integrations,
        name: "TikTok Ads",
        description: "Connect your TikTok for Business account",
        icon: "🎵",
        color: "#ff0050",
      },
    ];

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Platform Integrations</h1>
            <p className="text-gray-600 mt-2">Connect your ad platforms to automatically suppress customers who already purchased</p>
          </div>
        </div>

        {/* Platform Integration Cards - Each with individual suppression settings */}
        <div className="grid gap-6">
          {platforms.map((platform) => {
            const platformIntegration = integrations[platform.id];
            
            return (
              <div key={platform.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                      style={{ backgroundColor: platform.color }}
                    >
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
                      <p className="text-sm text-gray-600">{platform.description}</p>
                    </div>
                  </div>
                  
                  {platformIntegration.connected ? (
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                      Not Connected
                    </span>
                  )}
                </div>

                {/* Account Info - only show if connected */}
                {platformIntegration.connected && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Connected Account:</strong> 
                      {platform.id === 'meta' && platformIntegration.accountId && ` Ad Account ID ${platformIntegration.accountId}`}
                      {platform.id === 'google' && platformIntegration.customerId && ` Customer ID ${platformIntegration.customerId}`}
                      {platform.id === 'tiktok' && platformIntegration.advertiserId && ` Advertiser ID ${platformIntegration.advertiserId}`}
                      {!platformIntegration.accountId && !platformIntegration.customerId && !platformIntegration.advertiserId && ' Account Connected'}
                    </p>
                    <p className="text-sm text-blue-800 mt-1">
                      <strong>Suppression Audience:</strong> 
                      <a href="#" className="underline hover:text-blue-900 ml-1">
                        {platform.name} Customers - Suppressed (2,347 customers)
                      </a>
                    </p>
                  </div>
                )}

                {/* INDIVIDUAL SUPPRESSION SETTINGS PER PLATFORM */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    ⏱️ Suppression Settings
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    How long should customers be excluded from ads after making a purchase?
                  </p>
                  
                  <div className="flex gap-3 mb-4">
                    {[30, 60, 90, 120].map((days) => (
                      <button
                        key={days}
                        onClick={() => setIntegrations(prev => ({
                          ...prev,
                          [platform.id]: { ...prev[platform.id], suppressionDays: days }
                        }))}
                        className={`px-4 py-2 rounded-lg border font-medium transition-colors ${
                          platformIntegration.suppressionDays === days 
                            ? 'text-white border-transparent' 
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                        style={{
                          backgroundColor: platformIntegration.suppressionDays === days ? platform.color : undefined
                        }}
                      >
                        {days} days
                        {days === 90 && (
                          <span className={`ml-2 text-xs px-2 py-1 rounded ${
                            platformIntegration.suppressionDays === 90 
                              ? 'bg-white text-gray-700' 
                              : 'text-white'
                          }`}
                          style={{
                            backgroundColor: platformIntegration.suppressionDays === 90 ? '#ffffff' : platform.color
                          }}>
                            REC
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* View Audience Button */}
                <div className="mb-4">
                  <button
                    onClick={() => {
                      if (platformIntegration.connected) {
                        const audienceUrls: Record<string, string> = {
                          meta: "https://business.facebook.com/adsmanager/audiences/",
                          google: "https://ads.google.com/aw/audiences/",
                          tiktok: "https://ads.tiktok.com/i18n/audiences/"
                        };
                        window.open(audienceUrls[platform.id], '_blank');
                      } else {
                        alert(`Connect ${platform.name} first to view suppression audience`);
                      }
                    }}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors mb-3 ${
                      platformIntegration.connected
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!platformIntegration.connected}
                  >
                    {platformIntegration.connected ? '🔗 View Suppression Audience' : '⏳ Audience will appear after connection'}
                  </button>
                </div>

                {/* What this enables */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">What this enables:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automatic customer suppression after purchase</li>
                    <li>• Custom audience sync to {platform.name}</li>
                    <li>• Prevents wasted ad spend on existing customers</li>
                    <li>• Real-time updates when new orders come in</li>
                  </ul>
                </div>
                
                {/* Connect/Disconnect Button */}
                <button
                  onClick={() => setIntegrations(prev => ({
                    ...prev,
                    [platform.id]: { 
                      ...prev[platform.id], 
                      connected: !prev[platform.id].connected,
                      // Add mock account info when connecting
                      ...(prev[platform.id].connected ? {} : {
                        accountId: platform.id === 'meta' ? '123456789' : undefined,
                        customerId: platform.id === 'google' ? '987-654-3210' : undefined,
                        advertiserId: platform.id === 'tiktok' ? '456789123' : undefined,
                      })
                    }
                  }))}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    platformIntegration.connected
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'text-white hover:opacity-90'
                  }`}
                  style={{
                    backgroundColor: platformIntegration.connected ? undefined : platform.color
                  }}
                >
                  {platformIntegration.connected ? `Disconnect ${platform.name}` : `Connect ${platform.name}`}
                </button>
              </div>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            Our step-by-step guides make it easy to connect each platform safely and securely.
          </p>
          <div className="flex gap-4">
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              📖 View Setup Guides
            </button>
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              💬 Contact Support
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AnalyticsPage = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Customers Added to Suppression Lists</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">Weekly</button>
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">Monthly</button>
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">Yearly</button>
          </div>
        </div>
        
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-gray-500">Chart showing daily customer additions</p>
            <p className="text-sm text-gray-400">Demo data: 50-200 customers per day</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Estimated Ad Spend Saved</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">Weekly</button>
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">Monthly</button>
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">Yearly</button>
          </div>
        </div>
        
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">💰</div>
            <p className="text-gray-500">Chart showing daily savings</p>
            <p className="text-sm text-gray-400">Demo data: $200-800 saved per day</p>
          </div>
        </div>
      </div>
    </div>
  );

  const AccountPage = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscription Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Plan:</span>
              <span className="font-semibold">Professional</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly Cost:</span>
              <span className="font-semibold">$99/month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Next Billing:</span>
              <span className="font-semibold">July 11, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="text-green-600 font-semibold">Active</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Store Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Store:</span>
              <span className="font-semibold">{shop}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Connected:</span>
              <span className="text-green-600 font-semibold">✓ Active</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Last Sync:</span>
              <span className="font-semibold">2 minutes ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'integrations': return <IntegrationsPage />;
      case 'analytics': return <AnalyticsPage />;
      case 'account': return <AccountPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎯</span>
              <h1 className="text-xl font-bold text-gray-900">Retarget Blocker</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">{shop}</span>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">TS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm h-screen">
          <nav className="mt-8 space-y-2 px-4">
            <button
              onClick={() => setCurrentPage('home')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${
                currentPage === 'home' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>🏠</span>
              <span>Home</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('integrations')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${
                currentPage === 'integrations' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>🔗</span>
              <span>Integrations</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('analytics')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${
                currentPage === 'analytics' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>📊</span>
              <span>Analytics</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('account')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${
                currentPage === 'account' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>⚙️</span>
              <span>Account</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}