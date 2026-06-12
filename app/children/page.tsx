'use client';

import Navbar from '@/components/common/Navbar';
import { useDataStore } from '@/store/dataStore';
import { Child } from '@/types';
import { Settings, Shield } from 'lucide-react';

export default function ChildrenManagement() {
  const { children } = useDataStore();

  return (
    <div className="min-h-screen bg-secondary-light">
      <Navbar currentPage="settings" />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">إدارة الأطفال</h1>
          <p className="text-gray-600">عرض وإدارة ملفات الأطفال</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {children.map((child: Child) => (
            <div key={child.id} className="card hover:shadow-lg transition-shadow">
              {/* Avatar */}
              <div className="text-center mb-4">
                <img
                  src={child.avatar}
                  alt={child.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3"
                />
                <h3 className="text-2xl font-bold text-gray-900">{child.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{child.age} سنة</p>
              </div>

              {/* Status Badges */}
              <div className="flex gap-2 mb-4 justify-center">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  ✓ نشط
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                  محمي
                </span>
              </div>

              {/* Quick Stats */}
              <div className="space-y-2 mb-4 pb-4 border-b">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">وقت الشاشة اليوم:</span>
                  <span className="font-semibold text-gray-900">120 د</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">الحالة:</span>
                  <span className="font-semibold text-green-600">متصل</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center space-x-1 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition text-sm font-medium">
                  <Settings className="w-4 h-4" />
                  <span>إعدادات</span>
                </button>
                <button className="flex items-center justify-center space-x-1 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  <span>حماية</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Child Button */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center space-x-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition">
            <span>+</span>
            <span>إضافة طفل جديد</span>
          </button>
        </div>
      </main>
    </div>
  );
}
