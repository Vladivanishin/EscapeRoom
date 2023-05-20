import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, QuestLevel, QuestType } from '../../const';

type MainProcess = {
  questId: string | null;
  currentQuestType: QuestType;
  currentComplexity: QuestLevel;
};

const initialState: MainProcess = {
  questId: null,
  currentQuestType: QuestType.All,
  currentComplexity: QuestLevel.Any,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    selectQuest: (state, action: PayloadAction<string>) => {
      state.questId = action.payload;
    },
    selectQuestType: (state, action: PayloadAction<QuestType>) => {
      state.currentQuestType = action.payload;
    },
    selectQuestComplexity: (state, action: PayloadAction<QuestLevel>) => {
      state.currentComplexity = action.payload;
    }
  },
});

export const { selectQuest, selectQuestType, selectQuestComplexity } = mainProcess.actions;
