'use client';

import Navbar from '@/components/common/Navbar';
import { BookOpen, CheckCircle, Clock, Award } from 'lucide-react';

export default function Awareness() {
  const lessons = [
    {
      id: 1,
      title: 'الأمان الرقمي الأساسي',
      description: 'تعرف على كيفية حماية بيانات شخصية',
      ageRange: '8-12',
      duration: 15,
      completed: true,
      icon: '🔐',
    },
    {
      id: 2,
      title: 'التنمر الإلكتروني ومواجهته',
      description: 'تعلم كيفية التعامل مع المتنمرين اون لاين',
      ageRange: '10-16',
      duration: 20,
      completed: true,
      icon: '🛡️',
    },
    {
      id: 3,
      title: 'إدارة الخصوصية على وسائل التواصل',
      description: 'حماية خصوصيتك على الإنترنت',
      ageRange: '12-18',
      duration: 18,
      completed: false,
      icon: '🔒',
    },
    {
      id: 4,
      title: 'التفكير النقدي والمعلومات المزيفة',
      description: 'كيفية التحقق من صحة المعلومات',
      ageRange: '11-16',
      duration: 22,
      completed: false,
      icon: '🧠',
    },
    {
      id: 5,
      title: 'التوازن الصحي بين الشاشات والحياة الحقيقية',
      description: 'أهمية قضاء وقت بعيداً عن الأجهزة',
      ageRange: '8-14',
      duration: 16,
      completed: false,
      icon: '⚖️',
    },
    {
      id: 6,
      title: 'احترام حقوق الملكية الفكرية',
      description: 'فهم براءات الاختراع والحقوق الرقمية',
      ageRange: '13-18',
      duration: 19,
      completed: false,
      icon: '⚖️',
    },
  ];

  const completedCount = lessons.filter(l => l.completed).length;
  const totalMinutes = lessons.filter(l => l.completed).reduce((sum, l) => sum + l.duration, 0);

  return (
    <div className="min-h-screen bg-secondary-light">
      <Navbar currentPage="awareness" />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">دروس التوعية الرقمية</h1>
          <p className="text-gray-600">تعليم الأطفال أساسيات الأمان والسلوك الرقمي</p>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">الدروس المكتملة</p>
                <p className="text-3xl font-bold text-primary">{completedCount}/{lessons.length}</p>
              </div>
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">الدقائق المتعلمة</p>
                <p className="text-3xl font-bold text-green-600">{totalMinutes} دقيقة</p>
              </div>
              <Clock className="w-6 h-6 text-green-600" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">النسبة المئوية</p>
                <p className="text-3xl font-bold text-blue-600">{Math.round((completedCount / lessons.length) * 100)}%</p>
              </div>
              <Award className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className={`card transition-all ${
                lesson.completed ? 'border-2 border-green-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{lesson.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{lesson.title}</h3>
                    <p className="text-xs text-gray-600">للأعمار {lesson.ageRange}</p>
                  </div>
                </div>
                {lesson.completed && (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                )}
              </div>

              <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{lesson.duration} دقيقة</span>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    lesson.completed
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-primary/10 text-primary hover:bg-primary/20'
                  }`}
                >
                  {lesson.completed ? '✓ مكتمل' : 'ابدأ الآن'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}