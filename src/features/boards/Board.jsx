import styled from "styled-components";

import { NavLink } from "react-router-dom";

const StyledBoard = styled.div`
  border: 1px solid black;
  width: 12rem;
  height: 12rem;
`;

export default function Board({ board, onDelete }) {

  const boardUrl = `/list/${board.id}`;
  
  return (
    <StyledBoard>
      <NavLink to={boardUrl}>{board.name}</NavLink>
      <button onClick={() => onDelete(board.id)}>delete</button>
    </StyledBoard>
  );
}
