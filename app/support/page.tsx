'use client';

import Navbar from '@/components/common/Navbar';
import { Mail, Phone, MessageSquare, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Support() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-secondary-light">
      <Navbar currentPage="settings" />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">الدعم والمساعدة</h1>
          <p className="text-gray-600">نحن هنا لمساعدتك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="card flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
                <p className="text-gray-600 text-sm">support@safeplay.com</p>
              </div>
            </div>

            <div className="card flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">الهاتف</h3>
                <p className="text-gray-600 text-sm">+966 11 1234 5678</p>
              </div>
            </div>

            <div className="card flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">المقر الرئيسي</h3>
                <p className="text-gray-600 text-sm">الرياض، المملكة العربية السعودية</p>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>الأسئلة الشائعة</span>
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-primary font-medium cursor-pointer hover:underline">كيفية تعيين حد وقت الشاشة؟</p>
                <p className="text-primary font-medium cursor-pointer hover:underline">كيفية حظر تطبيق معين؟</p>
                <p className="text-primary font-medium cursor-pointer hover:underline">كيفية عرض التقارير؟</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>

            {submitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                شكراً لك! سنرد عليك قريباً.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">الاسم</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">الرسالة</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}