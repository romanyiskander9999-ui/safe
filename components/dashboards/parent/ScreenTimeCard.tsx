'use client';

import { Child } from '@/types';
import { Clock, Wifi, WifiOff } from 'lucide-react';

interface ScreenTimeCardProps {
  children: Child[];
}

export default function ScreenTimeCard({ children }: ScreenTimeCardProps) {
  return (
    <div className="card">
      <h2 className="text-xl font-bold text-gray-900 mb-4">وقت الشاشة لكل طفل</h2>
      <div className="space-y-4">
        {children.map((child) => (
          <div key={child.id} className="flex items-center space-x-4 pb-4 border-b last:border-b-0">
            {/* Avatar */}
            <img
              src={child.avatar}
              alt={child.name}
              className="w-12 h-12 rounded-full"
            />

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-gray-900">{child.name}</h3>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {child.age} سنة
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>YouTube</span>
                <div className="flex items-center space-x-1">
                  {Math.random() > 0.5 ? (
                    <>
                      <Wifi className="w-4 h-4 text-green-600" />
                      <span>متصل</span>
                    </>
                  ) : (
                    <>
                      <WifiOff className="w-4 h-4 text-gray-400" />
                      <span>غير متصل</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-600">120 د / 180 د</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: '67%' }}
                />
              </div>
            </div>

            {/* Action Button */}
            <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition text-sm font-medium">
              تعديل
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}