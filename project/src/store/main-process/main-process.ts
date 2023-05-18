import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Quest } from '../../types/data';
import { NameSpace } from '../../const';

type MainProcess = {
  quest: Quest | null;
};

const initialState: MainProcess = {
  quest: null,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    selectQuest: (state, action: PayloadAction<Quest>) => {
      state.quest = action.payload;
    },
  },
});

export const { selectQuest } = mainProcess.actions;
