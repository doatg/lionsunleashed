export type Priority = 'Low' | 'Medium' | 'High' | 'Critical';

export interface Franchise {
  id: string;
  name: string;
  userName: string;
  seasonYear: number;
  currentWeek: number;
  status: string;
  goals: string[];
}

export interface TeamProfile {
  id: string;
  franchiseId: string;
  teamName: string;
  city: string;
  schemeNotes: string;
  strengths: string[];
  weaknesses: string[];
  priorities: string[];
}

export interface Player {
  id: string;
  teamProfileId: string;
  name: string;
  position: string;
  overall: number;
  age: number;
  role: string;
  devTrait: string;
  notes: string;
}

export interface DepthChart {
  id: string;
  teamProfileId: string;
  positionGroup: string;
  starterPlayerId: string;
  backupPlayerIds: string[];
  needLevel: Priority;
  notes: string;
}

export interface WeeklyGamePrep {
  id: string;
  franchiseId: string;
  week: number;
  opponent: string;
  matchupNotes: string;
  focusAreas: string[];
  keyRisks: string[];
  goals: string[];
}

export interface WeeklyAIReport {
  id: string;
  franchiseId: string;
  week: number;
  summary: string;
  recommendations: string[];
  risks: string[];
  opportunities: string[];
  actionItems: string[];
}

export interface Injury {
  id: string;
  playerId: string;
  status: string;
  bodyPart: string;
  duration: string;
  returnEstimate: string;
  impactNotes: string;
}

export interface Transaction {
  id: string;
  playerId: string;
  transactionType: string;
  date: string;
  week: number;
  details: string;
  rosterImpact: string;
}

export interface ContractNote {
  id: string;
  playerId: string;
  capStatus: string;
  contractYear: string;
  priority: Priority;
  note: string;
  decisionWindow: string;
}

export interface DraftProspect {
  id: string;
  name: string;
  position: string;
  school: string;
  projectedRound: string;
  grade: string;
  traits: string[];
  fitNotes: string;
  rank: number;
}

export interface BroadcastRecap {
  id: string;
  franchiseId: string;
  week: number;
  opponent: string;
  result: string;
  headline: string;
  summary: string;
  keyPlayers: string[];
  storylineNotes: string[];
}

export interface VideoBoardItem {
  id: string;
  title: string;
  week: number;
  relatedPlayerId?: string;
  relatedRecapId?: string;
  clipType: string;
  description: string;
  status: string;
}

export interface InfoBoardItem {
  id: string;
  title: string;
  category: string;
  value: string;
  context: string;
  priority: Priority;
  relatedEntityType?: string;
  relatedEntityId?: string;
}

export interface ScreenStatus {
  id: string;
  title: string;
  priority: Priority;
  status: string;
  summary: string;
}

export interface FranchiseDashboardData {
  franchise: Franchise;
  teamProfile: TeamProfile;
  players: Player[];
  depthChart: DepthChart[];
  weeklyGamePrep: WeeklyGamePrep;
  weeklyAIReport: WeeklyAIReport;
  injuries: Injury[];
  transactions: Transaction[];
  contractNotes: ContractNote[];
  draftProspects: DraftProspect[];
  broadcastRecap: BroadcastRecap;
  videoBoard: VideoBoardItem[];
  infoBoard: InfoBoardItem[];
  screenStatuses: ScreenStatus[];
}
