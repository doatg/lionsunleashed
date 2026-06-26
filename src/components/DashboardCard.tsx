import type { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  eyebrow: string;
  children: ReactNode;
  className?: string;
}

export function DashboardCard({ title, eyebrow, children, className = '' }: DashboardCardProps) {
  return (
    <section className={`dashboard-card ${className}`.trim()}>
      <p className="card-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </section>
  );
}
