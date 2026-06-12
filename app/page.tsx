"use client";

import { useAuthStore } from "@/store/authStore";
import LoginPage from "@/components/auth/LoginPage";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ParentDashboard from "@/components/dashboards/ParentDashboard";
import ChildDashboard from "@/components/dashboards/ChildDashboard";
import SchoolDashboard from "@/components/dashboards/SchoolDashboard";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!user) {
    return <LoginPage />;
  }

  const getDashboard = () => {
    switch (user.role) {
      case "parent":
        return <ParentDashboard />;
      case "child":
        return <ChildDashboard />;
      case "school":
        return <SchoolDashboard />;
      default:
        return <LoginPage />;
    }
  };

  return <DashboardLayout>{getDashboard()}</DashboardLayout>;
}
