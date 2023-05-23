import { DateSlot } from '../../const';
import { SlotDay } from '../../types/data';
import { formatTime } from '../../utils';

type BookingTimeBtnProps = {
  day: DateSlot;
  slot: SlotDay;
  onDateChange: (date: DateSlot, time: string) => void;
}

export default function BookingTimeBtn({ day, slot, onDateChange }: BookingTimeBtnProps): JSX.Element {
  const { time, isAvailable } = slot;
  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={`${day}${formatTime(time)}`}
        name="date"
        value={`${day}${formatTime(time)}`}
        disabled={!isAvailable}
        onChange={() => onDateChange(day, time)}
        required
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}
