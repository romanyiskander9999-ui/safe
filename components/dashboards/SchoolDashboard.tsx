'use client';

import Navbar from '@/components/common/Navbar';
import StatCard from '@/components/common/StatCard';
import { Users, AlertCircle, FileText, BookOpen } from 'lucide-react';

export default function SchoolDashboard() {
  const students = [
    { id: 1, name: 'محمد أحمد', screenTime: 120, risk: 'safe', completion: 85 },
    { id: 2, name: 'فاطمة علي', screenTime: 145, risk: 'monitor', completion: 72 },
    { id: 3, name: 'أمير سالم', screenTime: 180, risk: 'blocked', completion: 45 },
    { id: 4, name: 'هند خالد', screenTime: 95, risk: 'safe', completion: 90 },
  ];

  return (
    <div className="min-h-screen bg-secondary-light">
      <Navbar currentPage="home" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">لوحة المدرسة</h1>
          <p className="text-gray-600">الصف الخامس أ</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="عدد الطلاب"
            value={students.length}
            icon={<Users className="w-6 h-6" />}
          />
          <StatCard
            label="طلاب بتنبيهات"
            value={2}
            icon={<AlertCircle className="w-6 h-6" />}
            color="warning"
          />
          <StatCard
            label="متوسط وقت الشاشة"
            value="135 د"
            icon={<FileText className="w-6 h-6" />}
          />
          <StatCard
            label="إكمال الدروس"
            value="73%"
            icon={<BookOpen className="w-6 h-6" />}
            color="success"
          />
        </div>

        {/* Students Table */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">ملخص الطلاب</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الاسم</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">وقت الشاشة</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">إكمال الدروس</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{student.name}</td>
                    <td className="py-3 px-4 text-gray-600">{student.screenTime} د</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.risk === 'safe' ? 'bg-green-100 text-green-700' :
                        student.risk === 'monitor' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {student.risk === 'safe' ? 'آمن' : student.risk === 'monitor' ? 'يحتاج إشراف' : 'محظور'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${student.completion}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-center">{student.completion}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}