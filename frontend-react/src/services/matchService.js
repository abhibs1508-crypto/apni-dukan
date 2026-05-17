import { apiClient } from '../api/client';

export const matchService = {
  getLiveMatch: (id) => apiClient.get(`/matches/${id}/live`),
  getBallByBall: (id) => apiClient.get(`/matches/${id}/timeline`),
  postScoringAction: (id, payload) => apiClient.post(`/matches/${id}/scoring-actions`, payload),
};
