import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  ScreenHeader,
  FeaturePanel,
  CommandPanel,
  BoardPanel,
  PlayerCard,
  RatingBadge,
  PriorityBadge,
  AttributeBar,
  DataRow,
  AlertStack,
} from './CommandComponents';
import type { Player, Priority } from '../types/franchise';

describe('ScreenHeader', () => {
  it('renders eyebrow, title, and subtitle', () => {
    render(<ScreenHeader eyebrow="Test Eyebrow" title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Eyebrow')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders priority badge when priority is provided', () => {
    render(<ScreenHeader eyebrow="E" title="T" subtitle="S" priority="High" />);
    expect(screen.getByText('High')).toBeInTheDocument();
  });

  it('does not render priority badge when priority is omitted', () => {
    render(<ScreenHeader eyebrow="E" title="T" subtitle="S" />);
    expect(screen.queryByText('High')).not.toBeInTheDocument();
  });

  it('renders badges', () => {
    render(<ScreenHeader eyebrow="E" title="T" subtitle="S" badges={['Badge1', 'Badge2']} />);
    expect(screen.getByText('Badge1')).toBeInTheDocument();
    expect(screen.getByText('Badge2')).toBeInTheDocument();
  });

  it('renders empty badges array without error', () => {
    const { container } = render(<ScreenHeader eyebrow="E" title="T" subtitle="S" badges={[]} />);
    expect(container.querySelector('.header-badges')).toBeInTheDocument();
  });
});

describe('FeaturePanel', () => {
  it('renders eyebrow, title, and children', () => {
    render(
      <FeaturePanel eyebrow="Panel Eyebrow" title="Panel Title">
        <p>Panel Content</p>
      </FeaturePanel>,
    );
    expect(screen.getByText('Panel Eyebrow')).toBeInTheDocument();
    expect(screen.getByText('Panel Title')).toBeInTheDocument();
    expect(screen.getByText('Panel Content')).toBeInTheDocument();
  });

  it('applies className when provided', () => {
    const { container } = render(
      <FeaturePanel eyebrow="E" title="T" className="custom-class">
        <span>content</span>
      </FeaturePanel>,
    );
    expect(container.querySelector('.feature-panel.custom-class')).toBeInTheDocument();
  });

  it('uses default empty className', () => {
    const { container } = render(
      <FeaturePanel eyebrow="E" title="T">
        <span>content</span>
      </FeaturePanel>,
    );
    const section = container.querySelector('section');
    expect(section?.className).toBe('feature-panel');
  });
});

describe('CommandPanel', () => {
  it('renders with default standard tone', () => {
    const { container } = render(
      <CommandPanel eyebrow="E" title="T">
        <span>content</span>
      </CommandPanel>,
    );
    expect(container.querySelector('.command-panel-standard')).toBeInTheDocument();
  });

  it('renders with gold tone', () => {
    const { container } = render(
      <CommandPanel eyebrow="E" title="T" tone="gold">
        <span>content</span>
      </CommandPanel>,
    );
    expect(container.querySelector('.command-panel-gold')).toBeInTheDocument();
  });

  it('renders with danger tone', () => {
    const { container } = render(
      <CommandPanel eyebrow="E" title="T" tone="danger">
        <span>content</span>
      </CommandPanel>,
    );
    expect(container.querySelector('.command-panel-danger')).toBeInTheDocument();
  });

  it('renders eyebrow, title, and children', () => {
    render(
      <CommandPanel eyebrow="Cmd Eyebrow" title="Cmd Title">
        <p>Cmd Content</p>
      </CommandPanel>,
    );
    expect(screen.getByText('Cmd Eyebrow')).toBeInTheDocument();
    expect(screen.getByText('Cmd Title')).toBeInTheDocument();
    expect(screen.getByText('Cmd Content')).toBeInTheDocument();
  });
});

describe('BoardPanel', () => {
  it('renders eyebrow, title, and children', () => {
    render(
      <BoardPanel eyebrow="Board Eyebrow" title="Board Title">
        <p>Board Content</p>
      </BoardPanel>,
    );
    expect(screen.getByText('Board Eyebrow')).toBeInTheDocument();
    expect(screen.getByText('Board Title')).toBeInTheDocument();
    expect(screen.getByText('Board Content')).toBeInTheDocument();
  });

  it('has board-panel class', () => {
    const { container } = render(
      <BoardPanel eyebrow="E" title="T">
        <span>c</span>
      </BoardPanel>,
    );
    expect(container.querySelector('.board-panel')).toBeInTheDocument();
  });
});

describe('PlayerCard', () => {
  const testPlayer: Player = {
    id: 'player-test',
    teamProfileId: 'team-001',
    name: 'John Doe',
    position: 'QB',
    overall: 85,
    age: 27,
    role: 'Starter',
    devTrait: 'Star',
    notes: 'Default notes about the player.',
  };

  it('renders player name, position, role, age, and dev trait', () => {
    render(<PlayerCard player={testPlayer} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('QB')).toBeInTheDocument();
    expect(screen.getByText(/Starter · Age 27 · Star/)).toBeInTheDocument();
  });

  it('renders overall rating', () => {
    render(<PlayerCard player={testPlayer} />);
    expect(screen.getByText('OVR')).toBeInTheDocument();
    expect(screen.getByText('85')).toBeInTheDocument();
  });

  it('renders player notes by default', () => {
    render(<PlayerCard player={testPlayer} />);
    expect(screen.getByText('Default notes about the player.')).toBeInTheDocument();
  });

  it('renders custom detail instead of notes when provided', () => {
    render(<PlayerCard player={testPlayer} detail="Custom detail text" />);
    expect(screen.getByText('Custom detail text')).toBeInTheDocument();
    expect(screen.queryByText('Default notes about the player.')).not.toBeInTheDocument();
  });
});

describe('RatingBadge', () => {
  it('renders label and numeric value', () => {
    render(<RatingBadge label="OVR" value={92} />);
    expect(screen.getByText('OVR')).toBeInTheDocument();
    expect(screen.getByText('92')).toBeInTheDocument();
  });

  it('renders label and string value', () => {
    render(<RatingBadge label="Grade" value="A+" />);
    expect(screen.getByText('Grade')).toBeInTheDocument();
    expect(screen.getByText('A+')).toBeInTheDocument();
  });
});

describe('PriorityBadge', () => {
  const priorities: Priority[] = ['Low', 'Medium', 'High', 'Critical'];

  it.each(priorities)('renders %s priority with correct class', (priority) => {
    const { container } = render(<PriorityBadge priority={priority} />);
    expect(screen.getByText(priority)).toBeInTheDocument();
    expect(container.querySelector(`.priority-${priority.toLowerCase()}`)).toBeInTheDocument();
  });
});

describe('AttributeBar', () => {
  it('renders label and value', () => {
    render(<AttributeBar label="Speed" value={88} />);
    expect(screen.getByText('Speed')).toBeInTheDocument();
    expect(screen.getByText('88')).toBeInTheDocument();
  });

  it('renders note when provided', () => {
    render(<AttributeBar label="Speed" value={88} note="Excellent burst" />);
    expect(screen.getByText('Excellent burst')).toBeInTheDocument();
  });

  it('does not render note when omitted', () => {
    const { container } = render(<AttributeBar label="Speed" value={88} />);
    expect(container.querySelectorAll('p')).toHaveLength(0);
  });

  it('clamps bar width to minimum 8%', () => {
    const { container } = render(<AttributeBar label="Low" value={3} />);
    const bar = container.querySelector('i');
    expect(bar?.style.width).toBe('8%');
  });

  it('clamps bar width to maximum 100%', () => {
    const { container } = render(<AttributeBar label="High" value={150} />);
    const bar = container.querySelector('i');
    expect(bar?.style.width).toBe('100%');
  });

  it('sets correct width for in-range value', () => {
    const { container } = render(<AttributeBar label="Mid" value={75} />);
    const bar = container.querySelector('i');
    expect(bar?.style.width).toBe('75%');
  });
});

describe('DataRow', () => {
  it('renders label, title, and meta', () => {
    render(<DataRow label="Row Label" title="Row Title" meta="Row Meta" />);
    expect(screen.getByText('Row Label')).toBeInTheDocument();
    expect(screen.getByText('Row Title')).toBeInTheDocument();
    expect(screen.getByText('Row Meta')).toBeInTheDocument();
  });

  it('renders badge when provided', () => {
    render(<DataRow label="L" title="T" meta="M" badge={<span>BadgeContent</span>} />);
    expect(screen.getByText('BadgeContent')).toBeInTheDocument();
  });

  it('does not render badge wrapper when badge is omitted', () => {
    const { container } = render(<DataRow label="L" title="T" meta="M" />);
    const dataRow = container.querySelector('.data-row');
    expect(dataRow?.children.length).toBe(3);
  });
});

describe('AlertStack', () => {
  it('renders multiple alert items', () => {
    const items = [
      { id: '1', priority: 'High' as Priority, title: 'Alert 1', detail: 'Detail 1' },
      { id: '2', priority: 'Medium' as Priority, title: 'Alert 2', detail: 'Detail 2' },
    ];
    render(<AlertStack items={items} />);
    expect(screen.getByText('Alert 1')).toBeInTheDocument();
    expect(screen.getByText('Detail 1')).toBeInTheDocument();
    expect(screen.getByText('Alert 2')).toBeInTheDocument();
    expect(screen.getByText('Detail 2')).toBeInTheDocument();
  });

  it('renders priority badges for each item', () => {
    const items = [
      { id: '1', priority: 'High' as Priority, title: 'A', detail: 'D' },
      { id: '2', priority: 'Low' as Priority, title: 'B', detail: 'E' },
    ];
    render(<AlertStack items={items} />);
    expect(screen.getByText('High')).toBeInTheDocument();
    expect(screen.getByText('Low')).toBeInTheDocument();
  });

  it('renders empty when items array is empty', () => {
    const { container } = render(<AlertStack items={[]} />);
    expect(container.querySelector('.alert-stack')?.children.length).toBe(0);
  });
});
