import { useAppSelector } from '../../hooks';
import { getReservationQuests } from '../../store/data-process/selectors';
import CardBooking from '../card/card-booking';


export default function CardsListBooking(): JSX.Element {
  const reservationQuests = useAppSelector(getReservationQuests);

  if (!reservationQuests.length) {
    return <p style={{ textAlign: 'center', fontSize: 24 }}>У Вас пока нет забронированных квестов</p>;
  }

  return (
    <div className="cards-grid">
      {reservationQuests.map((reservationQuest) => (
        <CardBooking
          key={reservationQuest.id}
          reservationQuest={reservationQuest}
        />
      ))}
    </div>
  );
}
