import { NameSpace } from '../../const';
import { QuestInfo, Quests } from '../../types/data';
import { State } from '../../types/state';

export const getQuests = (state: State): Quests =>
  state[NameSpace.Data].quests;

export const getQuestInfo = (state: State): QuestInfo | null =>
  state[NameSpace.Data].currentQuest;
