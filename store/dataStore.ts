import { create } from 'zustand';
import { Child, ScreenTimeSettings, Alert, App } from '@/types';

interface DataState {
  children: Child[];
  getChild: (id: string) => Child | undefined;
  screenTimeSettings: Record<string, ScreenTimeSettings>;
  getScreenTimeSettings: (childId: string) => ScreenTimeSettings | undefined;
  updateScreenTimeSettings: (childId: string, settings: Partial<ScreenTimeSettings>) => void;
  apps: App[];
  getAppsByRisk: (risk: 'safe' | 'monitor' | 'blocked') => App[];
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
  getAlertsByChild: (childId: string) => Alert[];
}

const mockApps: App[] = [
  { id: 'app-1', name: 'Minecraft', icon: '🎮', category: 'games', riskLevel: 'safe' },
  { id: 'app-2', name: 'YouTube Kids', icon: '📺', category: 'video', riskLevel: 'safe' },
  { id: 'app-3', name: 'TikTok', icon: '📱', category: 'social', riskLevel: 'monitor', reason: 'يحتاج إشراف' },
  { id: 'app-4', name: 'PUBG Mobile', icon: '🎯', category: 'games', riskLevel: 'blocked', reason: 'محتوى عنيف' },
  { id: 'app-5', name: 'Duolingo', icon: '📚', category: 'education', riskLevel: 'safe' },
  { id: 'app-6', name: 'Discord', icon: '💬', category: 'social', riskLevel: 'monitor', reason: 'اتصالات غير محدودة' },
];

const mockChildren: Child[] = [
  { id: 'child-1', name: 'عمر', email: 'omar@example.com', role: 'child', age: 12, parentId: 'parent-1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omar' },
  { id: 'child-2', name: 'ليلى', email: 'layla@example.com', role: 'child', age: 9, parentId: 'parent-1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Layla' },
  { id: 'child-3', name: 'سارة', email: 'sara@example.com', role: 'child', age: 16, parentId: 'parent-1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara' },
];

const mockScreenTimeSettings: Record<string, ScreenTimeSettings> = {
  'child-1': {
    childId: 'child-1',
    enabled: true,
    notifyBeforeLimit: true,
    autoLockAtLimit: true,
    weekendMode: true,
    dailyLimit: { weekday: 120, weekend: 180 },
    activeDays: [true, true, true, true, true, true, true],
    bedtimeBlock: { enabled: true, from: '22:00', to: '07:00' },
    categoryLimits: [
      { category: 'games', limit: 60 },
      { category: 'social', limit: 30 },
      { category: 'video', limit: 45 },
      { category: 'education', limit: null },
    ],
  },
};

const mockAlerts: Alert[] = [
  { id: 'alert-1', childId: 'child-1', type: 'blocked', message: 'محاولة فتح PUBG Mobile', timestamp: new Date(Date.now() - 5 * 60000) },
  { id: 'alert-2', childId: 'child-1', type: 'warning', message: 'اقترب من حد الشاشة', timestamp: new Date(Date.now() - 15 * 60000) },
  { id: 'alert-3', childId: 'child-2', type: 'success', message: 'أكمل درس بنجاح', timestamp: new Date(Date.now() - 30 * 60000) },
];

export const useDataStore = create<DataState>((set, get) => ({
  children: mockChildren,
  getChild: (id) => get().children.find(c => c.id === id),
  screenTimeSettings: mockScreenTimeSettings,
  getScreenTimeSettings: (childId) => get().screenTimeSettings[childId],
  updateScreenTimeSettings: (childId, settings) => set((state) => ({
    screenTimeSettings: {
      ...state.screenTimeSettings,
      [childId]: {
        ...state.screenTimeSettings[childId],
        ...settings,
      },
    },
  })),
  apps: mockApps,
  getAppsByRisk: (risk) => get().apps.filter(app => app.riskLevel === risk),
  alerts: mockAlerts,
  addAlert: (alert) => set((state) => ({
    alerts: [alert, ...state.alerts],
  })),
  getAlertsByChild: (childId) => get().alerts.filter(a => a.childId === childId),
}));
