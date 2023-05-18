import { QuestDate, QuestLevel, QuestType } from '../const';

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMinMax: [number];
}

export type Quests = Quest[];

export type QuestInfo = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMinMax: [number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type BookingQuest =
  [{
    id: string;
    location: {
      address: string;
      coords: [number];
    };
    slots: {
      today: [{
        time: string;
        isAvailable: boolean;
      }];
      tomorrow: [{
        time: string;
        isAvailable: boolean;
      }];
    };
  }]

export type QuestBookingData = {
  date: QuestDate;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type QuestResponseData = {
  date: QuestDate;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: {
    address: string;
    coords: [number];
  };
  quest: {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: QuestLevel;
    type: QuestType;
    peopleMinMax: [number];
  };
}

export type UserBookings = QuestResponseData[];

export type UserAuthData = {
  email: string;
  token: string;
}

export type UserLoginData = {
  email: string;
  password: string;
}

