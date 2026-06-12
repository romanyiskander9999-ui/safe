'use client';

import { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import RiskBadge from '@/components/common/RiskBadge';
import { useDataStore } from '@/store/dataStore';
import { Search, AlertTriangle } from 'lucide-react';

export default function ContentFilter() {
  const { apps } = useDataStore();
  const [filter, setFilter] = useState<'all' | 'safe' | 'monitor' | 'blocked'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApps = apps.filter((app) => {
    if (filter !== 'all' && app.riskLevel !== filter) return false;
    if (searchQuery && !app.name.includes(searchQuery)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-secondary-light">
      <Navbar currentPage="settings" />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">مرشح المحتوى</h1>
          <p className="text-gray-600">إدارة التطبيقات والمواقع المسموحة والمحظورة</p>
        </div>

        {/* Search & Filter */}
        <div className="card mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث عن تطبيق..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Risk Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {(['all', 'safe', 'monitor', 'blocked'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === f
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {f === 'all' && 'الكل'}
                {f === 'safe' && '✓ آمن'}
                {f === 'monitor' && '⚠ يحتاج إشراف'}
                {f === 'blocked' && '✕ محظور'}
              </button>
            ))}
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredApps.map((app) => (
            <div key={app.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{app.icon}</div>
                <RiskBadge level={app.riskLevel} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1">{app.name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {app.category === 'games' && '🎮 لعبة'}
                {app.category === 'social' && '📱 وسائل تواصل'}
                {app.category === 'video' && '📺 فيديو'}
                {app.category === 'education' && '📚 تعليم'}
              </p>

              {app.reason && (
                <div className="flex items-start space-x-2 p-3 bg-yellow-50 rounded-lg mb-4">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-yellow-700">{app.reason}</p>
                </div>
              )}

              <div className="flex gap-2">
                {app.riskLevel === 'blocked' ? (
                  <button className="flex-1 bg-green-100 text-green-700 font-medium py-2 rounded-lg hover:bg-green-200 transition">
                    إلغاء الحظر
                  </button>
                ) : (
                  <button className="flex-1 bg-red-100 text-red-700 font-medium py-2 rounded-lg hover:bg-red-200 transition">
                    حظر
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
