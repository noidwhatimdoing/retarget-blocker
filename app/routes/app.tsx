import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useState } from 'react';

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop") || "test-store-76000.myshopify.com";
  const installed = url.searchParams.get("installed") === "true";
  
  return { shop, installed };
}

export default function App() {
  const { shop, installed } = useLoaderData<typeof loader>();
  const [currentPage, setCurrentPage] = useState('home');
  const [integrations, setIntegrations] = useState({
  suppressionDays: 90,
  meta: { connected: false },
  google: { connected: false },
  tiktok: { connected: false }
});

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

  const StatCard = ({ title, value, change, icon, color }: StatCardProps) => (
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

      {/* Recent Activity - Full Width */}
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

const IntegrationsPage = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Platform Integrations</h1>
        <p className="text-gray-600 mt-2">Connect your ad platforms to automatically suppress customers who already purchased</p>
      </div>
    </div>

    {/* Suppression Settings */}
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Suppression Settings</h2>
      <p className="text-sm text-gray-600 mb-4">
        How long should customers be excluded from ads after making a purchase?
      </p>
      
      <div className="flex gap-3 mb-4">
        {[30, 60, 90, 120].map((days) => (
          <button
            key={days}
            onClick={() => setIntegrations(prev => ({ ...prev, suppressionDays: days }))}
            className={`px-4 py-2 rounded-lg border font-medium transition-colors ${
              integrations.suppressionDays === days 
                ? 'bg-purple-600 text-white border-purple-600' 
                : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {days} days
            {days === 90 && (
              <span className="ml-2 text-xs px-2 py-1 bg-white text-purple-600 rounded">
                Recommended
              </span>
            )}
          </button>
        ))}
      </div>
      
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
        Save Settings
      </button>
    </div>

    {/* Platform Integrations */}
    <div className="grid gap-6">
      {/* Meta Integration */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            {/* Meta Logo */}
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Meta Business</h3>
              <p className="text-sm text-gray-600">Facebook & Instagram Ads</p>
            </div>
          </div>
          
          {integrations.meta.connected ? (
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Active
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                Not Connected
              </span>
            </div>
          )}
        </div>

        {integrations.meta.connected && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Connected Account:</strong> Ad Account ID 123456789
            </p>
            <p className="text-sm text-blue-800 mt-1">
              <strong>Suppression Audience:</strong> 
              <a href="#" className="underline hover:text-blue-900 ml-1">
                Shopify Customers - Suppressed (2,347 customers)
              </a>
            </p>
          </div>
        )}

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">What this enables:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Automatic customer suppression after purchase</li>
              <li>• Custom audience sync to Meta Ads Manager</li>
              <li>• Prevents wasted ad spend on existing customers</li>
              <li>• Real-time updates when new orders come in</li>
            </ul>
          </div>
          
          <button
            onClick={() => setIntegrations(prev => ({
              ...prev,
              meta: { ...prev.meta, connected: !prev.meta.connected }
            }))}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              integrations.meta.connected
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {integrations.meta.connected ? 'Disconnect Meta' : 'Connect Meta Business'}
          </button>
        </div>
      </div>

      {/* Google Ads Integration */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            {/* Google Ads Logo */}
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Google Ads</h3>
              <p className="text-sm text-gray-600">Search & Display Campaigns</p>
            </div>
          </div>
          
          {integrations.google.connected ? (
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Active
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                Not Connected
              </span>
            </div>
          )}
        </div>

        {integrations.google.connected && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Connected Account:</strong> Customer ID 987-654-3210
            </p>
            <p className="text-sm text-blue-800 mt-1">
              <strong>Customer Match List:</strong> 
              <a href="#" className="underline hover:text-blue-900 ml-1">
                Shopify Purchasers - Exclude (1,892 customers)
              </a>
            </p>
          </div>
        )}

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">What this enables:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Enhanced conversions tracking</li>
              <li>• Customer Match list for exclusions</li>
              <li>• Search and display campaign optimization</li>
              <li>• Automated audience updates</li>
            </ul>
          </div>
          
          <button
            onClick={() => setIntegrations(prev => ({
              ...prev,
              google: { ...prev.google, connected: !prev.google.connected }
            }))}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              integrations.google.connected
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {integrations.google.connected ? 'Disconnect Google Ads' : 'Connect Google Ads'}
          </button>
        </div>
      </div>

      {/* TikTok Integration */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            {/* TikTok Logo */}
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">TikTok for Business</h3>
              <p className="text-sm text-gray-600">TikTok Ads Manager</p>
            </div>
          </div>
          
          {integrations.tiktok.connected ? (
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Active
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                Not Connected
              </span>
            </div>
          )}
        </div>

        {integrations.tiktok.connected && (
          <div className="mb-4 p-3 bg-pink-50 rounded-lg">
            <p className="text-sm text-pink-800">
              <strong>Connected Account:</strong> Advertiser ID 456789123
            </p>
            <p className="text-sm text-pink-800 mt-1">
              <strong>Custom Audience:</strong> 
              <a href="#" className="underline hover:text-pink-900 ml-1">
                Shopify Buyers - Suppress (892 customers)
              </a>
            </p>
          </div>
        )}

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">What this enables:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Custom audience creation and sync</li>
              <li>• Video ad campaign optimization</li>
              <li>• Audience exclusion for existing customers</li>
              <li>• Performance tracking and ROI measurement</li>
            </ul>
          </div>
          
          <button
            onClick={() => setIntegrations(prev => ({
              ...prev,
              tiktok: { ...prev.tiktok, connected: !prev.tiktok.connected }
            }))}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              integrations.tiktok.connected
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {integrations.tiktok.connected ? 'Disconnect TikTok' : 'Connect TikTok for Business'}
          </button>
        </div>
      </div>
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
