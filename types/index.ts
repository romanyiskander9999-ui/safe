export type UserRole = 'parent' | 'child' | 'school';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Parent extends User {
  role: 'parent';
  children: string[];
}

export interface Child extends User {
  role: 'child';
  parentId: string;
  age: number;
  avatar: string;
}

export interface SchoolAdmin extends User {
  role: 'school';
  schoolName: string;
}

export interface ScreenTimeLimit {
  weekday: number;
  weekend: number;
}

export interface BedtimeBlock {
  enabled: boolean;
  from: string;
  to: string;
}

export interface CategoryLimit {
  category: 'games' | 'social' | 'video' | 'education';
  limit: number | null;
}

export interface ScreenTimeSettings {
  childId: string;
  enabled: boolean;
  notifyBeforeLimit: boolean;
  autoLockAtLimit: boolean;
  weekendMode: boolean;
  dailyLimit: ScreenTimeLimit;
  activeDays: boolean[];
  bedtimeBlock: BedtimeBlock;
  categoryLimits: CategoryLimit[];
}

export type RiskLevel = 'safe' | 'monitor' | 'blocked';

export interface App {
  id: string;
  name: string;
  icon: string;
  category: 'games' | 'social' | 'video' | 'education' | 'other';
  riskLevel: RiskLevel;
  reason?: string;
}

export interface ChildAppStatus {
  appId: string;
  app: App;
  timeToday: number;
  timeLimit: number | null;
  status: 'online' | 'offline';
}

export type AlertType = 'blocked' | 'warning' | 'success';

export interface Alert {
  id: string;
  childId: string;
  type: AlertType;
  message: string;
  timestamp: Date;
}

export interface DailyScreenTime {
  date: string;
  duration: number;
  byCategory: Record<string, number>;
}

export interface WeeklyReport {
  childId: string;
  week: string;
  dailyScreenTime: DailyScreenTime[];
  topApps: Array<{
    app: App;
    duration: number;
    riskLevel: RiskLevel;
  }>;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  ageRange: [number, number];
  duration: number;
  content: string;
  quiz: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface LessonProgress {
  childId: string;
  lessonId: string;
  completed: boolean;
  completedAt?: Date;
  quizScore?: number;
}

export interface ParentDashboardStats {
  todayScreenTime: number;
  blockedAttempts: number;
  activeChildren: number;
  totalChildren: number;
  behaviorPoints: number;
}

export interface ChildDashboardStats {
  timeRemaining: number;
  pointsEarned: number;
  lessonsCompleted: number;
}