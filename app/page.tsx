'use client';

import { useState } from 'react';
import LoginPage from '@/components/auth/LoginPage';
import ParentDashboard from '@/components/dashboards/ParentDashboard';
import ChildDashboard from '@/components/dashboards/ChildDashboard';
import SchoolDashboard from '@/components/dashboards/SchoolDashboard';
import { useAuthStore } from '@/store/authStore';

export default function Home() {
  const { user } = useAuthStore();

  if (!user) {
    return <LoginPage />;
  }

  switch (user.role) {
    case 'parent':
      return <ParentDashboard />;
    case 'child':
      return <ChildDashboard />;
    case 'school':
      return <SchoolDashboard />;
    default:
      return <LoginPage />;
  }
}
