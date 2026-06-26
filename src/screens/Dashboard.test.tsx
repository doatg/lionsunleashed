import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { mockFranchise } from '../data/mockFranchise';

describe('Dashboard', () => {
  it('renders the franchise hub header', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    expect(screen.getByText('Dashboard / Franchise Hub')).toBeInTheDocument();
  });

  it('displays current week and season in overview', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    expect(screen.getAllByText(`Week ${mockFranchise.franchise.currentWeek}`).length).toBeGreaterThan(0);
  });

  it('displays the next opponent', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    expect(screen.getAllByText(mockFranchise.weeklyGamePrep.opponent).length).toBeGreaterThan(0);
  });

  it('renders franchise goals in ticker strip', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    for (const goal of mockFranchise.franchise.goals) {
      expect(screen.getByText(goal)).toBeInTheDocument();
    }
  });

  it('shows high-need roster alerts count', () => {
    const highNeeds = mockFranchise.depthChart.filter((g) => g.needLevel === 'High');
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    expect(screen.getByText(`${highNeeds.length} High Alerts`)).toBeInTheDocument();
  });

  it('renders depth chart position groups', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    for (const group of mockFranchise.depthChart) {
      expect(screen.getByText(group.positionGroup)).toBeInTheDocument();
    }
  });

  it('renders injury information', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    for (const injury of mockFranchise.injuries) {
      expect(screen.getByText(injury.returnEstimate, { exact: false })).toBeInTheDocument();
    }
  });

  it('renders broadcast recap headline', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    expect(screen.getByText(mockFranchise.broadcastRecap.headline)).toBeInTheDocument();
  });

  it('renders team identity section', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    expect(screen.getByText(mockFranchise.teamProfile.schemeNotes)).toBeInTheDocument();
  });

  it('renders screen status cards', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    for (const status of mockFranchise.screenStatuses) {
      expect(screen.getAllByText(status.title).length).toBeGreaterThan(0);
    }
  });

  it('calls onSelectScreen when a status card is clicked', () => {
    const onSelectScreen = vi.fn();
    render(<Dashboard data={mockFranchise} onSelectScreen={onSelectScreen} />);
    const firstStatus = mockFranchise.screenStatuses[0];
    const button = screen.getByRole('button', { name: new RegExp(firstStatus.title) });
    button.click();
    expect(onSelectScreen).toHaveBeenCalledWith(firstStatus.id);
  });

  it('renders weekly AI report recommendations', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    for (const rec of mockFranchise.weeklyAIReport.recommendations.slice(0, 4)) {
      expect(screen.getByText(rec)).toBeInTheDocument();
    }
  });

  it('renders video board items', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    for (const item of mockFranchise.videoBoard) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });

  it('renders info board items', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    for (const item of mockFranchise.infoBoard) {
      expect(screen.getByText(item.value)).toBeInTheDocument();
    }
  });

  it('resolves player names from IDs correctly', () => {
    render(<Dashboard data={mockFranchise} onSelectScreen={vi.fn()} />);
    const starterName = mockFranchise.players.find(
      (p) => p.id === mockFranchise.depthChart[0].starterPlayerId,
    )?.name;
    if (starterName) {
      expect(screen.getAllByText(starterName).length).toBeGreaterThan(0);
    }
  });

  it('shows "Unassigned" for unknown player IDs in depth chart', () => {
    const dataWithBadId = {
      ...mockFranchise,
      depthChart: [
        {
          ...mockFranchise.depthChart[0],
          starterPlayerId: 'nonexistent-player',
        },
        ...mockFranchise.depthChart.slice(1),
      ],
    };
    render(<Dashboard data={dataWithBadId} onSelectScreen={vi.fn()} />);
    expect(screen.getAllByText('Unassigned').length).toBeGreaterThan(0);
  });
});
