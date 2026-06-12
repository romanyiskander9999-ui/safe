'use client';

interface RiskBadgeProps {
  level: 'safe' | 'monitor' | 'blocked';
}

const riskStyles = {
  safe: 'bg-green-100 text-green-700',
  monitor: 'bg-yellow-100 text-yellow-700',
  blocked: 'bg-red-100 text-red-700',
};

const riskLabels = {
  safe: 'آمن',
  monitor: 'يحتاج إشراف',
  blocked: 'محظور',
};

export default function RiskBadge({ level }: RiskBadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${riskStyles[level]}`}>
      {riskLabels[level]}
    </span>
  );
}