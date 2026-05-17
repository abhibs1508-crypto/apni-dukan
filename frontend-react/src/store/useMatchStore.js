import { create } from 'zustand';

export const useMatchStore = create((set) => ({
  activeMatchId: 'SBX-201',
  liveHeader: { teams: ['Strikers XI', 'Royal Smashers'], score: '128/3', overs: '14.2', rrr: '8.21', winProb: 64 },
  commentary: ['14.2: FOUR! carved through point.', '14.1: Dot ball, good yorker.'],
  timeline: ['6','1','W','4','0','2'],
  setLiveHeader: (liveHeader) => set({ liveHeader }),
  pushCommentary: (line) => set((s) => ({ commentary: [line, ...s.commentary].slice(0, 20) })),
  setTimeline: (timeline) => set({ timeline }),
}));
