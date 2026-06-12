'use client';

import { useAuthStore } from '@/store/authStore';
import { LogOut, Settings, Home, FileText, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const { user, logout } = useAuthStore();

  if (!user) return null;

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'reports', label: 'التقارير', icon: FileText },
    { id: 'awareness', label: 'التوعية', icon: BookOpen },
    { id: 'settings', label: 'الإعدادات', icon: Settings },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="font-bold text-xl text-primary">SafePlay</span>
          </div>

          {/* Nav Links - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className={`px-3 py-2 rounded-lg flex items-center space-x-1 transition-colors ${
                    currentPage === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* User Profile & Logout */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {user.avatar && (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="hidden sm:inline text-sm font-medium text-gray-700">{user.name}</span>
            </div>
            <button
              onClick={() => logout()}
              className="p-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
              title="تسجيل الخروج"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}