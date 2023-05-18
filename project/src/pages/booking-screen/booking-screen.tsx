export default function BookingScreen(): JSX.Element {
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
                <a className="link not-disabled active" href="index.html">Квесты</a>
              </li>
              <li className="main-nav__item">
                <a className="link" href="contacts.html">Контакты</a>
              </li>
              <li className="main-nav__item">
                <a className="link" href="my-quests.html">Мои бронирования</a>
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
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">Маньяк</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container"></div>
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м. Петроградская</p>
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
