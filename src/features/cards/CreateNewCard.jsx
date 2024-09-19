import { useCreateCard } from "./useCreateCard";

export default function CreateNewCard({ listId }) {
  const { createCard } = useCreateCard(listId);

  function handleSubmit(e) {
    e.preventDefault();
    const newCard = {
      name: e.target[0].value,
      listId: listId,
    };
    createCard(newCard, {
      onSuccess: () => {
        e.target.reset();
      },
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="create new card" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
