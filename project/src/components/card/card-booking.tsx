import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { fetchDeleteReservationAction } from '../../store/api-actions';
import { QuestResponseData } from '../../types/data';
import { AppRoute, SlotName } from '../../const';

type ReservationQuestCardProps = {
  reservationQuest: QuestResponseData;
};

export default function CardBooking({ reservationQuest }: ReservationQuestCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchDeleteReservationAction(reservationQuest.id));
  };

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={reservationQuest.quest.previewImgWebp} />
          <img src={reservationQuest.quest.previewImg} width="344" height="232" alt={reservationQuest.quest.title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={(`${AppRoute.Reservation}/${reservationQuest.id}`)}>{reservationQuest.quest.title}</Link>
          <span className="quest-card__info">{`${(SlotName[reservationQuest.date])}, ${reservationQuest.time}. ${reservationQuest.location.address}`}</span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{reservationQuest.peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{reservationQuest.quest.level}
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
          onClick={handleClick}
        >
          Отменить
        </button>
      </div>
    </div>
  );
}
