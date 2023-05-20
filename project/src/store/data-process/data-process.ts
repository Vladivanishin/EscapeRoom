import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { QuestInfo, Quests } from '../../types/data';
import { fetchGetQuestAction, fetchGetQuestInfoAction } from '../api-actions';

type DataProcess = {
  quests: Quests;
  currentQuest: QuestInfo | null;
}

const initialState: DataProcess = {
  quests: [],
  currentQuest: null,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetQuestAction.fulfilled, (state, action) => {
        state.quests = action.payload;
      });
    // .addCase(fetchGetQuestInfoAction.fulfilled, (state, action) => {
    //   state.currentQuest = action.payload;
    // });
  }
});
