'use client';

import Navbar from '@/components/common/Navbar';
import { Award, BookOpen, Smile } from 'lucide-react';

export default function ChildDashboard() {
  const timeRemaining = 120; // minutes
  const maxTime = 180;
  const percentRemaining = (timeRemaining / maxTime) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300">
      <Navbar currentPage="home" />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Friendly Greeting */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">مرحباً عمر! 👋</h1>
          <p className="text-white/80 text-lg">آمل أن تقضي يوماً رائعاً!</p>
        </div>

        {/* Points & Badges */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-card p-6 text-center shadow-lg">
            <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-3xl font-bold text-gray-900">1,250</p>
            <p className="text-sm text-gray-600">نقاط مكتسبة</p>
          </div>
          <div className="bg-white rounded-card p-6 text-center shadow-lg">
            <Smile className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-3xl font-bold text-gray-900">5</p>
            <p className="text-sm text-gray-600">شارات مكتسبة</p>
          </div>
        </div>

        {/* Time Remaining - Large Circular Progress */}
        <div className="bg-white rounded-card p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">الوقت المتبقي اليوم</h2>
          <div className="flex justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                />
                {/* Progress circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#1D9E75"
                  strokeWidth="12"
                  strokeDasharray={`${(percentRemaining / 100) * 565} 565`}
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-4xl font-bold text-primary">{timeRemaining}</p>
                <p className="text-gray-600 text-sm">دقيقة متبقية</p>
              </div>
            </div>
          </div>
        </div>

        {/* Allowed Apps */}
        <div className="bg-white rounded-card p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">التطبيقات المتاحة</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Minecraft', icon: '🎮', remaining: '45 د' },
              { name: 'YouTube Kids', icon: '📺', remaining: '30 د' },
              { name: 'Duolingo', icon: '📚', remaining: 'غير محدود' },
            ].map((app, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-card p-4 text-center">
                <p className="text-4xl mb-2">{app.icon}</p>
                <p className="font-bold text-gray-900 text-sm mb-1">{app.name}</p>
                <p className="text-xs text-primary font-semibold">{app.remaining}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gamified Missions */}
        <div className="bg-white rounded-card p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">المهام اليومية 🎯</h2>
          <div className="space-y-3">
            {[
              { title: 'أكمل درس باللغة الإنجليزية', reward: '+100 نقطة', completed: false },
              { title: 'قراءة مقال عن الأمان الرقمي', reward: '+75 نقطة', completed: true },
              { title: 'ساعد شخصاً بحل مسألة رياضية', reward: '+50 نقطة', completed: false },
            ].map((mission, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  mission.completed
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-300'
                }`}>
                  {mission.completed && <span className="text-white text-sm">✓</span>}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${mission.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {mission.title}
                  </p>
                </div>
                <span className="text-primary font-bold text-sm">{mission.reward}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}