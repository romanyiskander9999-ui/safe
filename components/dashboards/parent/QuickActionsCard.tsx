'use client';

import { Blocks } from 'lucide-react';
export default function QuickActionsCard() {
  const actions = [
    { icon: Block, label: 'حظر تطبيق', color: 'bg-red-100 text-red-700' },
    { icon: Clock, label: 'تعديل الوقت', color: 'bg-blue-100 text-blue-700' },
    { icon: FileText, label: 'مشاركة التقرير', color: 'bg-green-100 text-green-700' },
    { icon: Lightbulb, label: 'درس توعية', color: 'bg-yellow-100 text-yellow-700' },
  ];

  return (
    <div className="card">
      <h2 className="text-xl font-bold text-gray-900 mb-4">إجراءات سريعة</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, idx) => {
          const Icon = action.icon;
          return (
            <button
              key={idx}
              className={`p-4 rounded-lg text-center transition hover:shadow-md ${action.color}`}
            >
              <Icon className="w-6 h-6 mx-auto mb-2" />
              <p className="text-xs font-medium">{action.label}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
