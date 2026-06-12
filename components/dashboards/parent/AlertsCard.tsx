'use client';

import { useDataStore } from '@/store/dataStore';
import { AlertCircle, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import AlertBadge from '@/components/common/AlertBadge';

function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  if (seconds < 60) return 'الآن';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} د`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} س`;
  return `${Math.floor(seconds / 86400)} يوم`;
}

export default function AlertsCard() {
  const { getAlertsByChild } = useDataStore();
  const alerts = getAlertsByChild('child-1').slice(0, 5);

  const iconMap = {
    blocked: <AlertCircle className="w-5 h-5 text-red-600" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
    success: <CheckCircle className="w-5 h-5 text-green-600" />,
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold text-gray-900 mb-4">تنبيهات اليوم</h2>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            {iconMap[alert.type]}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 font-medium">{alert.message}</p>
              <div className="flex items-center space-x-2 mt-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500">{formatTimeAgo(alert.timestamp)}</span>
              </div>
            </div>
            <AlertBadge type={alert.type}>
              {alert.type === 'blocked' && 'محظور'}
              {alert.type === 'warning' && 'تحذير'}
              {alert.type === 'success' && 'نجح'}
            </AlertBadge>
          </div>
        ))}
      </div>
    </div>
  );
}