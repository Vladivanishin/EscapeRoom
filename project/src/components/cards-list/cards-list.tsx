import { Quests } from '../../types/data';
import Card from '../card/card';


type CardsListProps = {
  quests: Quests;
}

export default function CardsList({ quests }: CardsListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => <Card key={quest.id} quest={quest} />)}
    </div>
  );
}
