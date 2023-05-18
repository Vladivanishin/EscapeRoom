import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container container--size-l">
        <Link className="logo header__logo" to={'/'}>
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="link active" href="index.html">Квесты</a>
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
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (800) 333-55-99</a>
        </div>
      </div>
    </header>
  );
}
