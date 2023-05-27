import { QuestDate, QuestLevel, QuestType } from '../const';

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMinMax: [number, number];
}

export type Quests = Quest[];

export type QuestInfo = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type BookingQuest =
  {
    id: string;
    location: {
      address: string;
      coords: [number, number];
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
  }

export type BookingQuests = BookingQuest[];

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
    coords: [number, number];
  };
  quest: {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: QuestLevel;
    type: QuestType;
    peopleMinMax: [number, number];
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

export type Token = {
  token: string;
}

export type DeleteReservation = {
  reservationId: string;
  token: string;
}

export type QuestCoords = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type SlotDay = {
  time: string;
  isAvailable: boolean;
}

export type Slots = {
  today: SlotDay[];
  tomorrow: SlotDay[];
}

export type BookingFormFields = {
  name: string;
  tel: string;
  person: string;
  children: boolean;
};

export type BookingPostData = {
  questId: string;
  bookingData: QuestBookingData;
};

