'use client';

import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'parent' | 'child' | 'school'>('parent');
  const { login } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, role);
  };

  const demoCredentials = {
    parent: 'parent@example.com',
    child: 'child@example.com',
    school: 'school@example.com',
  };

  const fillDemoCredentials = (selectedRole: 'parent' | 'child' | 'school') => {
    setRole(selectedRole);
    setEmail(demoCredentials[selectedRole]);
    setPassword('demo');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary-light to-secondary-lighter flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white p-4 rounded-full mb-4 shadow-lg">
            <LogIn className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">SafePlay</h1>
          <p className="text-white/80">منصة سلامة الأطفال الرقمية</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-card shadow-lg p-8">
          {/* Role Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">اختر دورك</label>
            <div className="grid grid-cols-3 gap-2">
              {(['parent', 'child', 'school'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`py-2 px-3 rounded-lg font-medium transition-all text-sm ${
                    role === r
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-secondary-lighter text-gray-700 hover:bg-primary/10'
                  }`}
                >
                  {r === 'parent' && 'ولي الأمر'}
                  {r === 'child' && 'الطفل'}
                  {r === 'school' && 'المدرسة'}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">كلمة المرور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              دخول
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="border-t pt-6">
            <p className="text-sm text-gray-600 mb-3 text-center">جرّب بيانات العرض التوضيحي:</p>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => fillDemoCredentials('parent')}
                className="text-xs bg-secondary-lighter hover:bg-primary/10 text-gray-700 py-2 px-2 rounded transition font-medium"
              >
                ولي أمر
              </button>
              <button
                onClick={() => fillDemoCredentials('child')}
                className="text-xs bg-secondary-lighter hover:bg-primary/10 text-gray-700 py-2 px-2 rounded transition font-medium"
              >
                طفل
              </button>
              <button
                onClick={() => fillDemoCredentials('school')}
                className="text-xs bg-secondary-lighter hover:bg-primary/10 text-gray-700 py-2 px-2 rounded transition font-medium"
              >
                مدرسة
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white/70 text-sm mt-6">جميع البيانات محلية | لا توجد بيانات حقيقية</p>
      </div>
    </div>
  );
}