import { create } from 'zustand';

export const useUiStore = create((set) => ({
  scorerPanelMode: 'normal',
  bookingModalOpen: false,
  setScorerPanelMode: (mode) => set({ scorerPanelMode: mode }),
  setBookingModalOpen: (value) => set({ bookingModalOpen: value }),
}));
