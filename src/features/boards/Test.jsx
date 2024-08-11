import { useBoards } from "./useBoards";

export default function Test() {
  const { boards, isPending } = useBoards();
  if (isPending) return <div>Loading...</div>;
  return (
    <div>
      {boards.map((board) => {
        return <p>{board.name}</p>;
      })}
    </div>
  );
}
