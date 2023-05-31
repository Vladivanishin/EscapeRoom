import { Link, generatePath, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppHeader, AppRoute, QuestLevelRus, QuestTypeRus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getQuest } from '../../store/data-process/selectors';
import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import { fetchGetQuestInfoAction } from '../../store/api-actions';
import { selectQuest } from '../../store/main-process/main-process';
import NotFoundScreen from '../not-found-screen/not-found-screen';

export default function QuestScreen(): JSX.Element {
  const { id } = useParams();
  const questId = String(id);
  const dispatch = useAppDispatch();

  const currentQuest = useAppSelector(getQuest);

  useEffect(() => {
    if (currentQuest) {
      return;
    }
    dispatch(fetchGetQuestInfoAction(questId));
    dispatch(selectQuest(questId));
  }, [currentQuest, dispatch, questId]);

  if (currentQuest === null) {
    return <NotFoundScreen />;
  }

  return (
    <div className="wrapper">
      <Header version={AppHeader.QuestPage} />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${currentQuest.coverImgWebp}, ${currentQuest.coverImgWebp} 2x`} /><img src={currentQuest.coverImg} srcSet={`${currentQuest.coverImg} 2x`} width="1366" height="768" alt={currentQuest.title} />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{currentQuest.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{QuestTypeRus[currentQuest.type]}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{currentQuest.peopleMinMax[0]}&ndash;{currentQuest.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{QuestLevelRus[currentQuest.level]}
              </li>
            </ul>
            <p className="quest-page__description">{currentQuest.description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={generatePath(AppRoute.Booking, { id: `${questId}` })}>Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
