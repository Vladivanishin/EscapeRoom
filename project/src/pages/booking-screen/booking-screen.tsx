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
          <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Выбор даты и времени</legend>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Сегодня</legend>
                <div className="booking-form__date-inner-wrapper">
                  <label className="custom-radio booking-form__date">
                    <input type="radio" id="today9h45m" name="date" required value="today9h45m" /><span className="custom-radio__label">9:45</span>
                  </label>
                  <label className="custom-radio booking-form__date">
                    <input type="radio" id="today15h00m" name="date" checked required value="today15h00m" /><span className="custom-radio__label">15:00</span>
                  </label>
                  <label className="custom-radio booking-form__date">
                    <input type="radio" id="today17h30m" name="date" required value="today17h30m" /><span className="custom-radio__label">17:30</span>
                  </label>
                  <label className="custom-radio booking-form__date">
                    <input type="radio" id="today19h30m" name="date" required value="today19h30m" disabled /><span className="custom-radio__label">19:30</span>
                  </label>
                  <label className="custom-radio booking-form__date">
                    <input type="radio" id="today21h30m" name="date" required value="today21h30m" /><span className="custom-radio__label">21:30</span>
                  </label>
                </div>
              </fieldset>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Завтра</legend>
                <div className="booking-form__date-inner-wrapper">
                  <label className="custom-radio booking-form__date">
                    <input type="radio" id="tomorrow11h00m" name="date" required value="tomorrow11h00m" /><span className="custom-radio__label">11:00</span>
                  </label>
                  <label className="custom-radio booking-form__date">
                    <input type="radio" id="tomorrow15h00m" name="date" required value="tomorrow15h00m" disabled /><span className="custom-radio__label">15:00</span>
                  </label>
                  <label className="custom-radio booking-form__date">
                    <input type="radio" id="tomorrow17h30m" name="date" required value="tomorrow17h30m" disabled /><span className="custom-radio__label">17:30</span>
                  </label>
                  <label className="custom-radio booking-form__date">
                    <input type="radio" id="tomorrow19h45m" name="date" required value="tomorrow19h45m" /><span className="custom-radio__label">19:45</span>
                  </label>
                  <label className="custom-radio booking-form__date">
                    <input type="radio" id="tomorrow21h30m" name="date" required value="tomorrow21h30m" /><span className="custom-radio__label">21:30</span>
                  </label>
                </div>
              </fieldset>
            </fieldset>
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Контактная информация</legend>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="name">Ваше имя</label>
                <input type="text" id="name" name="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}" />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
                <input type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}" />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">Количество участников</label>
                <input type="number" id="person" name="person" placeholder="Количество участников" required />
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input type="checkbox" id="children" name="children" checked />
                <span className="custom-checkbox__icon">
                  <svg width="20" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-tick"></use>
                  </svg>
                </span>
                <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
              </label>
            </fieldset>
            <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
              <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">Я&nbsp;согласен с
                <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
