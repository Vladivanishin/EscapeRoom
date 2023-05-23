import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { BookingQuest, BookingQuests, QuestInfo, Quests } from '../../types/data';
import { fetchGetQuestAction, fetchGetQuestBookingAction, fetchGetQuestInfoAction } from '../api-actions';

type DataProcess = {
  quests: Quests;
  currentQuest: QuestInfo | null;
  currentMapPlace: BookingQuest | null;
  bookingQuests: BookingQuests;
  isLoading: boolean;
}

const initialState: DataProcess = {
  quests: [],
  currentQuest: null,
  currentMapPlace: null,
  bookingQuests: [],
  isLoading: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCurrentPlace: (state, action: PayloadAction<BookingQuest>) => {
      state.currentMapPlace = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGetQuestAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchGetQuestAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGetQuestInfoAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchGetQuestInfoAction.fulfilled, (state, action) => {
        state.currentQuest = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGetQuestBookingAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchGetQuestBookingAction.fulfilled, (state, action) => {
        state.bookingQuests = action.payload;
        state.isLoading = false;
      });
  }
});

export const { changeCurrentPlace } = dataProcess.actions;
