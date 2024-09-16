import { useBoards } from "./useBoards";
import { useDelete } from "./useDelete";

import styled from "styled-components";

import Board from "./Board";

const StyledBoards = styled.div`
  display: flex;
  flex-durection: row
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  
`;

export default function Boards() {
  const { boards, isPending } = useBoards();
  
  const { deleteBoard } = useDelete();

  function handleDelete(id) {
    deleteBoard(id);
  }
  if (isPending) return <div>Loading...</div>;
  return (
    <StyledBoards>
      {boards.map((board) => {
        return <Board board={board} onDelete={handleDelete} key={board.id} />;
      })}
    </StyledBoards>
  );
}
