import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the app shell', () => {
    render(<App />);
    expect(screen.getAllByText('Madden Franchise Command Center').length).toBeGreaterThan(0);
  });

  it('renders the top ticker with franchise info', () => {
    render(<App />);
    expect(screen.getByText('Command Live')).toBeInTheDocument();
  });

  it('renders the command navigation rail', () => {
    render(<App />);
    expect(screen.getByRole('navigation', { name: /command center screens/i })).toBeInTheDocument();
  });

  it('shows Dashboard as the default active screen', () => {
    render(<App />);
    expect(screen.getByText('Dashboard / Franchise Hub')).toBeInTheDocument();
  });

  it('navigates to Team Profile screen', () => {
    render(<App />);
    const profileButton = screen.getByRole('button', { name: /02.*Profile.*Team Profile/i });
    fireEvent.click(profileButton);
    expect(screen.getAllByText('Team Profile').length).toBeGreaterThan(1);
  });

  it('navigates to Roster / Depth Chart screen', () => {
    render(<App />);
    const rosterButton = screen.getByRole('button', { name: /03.*Roster/i });
    fireEvent.click(rosterButton);
    expect(screen.getAllByText('Roster / Depth Chart').length).toBeGreaterThan(1);
  });

  it('navigates to Weekly Game Prep screen', () => {
    render(<App />);
    const prepButton = screen.getByRole('button', { name: /04.*Prep/i });
    fireEvent.click(prepButton);
    expect(screen.getAllByText('Weekly Game Prep').length).toBeGreaterThan(1);
  });

  it('navigates to Weekly AI Report screen', () => {
    render(<App />);
    const aiButton = screen.getByRole('button', { name: /05.*AI Report/i });
    fireEvent.click(aiButton);
    expect(screen.getAllByText('Weekly AI Report').length).toBeGreaterThan(1);
  });

  it('navigates to Injury / Transaction Tracker screen', () => {
    render(<App />);
    const injuryButton = screen.getByRole('button', { name: /06.*Injuries/i });
    fireEvent.click(injuryButton);
    expect(screen.getAllByText('Injury / Transaction Tracker').length).toBeGreaterThan(1);
  });

  it('navigates to Contract / Cap Notes screen', () => {
    render(<App />);
    const capButton = screen.getByRole('button', { name: /07.*Cap/i });
    fireEvent.click(capButton);
    expect(screen.getAllByText('Contract / Cap Notes').length).toBeGreaterThan(1);
  });

  it('navigates to Scouting / Draft Board screen', () => {
    render(<App />);
    const scoutButton = screen.getByRole('button', { name: /08.*Scouting/i });
    fireEvent.click(scoutButton);
    expect(screen.getAllByText('Scouting / Draft Board').length).toBeGreaterThan(1);
  });

  it('navigates to Broadcast Recap screen', () => {
    render(<App />);
    const recapButton = screen.getByRole('button', { name: /09.*Recap/i });
    fireEvent.click(recapButton);
    expect(screen.getAllByText('Broadcast Recap').length).toBeGreaterThan(1);
  });

  it('navigates to Video Board screen', () => {
    render(<App />);
    const videoButton = screen.getByRole('button', { name: /10.*Video/i });
    fireEvent.click(videoButton);
    expect(screen.getAllByText('Video Board').length).toBeGreaterThan(1);
  });

  it('navigates to Info Board screen', () => {
    render(<App />);
    const infoButton = screen.getByRole('button', { name: /11.*Info/i });
    fireEvent.click(infoButton);
    expect(screen.getAllByText('Info Board').length).toBeGreaterThan(1);
  });

  it('updates active screen label on navigation', () => {
    render(<App />);
    const profileButton = screen.getByRole('button', { name: /02.*Profile.*Team Profile/i });
    fireEvent.click(profileButton);
    expect(screen.getAllByText('Team Profile').length).toBeGreaterThan(0);
  });

  it('renders season and week in scorebug', () => {
    const { container } = render(<App />);
    const scorebug = container.querySelector('.scorebug');
    expect(scorebug).toBeInTheDocument();
    expect(scorebug?.textContent).toContain('Season 2026');
    expect(scorebug?.textContent).toContain('Week 7');
  });

  it('renders hero panel with franchise description', () => {
    render(<App />);
    expect(screen.getByText(/Original broadcast-style franchise war room/)).toBeInTheDocument();
  });

  it('renders all navigation items', () => {
    render(<App />);
    const navLabels = ['Dash', 'Profile', 'Roster', 'Prep', 'AI Report', 'Injuries', 'Cap', 'Scouting', 'Recap', 'Video', 'Info'];
    for (const label of navLabels) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
  });

  it('navigates back to Dashboard from another screen', () => {
    render(<App />);
    const profileButton = screen.getByRole('button', { name: /02.*Profile.*Team Profile/i });
    fireEvent.click(profileButton);
    const dashButton = screen.getByRole('button', { name: /01.*Dash.*Dashboard/i });
    fireEvent.click(dashButton);
    expect(screen.getByText('Dashboard / Franchise Hub')).toBeInTheDocument();
  });
});
