import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  ScreenShell,
  TeamProfileScreen,
  RosterDepthChartScreen,
  WeeklyGamePrepScreen,
  WeeklyAIReportScreen,
  InjuryTransactionScreen,
  ContractCapScreen,
  ScoutingDraftBoardScreen,
  BroadcastRecapScreen,
  VideoBoardScreen,
  InfoBoardScreen,
} from './ScreenShell';
import { mockFranchise } from '../data/mockFranchise';

describe('ScreenShell', () => {
  it('renders title, eyebrow, and summary', () => {
    render(
      <ScreenShell title="Shell Title" eyebrow="Shell Eyebrow" summary="Shell Summary">
        <p>Body</p>
      </ScreenShell>,
    );
    expect(screen.getByText('Shell Title')).toBeInTheDocument();
    expect(screen.getByText('Shell Eyebrow')).toBeInTheDocument();
    expect(screen.getByText('Shell Summary')).toBeInTheDocument();
  });

  it('renders children in main area', () => {
    render(
      <ScreenShell title="T" eyebrow="E" summary="S">
        <p>Main content</p>
      </ScreenShell>,
    );
    expect(screen.getByText('Main content')).toBeInTheDocument();
  });

  it('renders board in aside when provided', () => {
    render(
      <ScreenShell title="T" eyebrow="E" summary="S" board={<p>Board content</p>}>
        <p>Main</p>
      </ScreenShell>,
    );
    expect(screen.getByText('Board content')).toBeInTheDocument();
  });

  it('does not render aside when board is omitted', () => {
    const { container } = render(
      <ScreenShell title="T" eyebrow="E" summary="S">
        <p>Main</p>
      </ScreenShell>,
    );
    expect(container.querySelector('.station-board')).not.toBeInTheDocument();
  });

  it('applies full layout class when no board', () => {
    const { container } = render(
      <ScreenShell title="T" eyebrow="E" summary="S">
        <p>Main</p>
      </ScreenShell>,
    );
    expect(container.querySelector('.station-layout-full')).toBeInTheDocument();
  });

  it('does not apply full layout class when board is present', () => {
    const { container } = render(
      <ScreenShell title="T" eyebrow="E" summary="S" board={<p>B</p>}>
        <p>Main</p>
      </ScreenShell>,
    );
    expect(container.querySelector('.station-layout-full')).not.toBeInTheDocument();
  });

  it('passes priority and badges to ScreenHeader', () => {
    render(
      <ScreenShell title="T" eyebrow="E" summary="S" priority="Critical" badges={['B1']}>
        <p>Main</p>
      </ScreenShell>,
    );
    expect(screen.getByText('Critical')).toBeInTheDocument();
    expect(screen.getByText('B1')).toBeInTheDocument();
  });
});

describe('TeamProfileScreen', () => {
  it('renders team profile title', () => {
    render(<TeamProfileScreen data={mockFranchise} />);
    expect(screen.getByText('Team Profile')).toBeInTheDocument();
  });

  it('renders scheme notes', () => {
    render(<TeamProfileScreen data={mockFranchise} />);
    expect(screen.getByText(mockFranchise.teamProfile.schemeNotes)).toBeInTheDocument();
  });

  it('renders strengths', () => {
    render(<TeamProfileScreen data={mockFranchise} />);
    for (const strength of mockFranchise.teamProfile.strengths) {
      expect(screen.getByText(strength)).toBeInTheDocument();
    }
  });

  it('renders weaknesses', () => {
    render(<TeamProfileScreen data={mockFranchise} />);
    for (const weakness of mockFranchise.teamProfile.weaknesses) {
      expect(screen.getByText(weakness)).toBeInTheDocument();
    }
  });
});

describe('RosterDepthChartScreen', () => {
  it('renders roster title', () => {
    render(<RosterDepthChartScreen data={mockFranchise} />);
    expect(screen.getByText('Roster / Depth Chart')).toBeInTheDocument();
  });

  it('renders featured player', () => {
    render(<RosterDepthChartScreen data={mockFranchise} />);
    const featured = mockFranchise.players[1];
    expect(screen.getAllByText(featured.name).length).toBeGreaterThan(0);
  });

  it('renders depth chart position groups', () => {
    render(<RosterDepthChartScreen data={mockFranchise} />);
    for (const group of mockFranchise.depthChart) {
      expect(screen.getByText(group.positionGroup)).toBeInTheDocument();
    }
  });
});

describe('WeeklyGamePrepScreen', () => {
  it('renders prep title', () => {
    render(<WeeklyGamePrepScreen data={mockFranchise} />);
    expect(screen.getByText('Weekly Game Prep')).toBeInTheDocument();
  });

  it('renders opponent name', () => {
    render(<WeeklyGamePrepScreen data={mockFranchise} />);
    expect(screen.getAllByText(mockFranchise.weeklyGamePrep.opponent).length).toBeGreaterThan(0);
  });

  it('renders matchup notes', () => {
    render(<WeeklyGamePrepScreen data={mockFranchise} />);
    expect(screen.getAllByText(mockFranchise.weeklyGamePrep.matchupNotes).length).toBeGreaterThan(0);
  });
});

describe('WeeklyAIReportScreen', () => {
  it('renders AI report title', () => {
    render(<WeeklyAIReportScreen data={mockFranchise} />);
    expect(screen.getByText('Weekly AI Report')).toBeInTheDocument();
  });

  it('renders summary', () => {
    render(<WeeklyAIReportScreen data={mockFranchise} />);
    expect(screen.getAllByText(mockFranchise.weeklyAIReport.summary).length).toBeGreaterThan(0);
  });

  it('renders action items', () => {
    render(<WeeklyAIReportScreen data={mockFranchise} />);
    for (const item of mockFranchise.weeklyAIReport.actionItems) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });
});

describe('InjuryTransactionScreen', () => {
  it('renders screen title', () => {
    render(<InjuryTransactionScreen data={mockFranchise} />);
    expect(screen.getByText('Injury / Transaction Tracker')).toBeInTheDocument();
  });

  it('renders injury entries', () => {
    render(<InjuryTransactionScreen data={mockFranchise} />);
    for (const injury of mockFranchise.injuries) {
      expect(screen.getAllByText(new RegExp(injury.bodyPart)).length).toBeGreaterThan(0);
    }
  });

  it('renders transaction entries', () => {
    render(<InjuryTransactionScreen data={mockFranchise} />);
    for (const tx of mockFranchise.transactions) {
      expect(screen.getByText(tx.transactionType)).toBeInTheDocument();
    }
  });
});

describe('ContractCapScreen', () => {
  it('renders screen title', () => {
    render(<ContractCapScreen data={mockFranchise} />);
    expect(screen.getByText('Contract / Cap Notes')).toBeInTheDocument();
  });

  it('renders contract note player names', () => {
    render(<ContractCapScreen data={mockFranchise} />);
    for (const note of mockFranchise.contractNotes) {
      const playerName = mockFranchise.players.find((p) => p.id === note.playerId)?.name;
      if (playerName) {
        expect(screen.getAllByText(playerName).length).toBeGreaterThan(0);
      }
    }
  });
});

describe('ScoutingDraftBoardScreen', () => {
  it('renders screen title', () => {
    render(<ScoutingDraftBoardScreen data={mockFranchise} />);
    expect(screen.getByText('Scouting / Draft Board')).toBeInTheDocument();
  });

  it('renders prospect names', () => {
    render(<ScoutingDraftBoardScreen data={mockFranchise} />);
    for (const prospect of mockFranchise.draftProspects) {
      expect(screen.getAllByText(new RegExp(prospect.name)).length).toBeGreaterThan(0);
    }
  });
});

describe('BroadcastRecapScreen', () => {
  it('renders screen title', () => {
    render(<BroadcastRecapScreen data={mockFranchise} />);
    expect(screen.getByText('Broadcast Recap')).toBeInTheDocument();
  });

  it('renders recap headline', () => {
    render(<BroadcastRecapScreen data={mockFranchise} />);
    expect(screen.getByText(mockFranchise.broadcastRecap.headline)).toBeInTheDocument();
  });

  it('renders game result', () => {
    render(<BroadcastRecapScreen data={mockFranchise} />);
    expect(screen.getAllByText(new RegExp(mockFranchise.broadcastRecap.result)).length).toBeGreaterThan(0);
  });
});

describe('VideoBoardScreen', () => {
  it('renders screen title', () => {
    render(<VideoBoardScreen data={mockFranchise} />);
    expect(screen.getByText('Video Board')).toBeInTheDocument();
  });

  it('renders video items', () => {
    render(<VideoBoardScreen data={mockFranchise} />);
    for (const item of mockFranchise.videoBoard) {
      expect(screen.getAllByText(item.title).length).toBeGreaterThan(0);
    }
  });
});

describe('InfoBoardScreen', () => {
  it('renders screen title', () => {
    render(<InfoBoardScreen data={mockFranchise} />);
    expect(screen.getByText('Info Board')).toBeInTheDocument();
  });

  it('renders info board items', () => {
    render(<InfoBoardScreen data={mockFranchise} />);
    for (const item of mockFranchise.infoBoard) {
      expect(screen.getAllByText(item.value).length).toBeGreaterThan(0);
    }
  });
});
