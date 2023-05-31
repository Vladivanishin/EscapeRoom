import { Icon } from 'leaflet';
export const MAP_ZOOM = 13;

export enum AppRoute {
  Index = '/',
  Quest = '/quest/:id',
  Booking = '/quest/:id/booking',
  Login = '/login',
  Logout = '/logout',
  MyQuests = '/my-quests',
  Contacts = '/contacts',
  Reservation = '/reservation',
}

export enum APIRoute {
  Quest = '/quest',
  Reservation = '/reservation',
  Login = '/login',
  Logout = '/logout',
  Booking = '/quest/:id/booking',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  Main = 'Main',
}

export enum QuestLevel {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export enum QuestType {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  Scifi = 'sci-fi'
}

export enum QuestDate {
  Today = 'today',
  Tomorrow = 'tomorrow',
}

export enum AppHeader {
  QuestPage = 'quest-page',
  ContactsPage = 'contacts-page',
  BookingPage = 'booking-page',
  LoginPage = 'login-page',
  IndexPage = 'index-page',
  MyQuests = 'my-quest-page',
}

export const DEFAULT_COORDINATE = {
  latitude: 59.968322,
  longitude: 30.317359,
};

export const defaultCustomIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/128/2776/2776067.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const currentCustomIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/128/2776/2776000.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


// export enum DateSlot {
//   Today = 'today',
//   Tomorrow = 'tomorrow',
// }

export const SlotName: Record<string, string> = {
  [QuestDate.Today]: 'Сегодня',
  [QuestDate.Tomorrow]: 'Завтра'
} as const;

export const QuestLevelRus : Record<QuestLevel, string> = {
  [QuestLevel.Any]: 'Любой',
  [QuestLevel.Easy]: 'Лёгкий',
  [QuestLevel.Medium]: 'Средний',
  [QuestLevel.Hard]: 'Сложный',
} as const;

export const QuestTypeRus: Record<QuestType, string> = {
  [QuestType.All]: 'Все квесты',
  [QuestType.Adventures]: 'Приключения',
  [QuestType.Horror]: 'Ужасы',
  [QuestType.Mystic]: 'Мистика',
  [QuestType.Detective]: 'Детектив',
  [QuestType.Scifi]: 'Sci-fi',
} as const;
