import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DashboardCard } from './DashboardCard';

describe('DashboardCard', () => {
  it('renders title, eyebrow, and children', () => {
    render(
      <DashboardCard title="Card Title" eyebrow="Card Eyebrow">
        <p>Card Content</p>
      </DashboardCard>,
    );
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Eyebrow')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <DashboardCard title="T" eyebrow="E" className="wide-card">
        <span>content</span>
      </DashboardCard>,
    );
    expect(container.querySelector('.dashboard-card.wide-card')).toBeInTheDocument();
  });

  it('uses default empty className', () => {
    const { container } = render(
      <DashboardCard title="T" eyebrow="E">
        <span>content</span>
      </DashboardCard>,
    );
    const section = container.querySelector('section');
    expect(section?.className).toBe('dashboard-card');
  });

  it('renders heading as h2', () => {
    render(
      <DashboardCard title="Heading Test" eyebrow="E">
        <span>c</span>
      </DashboardCard>,
    );
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Heading Test');
  });

  it('wraps children in card-content div', () => {
    const { container } = render(
      <DashboardCard title="T" eyebrow="E">
        <span data-testid="child">child</span>
      </DashboardCard>,
    );
    const contentDiv = container.querySelector('.card-content');
    expect(contentDiv).toBeInTheDocument();
    expect(contentDiv?.querySelector('[data-testid="child"]')).toBeInTheDocument();
  });
});
