import { useEffect } from 'react';
import CardsList from '../../components/cards-list/cards-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCheckAuthAction, fetchGetQuestAction} from '../../store/api-actions';
import { AppHeader, QuestLevel, QuestType } from '../../const';
import { getQuests } from '../../store/data-process/selectors';
import { getCurrentQuestComplexity, getCurrentQuestType } from '../../store/main-process/selectors';
import { Quests } from '../../types/data';
import { selectQuestComplexity, selectQuestType } from '../../store/main-process/main-process';

export default function IndexScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const quests = useAppSelector(getQuests);
  const currentSort = useAppSelector(getCurrentQuestType);
  const currentComplexity = useAppSelector(getCurrentQuestComplexity);

  function isChooseTopic(arr: Quests): Quests {
    if (currentSort === QuestType.All && currentComplexity === QuestLevel.Any) {
      return arr;
    } else if (currentSort === QuestType.All) {
      return arr.filter((quest) => quest.level === currentComplexity);
    } else if (currentComplexity === QuestLevel.Any) {
      return arr.filter((quest) => quest.type === currentSort);
    } else {
      return arr.filter((quest) => quest.type === currentSort && quest.level === currentComplexity);
    }
  }

  const selectedQuestsType = isChooseTopic(quests);

  useEffect(() => {
    if (quests.length) {
      return;
    }
    dispatch(fetchCheckAuthAction());
    dispatch(fetchGetQuestAction());
  }, [dispatch, quests]);

  return (
    <div className="wrapper">
      <Header version={AppHeader.IndexPage} />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <fieldset className="filter__section">
                <legend className="visually-hidden">Тематика</legend>
                <ul className="filter__list">
                  <li className="filter__item">
                    <input type="radio" name="type" id="all" defaultChecked />
                    <label className="filter__label" htmlFor="all" onClick={() => dispatch(selectQuestType(QuestType.All))}>
                      <svg className="filter__icon" width="26" height="30" aria-hidden="true">
                        <use xlinkHref="#icon-all-quests"></use>
                      </svg><span className="filter__label-text">Все квесты</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="type" id="adventure" />
                    <label className="filter__label" htmlFor="adventure" onClick={() => dispatch(selectQuestType(QuestType.Adventures))}>
                      <svg className="filter__icon" width="36" height="30" aria-hidden="true">
                        <use xlinkHref="#icon-adventure"></use>
                      </svg><span className="filter__label-text">Приключения</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="type" id="horror" />
                    <label className="filter__label" htmlFor="horror" onClick={() =>
                      dispatch(selectQuestType(QuestType.Horror))}
                    >
                      <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                        <use xlinkHref="#icon-horror"></use>
                      </svg><span className="filter__label-text">Ужасы</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="type" id="mystic" />
                    <label className="filter__label" htmlFor="mystic" onClick={() => dispatch(selectQuestType(QuestType.Mystic))}>
                      <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                        <use xlinkHref="#icon-mystic"></use>
                      </svg><span className="filter__label-text">Мистика</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="type" id="detective" />
                    <label className="filter__label" htmlFor="detective" onClick={() => dispatch(selectQuestType(QuestType.Detective))}>
                      <svg className="filter__icon" width="40" height="30" aria-hidden="true">
                        <use xlinkHref="#icon-detective"></use>
                      </svg><span className="filter__label-text">Детектив</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="type" id="sciFi" />
                    <label className="filter__label" htmlFor="sciFi" onClick={() => dispatch(selectQuestType(QuestType.Scifi))}>
                      <svg className="filter__icon" width="28" height="30" aria-hidden="true">
                        <use xlinkHref="#icon-sci-fi"></use>
                      </svg><span className="filter__label-text">Sci-fi</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
              <fieldset className="filter__section">
                <legend className="visually-hidden">Сложность</legend>
                <ul className="filter__list">
                  <li className="filter__item">
                    <input type="radio" name="level" id="any" defaultChecked />
                    <label className="filter__label" htmlFor="any" onClick={() => dispatch(selectQuestComplexity(QuestLevel.Any))}><span className="filter__label-text">Любой</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="level" id="easy" />
                    <label className="filter__label" htmlFor="easy" onClick={() => dispatch(selectQuestComplexity(QuestLevel.Easy))}><span className="filter__label-text">Лёгкий</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="level" id="middle" />
                    <label className="filter__label" htmlFor="middle" onClick={() => dispatch(selectQuestComplexity(QuestLevel.Medium))}><span className="filter__label-text">Средний</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="level" id="hard" />
                    <label className="filter__label" htmlFor="hard" onClick={() => dispatch(selectQuestComplexity(QuestLevel.Hard))}><span className="filter__label-text">Сложный</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <CardsList quests={selectedQuestsType} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
