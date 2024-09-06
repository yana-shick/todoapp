import { useCards } from "./useCards";

export default function Cards({ listId }) {
  const { cards, isPending } = useCards(listId);
  
  if (!isPending) {
    return cards.map((card) => <div key={card.id}>{card.name}</div>);
  }
}
