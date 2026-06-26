import type { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  eyebrow: string;
  children: ReactNode;
}

export function DashboardCard({ title, eyebrow, children }: DashboardCardProps) {
  return (
    <section className="dashboard-card">
      <p className="card-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </section>
  );
}
