"use client";

import MainNav from "@/components/layout/MainNav";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <MainNav />
      <main className="flex-1 ml-64">{children}</main>
    </div>
  );
}
