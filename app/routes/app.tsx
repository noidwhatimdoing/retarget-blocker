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
    meta: { connected: true, suppressionDays: 90 },
    google: { connected: false, suppressionDays: 90 },
    tiktok: { connected: false, suppressionDays: 90 }
  });

  const StatCard = ({ title, value, change, icon, color }) => (
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
        <div className="text-sm text-gray-500">
          Connected to: <span className="font-semibold">{shop}</span>
        </div>
      </div>
      
      {installed && (
        <div style={{ 
          background: '#d1fae5', 
          border: '1px solid #10b981', 
          padding: '16px', 
          borderRadius: '8px',
          marginBottom: '24px'
        }}>
          <h2 style={{ color: '#065f46', margin: '0 0 8px 0' }}>
            🎉 Installation Successful!
          </h2>
          <p style={{ color: '#047857', margin: 0 }}>
            Your app is now connected and ready to save ad spend!
          </p>
        </div>
      )}
      
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✅</span>
              <span className="text-sm">247 customers added to Meta suppression list</span>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✅</span>
              <span className="text-sm">Google Ads audience updated with 89 new customers</span>
              <span className="text-xs text-gray-500">4 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-500">🎯</span>
              <span className="text-sm">Campaign "Summer Sale 2025" optimized</span>
              <span className="text-xs text-gray-500">6 hours ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Sync All Platforms
            </button>
            <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
              View Campaign Performance
            </button>
            <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
              Download Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const IntegrationsPage = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Platform Integrations</h1>
      
      <div className="grid gap-6">
        {/* Meta Integration */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">📘</div>
              <div>
                <h3 className="text-lg font-semibold">Meta (Facebook & Instagram)</h3>
                <p className="text-sm text-gray-600">Sync customer data with Meta Ads Manager</p>
              </div>
            </div>
            <span className="text-2xl">
              {integrations.meta.connected ? "✅" : "❌"}
            </span>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Suppression Duration
              </label>
              <select 
                className="border border-gray-300 rounded-md px-3 py-2 w-32"
                value={integrations.meta.suppressionDays}
                onChange={(e) => setIntegrations(prev => ({
                  ...prev,
                  meta: { ...prev.meta, suppressionDays: parseInt(e.target.value) }
                }))}
              >
                <option value={30}>30 days</option>
                <option value={60}>60 days</option>
                <option value={90}>90 days (Recommended)</option>
                <option value={120}>120 days</option>
              </select>
            </div>
            
            <button 
              className={`px-4 py-2 rounded-md ${
                integrations.meta.connected 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
              onClick={() => setIntegrations(prev => ({
                ...prev,
                meta: { ...prev.meta, connected: !prev.meta.connected }
              }))}
            >
              {integrations.meta.connected ? 'Disconnect' : 'Connect Meta'}
            </button>
          </div>
        </div>

        {/* Google Integration */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🔍</div>
              <div>
                <h3 className="text-lg font-semibold">Google Ads</h3>
                <p className="text-sm text-gray-600">Sync with Google Ads Customer Match</p>
              </div>
            </div>
            <span className="text-2xl">
              {integrations.google.connected ? "✅" : "❌"}
            </span>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Suppression Duration
              </label>
              <select 
                className="border border-gray-300 rounded-md px-3 py-2 w-32"
                value={integrations.google.suppressionDays}
                onChange={(e) => setIntegrations(prev => ({
                  ...prev,
                  google: { ...prev.google, suppressionDays: parseInt(e.target.value) }
                }))}
              >
                <option value={30}>30 days</option>
                <option value={60}>60 days</option>
                <option value={90}>90 days (Recommended)</option>
                <option value={120}>120 days</option>
              </select>
            </div>
            
            <button 
              className={`px-4 py-2 rounded-md ${
                integrations.google.connected 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
              onClick={() => setIntegrations(prev => ({
                ...prev,
                google: { ...prev.google, connected: !prev.google.connected }
              }))}
            >
              {integrations.google.connected ? 'Disconnect' : 'Connect Google Ads'}
            </button>
          </div>
        </div>

        {/* TikTok Integration */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🎵</div>
              <div>
                <h3 className="text-lg font-semibold">TikTok Ads</h3>
                <p className="text-sm text-gray-600">Sync with TikTok Ads Manager</p>
              </div>
            </div>
            <span className="text-2xl">
              {integrations.tiktok.connected ? "✅" : "❌"}
            </span>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Suppression Duration
              </label>
              <select 
                className="border border-gray-300 rounded-md px-3 py-2 w-32"
                value={integrations.tiktok.suppressionDays}
                onChange={(e) => setIntegrations(prev => ({
                  ...prev,
                  tiktok: { ...prev.tiktok, suppressionDays: parseInt(e.target.value) }
                }))}
              >
                <option value={30}>30 days</option>
                <option value={60}>60 days</option>
                <option value={90}>90 days (Recommended)</option>
                <option value={120}>120 days</option>
              </select>
            </div>
            
            <button 
              className={`px-4 py-2 rounded-md ${
                integrations.tiktok.connected 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-black hover:bg-gray-800 text-white'
              }`}
              onClick={() => setIntegrations(prev => ({
                ...prev,
                tiktok: { ...prev.tiktok, connected: !prev.tiktok.connected }
              }))}
            >
              {integrations.tiktok.connected ? 'Disconnect' : 'Connect TikTok'}
            </button>
          </div>
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
