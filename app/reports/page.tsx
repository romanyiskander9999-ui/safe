'use client';

import Navbar from '@/components/common/Navbar';
import { FileText, TrendingUp, Calendar, Download } from 'lucide-react';

export default function Reports() {
  const reportData = [
    { day: 'الأحد', duration: 120, apps: 5 },
    { day: 'الاثنين', duration: 145, apps: 6 },
    { day: 'الثلاثاء', duration: 95, apps: 4 },
    { day: 'الأربعاء', duration: 180, apps: 7 },
    { day: 'الخميس', duration: 110, apps: 5 },
    { day: 'الجمعة', duration: 200, apps: 8 },
    { day: 'السبت', duration: 165, apps: 6 },
  ];

  const maxDuration = Math.max(...reportData.map(d => d.duration));

  return (
    <div className="min-h-screen bg-secondary-light">
      <Navbar currentPage="reports" />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">التقارير</h1>
          <p className="text-gray-600">تحليل شامل لأنشطة الأطفال</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">متوسط وقت الشاشة الأسبوعي</p>
                <p className="text-3xl font-bold text-primary">141 دقيقة</p>
              </div>
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">أكثر يوم استخداماً</p>
                <p className="text-3xl font-bold text-orange-600">الجمعة</p>
              </div>
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">عدد التطبيقات المستخدمة</p>
                <p className="text-3xl font-bold text-green-600">12 تطبيق</p>
              </div>
              <FileText className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Weekly Chart */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-6">الاستخدام الأسبوعي</h2>

          <div className="flex items-end justify-between h-64 gap-2 mb-4">
            {reportData.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div className="relative w-full h-full flex items-end justify-center">
                  <div
                    className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all hover:from-primary/90"
                    style={{ height: `${(item.duration / maxDuration) * 100}%` }}
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs font-semibold text-gray-900">{item.day}</p>
                  <p className="text-xs text-gray-600">{item.duration} د</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Apps */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">أكثر التطبيقات استخداماً</h2>

          <div className="space-y-4">
            {[
              { name: 'YouTube', duration: 450, icon: '📺', percent: 100 },
              { name: 'Minecraft', duration: 380, icon: '🎮', percent: 84 },
              { name: 'TikTok', duration: 320, icon: '📱', percent: 71 },
              { name: 'Discord', duration: 210, icon: '💬', percent: 47 },
              { name: 'Duolingo', duration: 120, icon: '📚', percent: 27 },
            ].map((app) => (
              <div key={app.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{app.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{app.name}</p>
                    <p className="text-sm text-gray-600">{app.duration} دقيقة</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{app.percent}%</p>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${app.percent}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Button */}
        <div className="mt-8 flex justify-center">
          <button className="flex items-center space-x-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition">
            <Download className="w-5 h-5" />
            <span>تحميل التقرير</span>
          </button>
        </div>
      </main>
    </div>
  );
}