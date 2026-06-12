import { create } from 'zustand';
import { User, Parent, Child, SchoolAdmin } from '@/types';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string, role: 'parent' | 'child' | 'school') => void;
  logout: () => void;
}

const mockParent: Parent = {
  id: 'parent-1',
  name: 'أحمد محمود',
  email: 'parent@example.com',
  role: 'parent',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
  children: ['child-1', 'child-2', 'child-3'],
};

const mockChild1: Child = {
  id: 'child-1',
  name: 'عمر',
  email: 'child@example.com',
  role: 'child',
  age: 12,
  parentId: 'parent-1',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omar',
};

const mockSchoolAdmin: SchoolAdmin = {
  id: 'school-1',
  name: 'مدرسة النور',
  email: 'school@example.com',
  role: 'school',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=School',
  schoolName: 'مدرسة النور الأهلية',
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  login: (email, password, role) => {
    let user: User | null = null;
    if (role === 'parent' && email === 'parent@example.com') {
      user = mockParent;
    } else if (role === 'child' && email === 'child@example.com') {
      user = mockChild1;
    } else if (role === 'school' && email === 'school@example.com') {
      user = mockSchoolAdmin;
    }
    set({ user });
  },
  logout: () => set({ user: null }),
}));
