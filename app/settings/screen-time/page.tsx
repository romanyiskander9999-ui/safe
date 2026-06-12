'use client';

import { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import { useDataStore } from '@/store/dataStore';
import { Clock, Zap, Moon, AlertCircle } from 'lucide-react';

export default function ScreenTimeSettings() {
const { getScreenTimeSettings } = useDataStore();
  const settings = getScreenTimeSettings('child-1');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!settings) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-secondary-light">
      <Navbar currentPage="settings" />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">إعدادات وقت الشاشة</h1>
          <p className="text-gray-600">إدارة حدود وقت استخدام الأجهزة</p>
        </div>

        {/* Success Message */}
        {saved && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>تم حفظ الإعدادات بنجاح</span>
          </div>
        )}

        <div className="space-y-6">
          {/* Daily Limits */}
          <div className="card">
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">الحد اليومي</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">أيام الأسبوع (دقيقة)</label>
                <input
                  type="number"
                  defaultValue={settings.dailyLimit.weekday}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">نهاية الأسبوع (دقيقة)</label>
                <input
                  type="number"
                  defaultValue={settings.dailyLimit.weekend}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Bedtime Block */}
          <div className="card">
            <div className="flex items-center space-x-2 mb-6">
              <Moon className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">حجب وقت النوم</h2>
            </div>

            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  defaultChecked={settings.bedtimeBlock.enabled}
                  className="w-5 h-5 rounded border-gray-300"
                />
                <span className="text-gray-700 font-medium">تفعيل حجب وقت النوم</span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">من</label>
                  <input
                    type="time"
                    defaultValue={settings.bedtimeBlock.from}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">إلى</label>
                  <input
                    type="time"
                    defaultValue={settings.bedtimeBlock.to}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Category Limits */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">حدود الفئات</h2>

            <div className="space-y-4">
              {settings.categoryLimits.map((cat) => (
                <div key={cat.category} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-900">
                    {cat.category === 'games' && '🎮 الألعاب'}
                    {cat.category === 'social' && '📱 وسائل التواصل'}
                    {cat.category === 'video' && '📺 الفيديو'}
                    {cat.category === 'education' && '📚 التعليم'}
                  </span>
                  <input
                    type="number"
                    defaultValue={cat.limit || ''}
                    placeholder="غير محدود"
                    className="w-32 px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="card">
            <div className="flex items-center space-x-2 mb-6">
              <AlertCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">التنبيهات</h2>
            </div>

            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  defaultChecked={settings.notifyBeforeLimit}
                  className="w-5 h-5 rounded border-gray-300"
                />
                <span className="text-gray-700 font-medium">إخطار قبل الوصول للحد</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  defaultChecked={settings.autoLockAtLimit}
                  className="w-5 h-5 rounded border-gray-300"
                />
                <span className="text-gray-700 font-medium">قفل تلقائي عند الوصول للحد</span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            حفظ الإعدادات
          </button>
        </div>
      </main>
    </div>
  );
}
