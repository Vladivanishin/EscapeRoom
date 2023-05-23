import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppHeader, AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchGetQuestBookingAction, fetchGetQuestInfoAction } from '../../store/api-actions';
import { getBookingQuests, getQuest } from '../../store/data-process/selectors';
import { getAuthStatus } from '../../store/user-process/selectors';
import { Navigate, useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import BookingMap from '../../components/map/booking-map';
import BookingForm from '../../components/booking-form/booking-form';

export default function BookingScreen(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();
  const bookingQuests = useAppSelector(getBookingQuests);
  const currentQuest = useAppSelector(getQuest);
  // const currentMapPlace = bookingQuests[0];
  // const bookingQuest = bookingQuests[0];
  // const questId = currentQuest?.id;
  const questId = useParams().id;
  const id = String(questId);

  useEffect(() => {
    if (bookingQuests.length !== 0) {
      return;
    }
    dispatch(fetchGetQuestInfoAction(id));
    dispatch(fetchGetQuestBookingAction(id));
  }, [dispatch]);

  if (!id || !bookingQuests.length) {
    return <LoadingScreen />;
  }

  if (currentQuest === null) {
    return <NotFoundScreen />;
  }

  if (authStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Login} />;
  }

  return (
    <div className="wrapper">
      <Header version={AppHeader.BookingPage} />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${currentQuest.coverImgWebp}, ${currentQuest.coverImgWebp} x2`} /><img src={currentQuest.coverImg} srcSet={`${currentQuest.coverImg} x2`} width="1366" height="1959" alt={currentQuest.title} />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{currentQuest.title}</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container">
                  <BookingMap />
                </div>
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали: {bookingQuests[0].location.address}</p>
            </div>
          </div>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
