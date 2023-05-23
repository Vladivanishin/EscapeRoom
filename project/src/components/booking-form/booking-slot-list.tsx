import { DateSlot } from '../../const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { Slots } from '../../types/data';
import BookingTimeBtn from './booking-time-btn';

type SlotsConstProps = {
  slots: Slots;
  slotName: string;
  onDateChange: (date: DateSlot, time: string) => void;
}

export default function BookingSlotList({ slots, slotName, onDateChange }: SlotsConstProps): JSX.Element {
  if (!slots) {
    return <LoadingScreen />;
  }
  return (
    <>
      {Object.entries(slots).map(([date, infoList]) => (
        <fieldset className="booking-form__date-section" key={date}>
          <legend className="booking-form__date-title">{slotName}</legend>
          <div className="booking-form__date-inner-wrapper">
            {infoList.map((info) => (
              <BookingTimeBtn
                key={info.time}
                day={date as DateSlot}
                slot={info}
                onDateChange={onDateChange}
              />
            ))}
          </div>
        </fieldset>
      ))}
    </>
  );
}
