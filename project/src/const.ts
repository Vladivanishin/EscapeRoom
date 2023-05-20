export enum AppRoute {
  Index = '/',
  Quest = '/quest/:id',
  Booking = '/quest/:id/booking',
  Login = '/login',
  Logout = '/logout',
  MyQuests = '/my-quests',
  Contacts = '/contacts',
}

export enum APIRoute {
  Quest = '/quest',
  Reservation = '/reservation',
  Login = '/login',
  Logout = '/logout',
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
  Detectiv = 'detectiv',
  Scifi = 'sci-fi'
}

// export enum QuestComplexity {
//   Any = 'any',
//   Easy = 'easy',
//   Middle = 'middle',
//   Hard = 'hard',
// }

export enum QuestDate {
  Today = 'today',
  Tomorrow = 'tomorrow',
}

export enum AppHeader {
  QuestPage = 'quest-page',
  ContactsPage = 'contacts-page',
  BookingPage = 'booking-page',
  LoginPage = 'login-page',
  IndexPage = 'index-page'
}
