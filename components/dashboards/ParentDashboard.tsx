'use client';

import { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import StatCard from '@/components/common/StatCard';
import { useAuthStore } from '@/store/authStore';
import { useDataStore } from '@/store/dataStore';
import { Activity, AlertTriangle, Users, Zap } from 'lucide-react';
import ScreenTimeCard from './parent/ScreenTimeCard';
import AlertsCard from './parent/AlertsCard';
import AppUsageCard from './parent/AppUsageCard';
import QuickActionsCard from './parent/QuickActionsCard';

export default function ParentDashboard() {
  const { user } = useAuthStore();
  const { children } = useDataStore();
  const parent = user as any;

  const today = new Date();
  const dateStr = today.toLocaleDateString('ar-SA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Mock stats
  const stats = {
    todayScreenTime: 245,
    blockedAttempts: 3,
    activeChildren: 2,
    totalChildren: 3,
    behaviorPoints: 1250,
  };

  return (
    <div className="min-h-screen bg-secondary-light">
      <Navbar currentPage="home" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Greeting Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            مرحباً {parent?.name}
          </h1>
          <p className="text-gray-600">{dateStr}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard
            label="وقت الشاشة اليوم"
            value={`${stats.todayScreenTime} د`}
            icon={<Activity className="w-6 h-6" />}
            color="primary"
          />
          <StatCard
            label="محاولات محظورة"
            value={stats.blockedAttempts}
            icon={<AlertTriangle className="w-6 h-6" />}
            color="danger"
          />
          <StatCard
            label="الأطفال النشطين"
            value={`${stats.activeChildren}/${stats.totalChildren}`}
            icon={<Users className="w-6 h-6" />}
            color="success"
          />
          <StatCard
            label="نقاط السلوك"
            value={stats.behaviorPoints}
            icon={<Zap className="w-6 h-6" />}
            color="warning"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Cards */}
          <div className="lg:col-span-2 space-y-6">
            <ScreenTimeCard children={children} />
            <AlertsCard />
          </div>

          {/* Right Column - Side Cards */}
          <div className="space-y-6">
            <AppUsageCard />
            <QuickActionsCard />
          </div>
        </div>
      </main>
    </div>
  );
}