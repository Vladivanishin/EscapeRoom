import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { BookingQuests, QuestBookingData, QuestInfo, Quests, UserAuthData, UserLoginData } from '../types/data';
import { APIRoute } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { QuestResponseData } from '../types/data';
import { UserBookings } from '../types/data';
import { dropToken, saveToken } from '../services/token';
import { notify } from '../utils';

type ThunkConfig = {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

export type BookingPostData = {
  questId: string;
  questData: QuestBookingData;
};

export const fetchGetQuestAction = createAsyncThunk<
  Quests,
  undefined,
  ThunkConfig
>('fetchGetQuest', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data: quests } = await api.get<Quests>(APIRoute.Quest);
    return quests;
  } catch (error) {
    notify('Массив объектов с информацией о квестах не получен!');
    throw error;
  }
});

export const fetchGetQuestInfoAction = createAsyncThunk<
  QuestInfo,
  string,
  ThunkConfig
>('fetchGetQuestInfo', async (questId, { dispatch, extra: api }) => {
  try {
    const { data: questInfo } = await api.get<QuestInfo>(`${APIRoute.Quest}/${questId}`);
    return questInfo;
  } catch (error) {
    notify('Объект с информацией о квесте не получен!');
    throw error;
  }
});

export const fetchGetQuestBookingAction = createAsyncThunk<
  BookingQuests,
  string,
  ThunkConfig
>('fetchGetQuestBooking', async (questId, { dispatch, extra: api }) => {
  try {
    const { data: quest } = await api.get<BookingQuests>(`${APIRoute.Quest}/${questId}/booking`);
    return quest;
  } catch (error) {
    notify('Объект с информацией о бронировании квестов не получен!');
    throw error;
  }
});

export const fetchPostQuestBookingAction = createAsyncThunk<
  QuestResponseData,
  BookingPostData,
  ThunkConfig
>('fetchQuestPost', async ({ questId, questData }, { dispatch, extra: api }) => {
  try {
    const { data: quest } = await api.post<QuestResponseData>(`${APIRoute.Quest}/${questId}/booking`, { questData });
    return quest;
  } catch (error) {
    notify('Объект, описывающий данные по бронированию квеста не отправлен!');
    throw error;
  }
});

export const fetchGetReservationAction = createAsyncThunk<
  UserBookings,
  undefined,
  ThunkConfig
>('fetchGetReservation', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserBookings>(APIRoute.Reservation);
    return data;
  } catch (error) {
    notify('Массив объектов с описанием бронирований пользователя не получен!');
    throw error;
  }
});

export const fetchDeleteReservationAction = createAsyncThunk<
  void,
  string,
  ThunkConfig
>('fetchDeleteReservation', async (reservationId, { dispatch, extra: api }) => {
  try {
    await api.delete(`${APIRoute.Reservation}/${reservationId}`);
  } catch (error) {
    notify('Удаление бронирования не выполнено!');
    throw error;
  }
});

export const fetchCheckAuthAction = createAsyncThunk<
  UserAuthData,
  undefined,
  ThunkConfig
>('fetchCheckAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserAuthData>(APIRoute.Login);
    return data;
  } catch (error) {
    notify('Ошибка в проверке авторизации');
    throw error;
  }
});

export const fetchLoginAction = createAsyncThunk<UserAuthData, UserLoginData, ThunkConfig>(
  'fetchLogin',
  async ({ email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserAuthData>(APIRoute.Login, {
        email,
        password,
      });
      saveToken(data.token);
      return data;
    } catch (error) {
      notify('Ошибка в логине или пароле');
      throw error;
    }
  }
);

export const fetchLogoutAction = createAsyncThunk<void, undefined, ThunkConfig>(
  'logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
