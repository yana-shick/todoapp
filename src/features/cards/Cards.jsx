// import { useCards } from "..cards/useCards";
import { useDeleteCard } from "./useDeleteCard";

import Card from "./Card";
import CreateNewCard from "./CreateNewCard";

export default function Cards({ cards, listId }) {
  // const { cards, isPending } = useCards(list.id);

  const { deleteCard } = useDeleteCard(listId);

  function handleDelete(id) {
    deleteCard(id);
  }

  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} card={card} onDelete={handleDelete} />
      ))}
      <CreateNewCard listId={listId} />
    </>
  );
}
