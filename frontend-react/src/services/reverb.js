import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { useMatchStore } from '../store/useMatchStore';

window.Pusher = Pusher;

export const echo = new Echo({
  broadcaster: 'reverb',
  key: import.meta.env.VITE_REVERB_APP_KEY,
  wsHost: import.meta.env.VITE_REVERB_HOST,
  wsPort: Number(import.meta.env.VITE_REVERB_PORT || 80),
  wssPort: Number(import.meta.env.VITE_REVERB_PORT || 443),
  forceTLS: (import.meta.env.VITE_REVERB_SCHEME || 'https') === 'https',
  enabledTransports: ['ws', 'wss'],
  authEndpoint: `${import.meta.env.VITE_API_URL}/broadcasting/auth`,
  withCredentials: true,
});

export const subscribeToMatch = (matchId) => {
  const channel = echo.private(`matches.${matchId}`);
  channel.listen('.score.updated', (payload) => useMatchStore.getState().setLiveHeader(payload.liveHeader));
  channel.listen('.wicket.fallen', (payload) => useMatchStore.getState().pushCommentary(payload.message));
  channel.listen('.innings.changed', (payload) => useMatchStore.getState().pushCommentary(payload.message));
  channel.listen('.match.finished', (payload) => useMatchStore.getState().pushCommentary(payload.message));
  return () => echo.leave(`private-matches.${matchId}`);
};
