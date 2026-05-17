import { useEffect } from 'react';
import { subscribeToMatch } from '../services/reverb';

export const useRealtimeMatch = (matchId) => {
  useEffect(() => {
    if (!matchId) return;
    const unsubscribe = subscribeToMatch(matchId);
    return unsubscribe;
  }, [matchId]);
};
