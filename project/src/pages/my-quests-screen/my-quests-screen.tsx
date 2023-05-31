import { Navigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppHeader, AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';
import React, { useEffect } from 'react';
import { fetchGetReservationAction } from '../../store/api-actions';
import CardsListBooking from '../../components/cards-list/cards-list-booking';
import Footer from '../../components/footer/footer';
import { getQuests, getReservationQuests } from '../../store/data-process/selectors';

function MyQuestsScreen(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();
  const reservationQuests = useAppSelector(getReservationQuests);
  const quests = useAppSelector(getQuests);
  useEffect(() => {
    if(reservationQuests.length !== 0){
      return;
    }
    dispatch(fetchGetReservationAction());
  }, [dispatch, reservationQuests.length, quests]);

  if (authStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Login} />;
  }

  return (
    <div className="wrapper">
      <Header version={AppHeader.MyQuests} />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <CardsListBooking />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default React.memo(MyQuestsScreen);
