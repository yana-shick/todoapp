import { useBoards } from "./useBoards";
import { useDelete } from "./useDelete";

export default function Test() {
  const { boards, isPending } = useBoards();
  const { delBoard } = useDelete();
  function handleDelete(board) {
    // console.log(board.name + board.id);
    delBoard(board.id);
  }
  if (isPending) return <div>Loading...</div>;
  return (
    <div>
      {boards.map((board) => {
        return (
          <>
            <p>{board.name}</p>
            <button onClick={() => handleDelete(board)}>delete</button>
          </>
        );
      })}
    </div>
  );
}
