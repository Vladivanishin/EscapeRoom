import { Navigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppHeader, AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';
import { useEffect } from 'react';
import { fetchGetReservationAction } from '../../store/api-actions';

export default function MyQuestsScreen(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetReservationAction());
  }, [dispatch]);

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
          <div className="cards-grid">
            <div className="quest-card">
              <div className="quest-card__img">
                <picture>
                  <source type="image/webp" srcSet="img/content/maniac/maniac-size-s.webp, img/content/maniac/maniac-size-s@2x.webp 2x" /><img src="img/content/maniac/maniac-size-s.jpg" srcSet="img/content/maniac/maniac-size-s@2x.jpg 2x" width="344" height="232" alt="Мужчина в маске в тёмном переходе." />
                </picture>
              </div>
              <div className="quest-card__content">
                <div className="quest-card__info-wrapper"><a className="quest-card__link" href="quest.html">Маньяк</a><span className="quest-card__info">[сегодня,&nbsp;17:00. наб. реки Карповки&nbsp;5, лит&nbsp;П<br />м. Петроградская]</span>
                </div>
                <ul className="tags quest-card__tags">
                  <li className="tags__item">
                    <svg width="11" height="14" aria-hidden="true">
                      <use xlinkHref="#icon-person"></use>
                    </svg>6&nbsp;чел
                  </li>
                  <li className="tags__item">
                    <svg width="14" height="14" aria-hidden="true">
                      <use xlinkHref="#icon-level"></use>
                    </svg>Средний
                  </li>
                </ul>
                <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
              </div>
            </div>
            <div className="quest-card">
              <div className="quest-card__img">
                <picture>
                  <source type="image/webp" srcSet="img/content/palace/palace-size-s.webp, img/content/palace/palace-size-s@2x.webp 2x" /><img src="img/content/palace/palace-size-s.jpg" srcSet="img/content/palace/palace-size-s@2x.jpg 2x" width="344" height="232" alt="Замок на возвышенности." />
                </picture>
              </div>
              <div className="quest-card__content">
                <div className="quest-card__info-wrapper"><a className="quest-card__link" href="quest.html">Тайны старого особняка</a><span className="quest-card__info">[завтра,&nbsp;17:00. наб. реки Карповки&nbsp;5, лит&nbsp;П<br />м. Петроградская]</span>
                </div>
                <ul className="tags quest-card__tags">
                  <li className="tags__item">
                    <svg width="11" height="14" aria-hidden="true">
                      <use xlinkHref="#icon-person"></use>
                    </svg>3&nbsp;чел
                  </li>
                  <li className="tags__item">
                    <svg width="14" height="14" aria-hidden="true">
                      <use xlinkHref="#icon-level"></use>
                    </svg>Лёгкий
                  </li>
                </ul>
                <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
              </div>
            </div>
            <div className="quest-card">
              <div className="quest-card__img">
                <picture>
                  <source type="image/webp" srcSet="img/content/maniac/maniac-size-s.webp, img/content/maniac/maniac-size-s@2x.webp 2x" /><img src="img/content/maniac/maniac-size-s.jpg" srcSet="img/content/maniac/maniac-size-s@2x.jpg 2x" width="344" height="232" alt="Мужчина в маске в тёмном переходе." />
                </picture>
              </div>
              <div className="quest-card__content">
                <div className="quest-card__info-wrapper"><a className="quest-card__link" href="quest.html">Маньяк</a><span className="quest-card__info">[завтра,&nbsp;20:00. наб. реки Карповки&nbsp;5, лит&nbsp;П<br />м. Петроградская]</span>
                </div>
                <ul className="tags quest-card__tags">
                  <li className="tags__item">
                    <svg width="11" height="14" aria-hidden="true">
                      <use xlinkHref="#icon-person"></use>
                    </svg>6&nbsp;чел
                  </li>
                  <li className="tags__item">
                    <svg width="14" height="14" aria-hidden="true">
                      <use xlinkHref="#icon-level"></use>
                    </svg>Средний
                  </li>
                </ul>
                <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container container--size-l">
          <div className="socials">
            <ul className="socials__list">
              <li className="socials__item">
                <a className="socials__link" href="#" aria-label="Skype" target="_blank" rel="nofollow noopener noreferrer">
                  <svg className="socials__icon socials__icon--default" width="28" height="28" aria-hidden="true">
                    <use xlinkHref="#icon-skype-default"></use>
                  </svg>
                  <svg className="socials__icon socials__icon--interactive" width="28" height="28" aria-hidden="true">
                    <use xlinkHref="#icon-skype-interactive"></use>
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a className="socials__link" href="#" aria-label="ВКонтакте" target="_blank" rel="nofollow noopener noreferrer">
                  <svg className="socials__icon socials__icon--default" width="28" height="28" aria-hidden="true">
                    <use xlinkHref="#icon-vk-default"></use>
                  </svg>
                  <svg className="socials__icon socials__icon--interactive" width="28" height="28" aria-hidden="true">
                    <use xlinkHref="#icon-vk-interactive"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
