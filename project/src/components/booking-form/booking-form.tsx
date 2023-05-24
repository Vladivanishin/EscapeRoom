import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { QuestDate } from '../../const';
import { getBookingQuests, getQuest } from '../../store/data-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { BookingFormFields, QuestBookingData } from '../../types/data';
import BookingSlotList from './booking-slot-list';
import { BookingPostData, fetchPostQuestBookingAction } from '../../store/api-actions';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function BookingForm(): JSX.Element {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<BookingFormFields>({
    mode: 'onChange'
  });

  const dispatch = useAppDispatch();

  const [currentDate, setCurrentDate] = useState<QuestDate | null>(null);
  const [currentTime, setCurrentTime] = useState('');

  const onDateChange = useCallback((date: QuestDate, time: string): void => {
    setCurrentDate(date);
    setCurrentTime(time);
  }, []);

  const quest = useAppSelector(getQuest);
  const bookingQuests = useAppSelector(getBookingQuests);
  const currentQuestPlace = bookingQuests[0];

  if (!quest || !currentQuestPlace) {
    return <LoadingScreen />;
  }

  const [minPersonCount, maxPersonCount] = quest.peopleMinMax;

  const resetBookingFormData = () => {
    setCurrentDate(null);
    setCurrentTime('');
    reset();
  };

  const onSubmit: SubmitHandler<BookingFormFields> = (data) => {
    const bookingData: QuestBookingData = {
      contactPerson: data.name,
      phone: data.tel,
      peopleCount: Number(data.person),
      date: currentDate as QuestDate,
      time: currentTime,
      withChildren: data.children,
      placeId: currentQuestPlace.id
    };

    const bookingPostData: BookingPostData = {
      questId: quest.id,
      questData: bookingData
    };

    dispatch(fetchPostQuestBookingAction({ ...bookingPostData, onSuccess: resetBookingFormData }));
  };

  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <BookingSlotList
          onDateChange={onDateChange}
          slots={currentQuestPlace.slots}
        />
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input login-form__input" key="name">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input {...register('name', {
            required: 'Это обязательное поле',
            pattern: {
              value: /^.{1,15}$/,
              message: 'От 1 до 15 символов'
            }
          })}
          type="text"
          id="name"
          name="name"
          placeholder="Имя"
          />
          {errors['name'] && <p>{errors['name']?.message}</p>}
        </div>
        <div className="custom-input login-form__input" key="tel">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input
            {...register('tel', {
              required: 'Это обязательное поле',
              pattern: {
                value: /^(\+[7]|[8])?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){8,12}\d$/,
                message: 'Введите корректный номер мобильного телефона'
              }
            })}
            type="tel"
            id="tel"
            name="tel"
            placeholder='+71234567890'
          />
          {errors['tel'] && <p>{errors['tel']?.message}</p>}
        </div>
        <div className="custom-input login-form__input" key="person">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input
            {...register('person', {
              required: 'Это обязательное поле',
              pattern: {
                value: new RegExp(`^([${minPersonCount}-${maxPersonCount}])$`),
                message: `Количество участников от ${minPersonCount} до ${maxPersonCount}`
              }
            })}
            type="number"
            id="person"
            name="person"
            placeholder='Количество участников'
          />
          {errors['person'] && <p>{errors['person']?.message}</p>}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input {...register('children')}
            type="checkbox"
            id="children"
            name="children"
          />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit" disabled={!isValid}
      >
        Забронировать
      </button>
    </form>
  );
}
