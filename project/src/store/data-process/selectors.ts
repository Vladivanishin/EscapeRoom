import { NameSpace } from '../../const';
import { Quests, BookingQuests, QuestInfo, BookingQuest, UserBookings } from '../../types/data';
import { State } from '../../types/state';

export const getQuests = (state: State): Quests =>
  state[NameSpace.Data].quests;

export const getQuest = (state: State): QuestInfo | null =>
  state[NameSpace.Data].currentQuest;

export const getBookingQuests = (state: State): BookingQuests =>
  state[NameSpace.Data].bookingQuests;

export const getLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].isLoading;

export const getCurrentMapPlace = (state: State): BookingQuest | null =>
  state[NameSpace.Data].currentMapPlace;

export const getReservationQuests = (state: State): UserBookings =>
  state[NameSpace.Data].reservationQuests;

