import { useCreateList } from "./useCreateList";

export default function CreateNewList({ boardId }) {
  const { createList } = useCreateList();

  function handleSubmit(e) {
    e.preventDefault();
    const newList = {
      name: e.target[0].value,
      boardId: boardId,
    };
    createList(newList, {
      onSuccess: () => {
        e.target.reset();
      },
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="create new list" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
