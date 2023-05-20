import { Link } from 'react-router-dom';
import { AppHeader, AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';
import { fetchLogoutAction } from '../../store/api-actions';

type HeaderProps = {
  version: AppHeader;
}

export default function Header({ version }: HeaderProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container container--size-l">
        <Link className="logo header__logo" to={AppRoute.Index}>
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={`link ${version === AppHeader.QuestPage ? 'active not-disabled' : ''}`} to={AppRoute.MyQuests}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className={`link ${version === AppHeader.ContactsPage ? 'active' : ''}`} to={AppRoute.Contacts}>Контакты</Link>
            </li>
            {authStatus === AuthorizationStatus.Auth && (
              <li className="main-nav__item">
                <Link className={`link ${version === AppHeader.BookingPage ? 'active' : ''}`} to={AppRoute.Booking}>Мои бронирования</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="header__side-nav">
          {authStatus === AuthorizationStatus.Auth && (
            <Link className="btn btn--accent header__side-item" to={'/'} onClick={(evt) => {
              evt.preventDefault();
              dispatch(fetchLogoutAction());
            }}
            >Выйти
            </Link>)}
          {authStatus !== AuthorizationStatus.Auth && (<Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>)}
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (800) 333-55-99</a>
        </div>
      </div>
    </header>
  );
}
