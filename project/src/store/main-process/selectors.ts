import { NameSpace, QuestLevel, QuestType } from '../../const';
import { State } from '../../types/state';

export const getSelectQuest = (state: State): string | null =>
  state[NameSpace.Main].questId;

export const getCurrentQuestType = (state: State): QuestType =>
  state[NameSpace.Main].currentQuestType;

export const getCurrentQuestComplexity = (state: State): QuestLevel =>
  state[NameSpace.Main].currentComplexity;
