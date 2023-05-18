export default function MyQuestsScreen(): JSX.Element {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container container--size-l">
          <a className="logo header__logo" href="index.html" aria-label="Перейти на Главную">
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </a>
          <nav className="main-nav header__main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <a className="link not-disabled" href="index.html">Квесты</a>
              </li>
              <li className="main-nav__item">
                <a className="link" href="contacts.html">Контакты</a>
              </li>
              <li className="main-nav__item">
                <a className="link active" href="my-quests.html">Мои бронирования</a>
              </li>
            </ul>
          </nav>
          <div className="header__side-nav">
            <a className="btn btn--accent header__side-item" href="#">Выйти</a>
            <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
          </div>
        </div>
      </header>
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
