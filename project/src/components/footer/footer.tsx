export default function Footer(): JSX.Element {
  return (
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
  );
}
