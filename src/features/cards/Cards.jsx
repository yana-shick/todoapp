import { useCards } from "./useCards";
import { useDeleteCard } from "./useDeleteCard";

import Card from "./Card";
import CreateNewCard from "./CreateNewCard";

export default function Cards({ list }) {
  const { cards, isPending } = useCards(list.id);

  const { deleteCard } = useDeleteCard(list.id);

  function handleDelete(id) {
    deleteCard(id);
  }

  if (!isPending) {
    return (
      <>
        {cards.map((card) => (
          <Card key={card.id} card={card} onDelete={handleDelete} />
        ))}
        <CreateNewCard listId={list.id} />
      </>
    );
  }
}
