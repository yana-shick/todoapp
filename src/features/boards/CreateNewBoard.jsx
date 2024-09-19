import { useCreateBoard } from "./useCreateBoard";

export default function CreateNewBoard() {
  const { createBoard } = useCreateBoard();

  function handleSubmit(e) {
    e.preventDefault();
    createBoard(e.target[0].value, {
      onSuccess: () => {
        e.target.reset();
      },
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="create new board" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
