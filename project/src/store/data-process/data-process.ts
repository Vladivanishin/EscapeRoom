import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Quests } from '../../types/data';
import { fetchGetQuestAction } from '../api-actions';

type DataProcess = {
  quests: Quests | null;
}

const initialState: DataProcess = {
  quests: null,
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
  }
});
