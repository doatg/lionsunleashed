import type { ReactNode } from 'react';
import type { Player, Priority } from '../types/franchise';

export function ScreenHeader({ eyebrow, title, subtitle, priority, badges = [] }: { eyebrow: string; title: string; subtitle: string; priority?: Priority; badges?: string[] }) {
  return (
    <div className="screen-header">
      <div>
        <p className="kicker">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="header-badges">
        {priority ? <PriorityBadge priority={priority} /> : null}
        {badges.map((badge) => <span className="status-chip" key={badge}>{badge}</span>)}
      </div>
    </div>
  );
}

export function FeaturePanel({ eyebrow, title, children, className = '' }: { eyebrow: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`feature-panel ${className}`.trim()}>
      <p className="card-eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </section>
  );
}

export function CommandPanel({ eyebrow, title, children, tone = 'standard' }: { eyebrow: string; title: string; children: ReactNode; tone?: 'standard' | 'gold' | 'danger' }) {
  return (
    <section className={`command-panel command-panel-${tone}`}>
      <p className="card-eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </section>
  );
}

export function BoardPanel({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="board-panel">
      <p className="card-eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </section>
  );
}

export function PlayerCard({ player, detail }: { player: Player; detail?: string }) {
  return (
    <article className="player-card">
      <div className="player-card-top">
        <div>
          <span className="position-chip">{player.position}</span>
          <h3>{player.name}</h3>
          <p>{player.role} · Age {player.age} · {player.devTrait}</p>
        </div>
        <RatingBadge label="OVR" value={player.overall} />
      </div>
      <p>{detail ?? player.notes}</p>
    </article>
  );
}

export function RatingBadge({ label, value }: { label: string; value: string | number }) {
  return <span className="rating-badge"><em>{label}</em><strong>{value}</strong></span>;
}

export function PriorityBadge({ priority }: { priority: Priority }) {
  return <span className={`priority-pill priority-${priority.toLowerCase()}`}>{priority}</span>;
}

export function AttributeBar({ label, value, note }: { label: string; value: number; note?: string }) {
  return (
    <div className="attribute-bar">
      <div><strong>{label}</strong><span>{value}</span></div>
      <i style={{ width: `${Math.max(8, Math.min(100, value))}%` }} />
      {note ? <p>{note}</p> : null}
    </div>
  );
}

export function DataRow({ label, title, meta, badge }: { label: string; title: string; meta: string; badge?: ReactNode }) {
  return <div className="data-row"><span>{label}</span><strong>{title}</strong><em>{meta}</em>{badge ? <div>{badge}</div> : null}</div>;
}

export function AlertStack({ items }: { items: { id: string; priority: Priority; title: string; detail: string }[] }) {
  return <div className="alert-stack">{items.map((item) => <div className="alert-item" key={item.id}><PriorityBadge priority={item.priority} /><strong>{item.title}</strong><p>{item.detail}</p></div>)}</div>;
}
