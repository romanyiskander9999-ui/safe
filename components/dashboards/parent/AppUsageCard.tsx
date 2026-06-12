'use client';

import { useDataStore } from '@/store/dataStore';
import RiskBadge from '@/components/common/RiskBadge';

export default function AppUsageCard() {
  const { apps } = useDataStore();
  const topApps = apps.slice(0, 5);

  return (
    <div className="card">
      <h2 className="text-xl font-bold text-gray-900 mb-4">استخدام التطبيقات</h2>
      <div className="space-y-3">
        {topApps.map((app) => (
          <div key={app.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{app.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900">{app.name}</p>
                <p className="text-xs text-gray-500">{app.category}</p>
              </div>
            </div>
            <RiskBadge level={app.riskLevel} />
          </div>
        ))}
      </div>
    </div>
  );
}