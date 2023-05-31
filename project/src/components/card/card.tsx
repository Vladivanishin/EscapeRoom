import { Link, generatePath } from 'react-router-dom';
import { Quest } from '../../types/data';
import { AppRoute, QuestLevelRus } from '../../const';
import { useAppDispatch } from '../../hooks';
import { selectQuest } from '../../store/main-process/main-process';
import { fetchGetQuestInfoAction } from '../../store/api-actions';
// import { selectQuest } from '../../store/main-process/main-process';

type CardProps = {
  quest: Quest;
}

export default function Card({ quest }: CardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCardClick = () => {
    dispatch(selectQuest(quest.id));
    dispatch(fetchGetQuestInfoAction(quest.id));
  };

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={quest.previewImgWebp} /><img src={quest.previewImg} srcSet="img/content/crypt/crypt-size-s@2x.jpg 2x" width="344" height="232" alt={quest.title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper"><Link className="quest-card__link" to={generatePath(AppRoute.Quest, { id: `${quest.id}` })} onClick={() => handleCardClick()}>{quest.title}</Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{quest.peopleMinMax[0]}&ndash;{quest.peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{QuestLevelRus[quest.level]}
          </li>
        </ul>
      </div>
    </div>
  );
}
