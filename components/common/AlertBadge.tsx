'use client';

interface AlertBadgeProps {
  type: 'blocked' | 'warning' | 'success';
  children: React.ReactNode;
}

const typeStyles = {
  blocked: 'bg-red-100 text-red-700',
  warning: 'bg-yellow-100 text-yellow-700',
  success: 'bg-green-100 text-green-700',
};

export default function AlertBadge({ type, children }: AlertBadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${typeStyles[type]}`}>
      {children}
    </span>
  );
}