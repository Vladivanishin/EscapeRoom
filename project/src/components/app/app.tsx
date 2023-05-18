import { Route, Routes } from 'react-router-dom';
import IndexScreen from '../../pages/index-screen/index-screen';
import BookingScreen from '../../pages/booking-screen/booking-screen';
import ContactsScreen from '../../pages/contacts-screen/contacts-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyQuestsScreen from '../../pages/my-quests-screen/my-quests-screen';
import QuestScreen from '../../pages/quest-screen/quest-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import HistoryRouter from '../history-route/history-route';
import { browserHistory } from '../../browser-history';
import { AppRoute } from '../../const';

export default function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route index element={<IndexScreen />} />
        <Route path={AppRoute.Booking} element={<BookingScreen />} />
        <Route path={AppRoute.Contacts} element={<ContactsScreen />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.MyQuests} element={<MyQuestsScreen />} />
        <Route path={AppRoute.Quest} element={<QuestScreen />} />
        <Route path={'*'} element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}

