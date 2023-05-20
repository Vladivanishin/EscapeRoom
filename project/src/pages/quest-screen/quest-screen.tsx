import { Link, generatePath, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppHeader, AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getQuestInfo } from '../../store/data-process/selectors';
import { useEffect } from 'react';
import { fetchGetQuestInfoAction } from '../../store/api-actions';
import { selectQuest } from '../../store/main-process/main-process';

export default function QuestScreen(): JSX.Element {
  const id = useParams().id;
  console.log('id', id);
  const dispatch = useAppDispatch();
  const currentQuest = useAppSelector(getQuestInfo);
  console.log('currentQuest', currentQuest);
  // const quest = quests.find((quest) => quest.id === id);
  // coneold.log('currentQuest', currentQuest);

  useEffect(() => {
    dispatch(fetchGetQuestInfoAction(id!));
    dispatch(selectQuest(id!));
  }, [dispatch, id]);


  return (
    <div className="wrapper">
      <Header version={AppHeader.QuestPage} />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={currentQuest?.coverImgWebp} /><img src={currentQuest?.previewImg} srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt={currentQuest?.title} />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{currentQuest?.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{currentQuest?.type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{currentQuest?.peopleMinMax[0]}&ndash;{currentQuest?.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{currentQuest?.level}
              </li>
            </ul>
            <p className="quest-page__description">{currentQuest?.description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={generatePath(AppRoute.Booking, { id: `${currentQuest?.id}` })}>Забронировать</Link>
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
