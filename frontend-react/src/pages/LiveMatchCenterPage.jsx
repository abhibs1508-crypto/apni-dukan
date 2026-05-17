import { LiveMatchCenterView } from '../components/live/LiveMatchCenterView';
import { useRealtimeMatch } from '../hooks/useRealtimeMatch';
import { useMatchStore } from '../store/useMatchStore';
export const LiveMatchCenterPage = () => { const id = useMatchStore((s) => s.activeMatchId); useRealtimeMatch(id); return <LiveMatchCenterView />; };
