export enum AppRoute {
  Index = '/',
  Quest = '/quest/:id',
  Booking = '/quest/:id/booking',
  Reservation = '/reservation',
  Login = '/login',
  Logout = '/logout',
  MyQuests = '/my-quests',
  Contacts = '/contacts',

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
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export enum QuestType {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detectiv = 'detectiv',
}

export enum QuestDate {
  Today = 'today',
  Tomorrow = 'tomorrow',
}
