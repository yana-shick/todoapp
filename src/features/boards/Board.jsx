import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  overflow-wrap: break-word;
  cursor: pointer;

  padding: 0 12px;
  width: 14rem;
  height: 6rem;
  background: #ffff;
`;

export default function Board({ board, onDelete }) {
  const boardUrl = `/list/${board.id}`;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(boardUrl);
  };

  return (
    <StyledBoard onClick={handleClick}>
      <div
        style={{
          textDecoration: "none",
          color: "#222",
        }}
      >
        {board.name}
      </div>
      <button
        onClick={(event) => {
          event.stopPropagation();
          return onDelete(board.id);
        }}
        style={{
          width: "100px",
          height: "30px",
          fontSize: "12px",
          background: "none",
          border: "1px solid #222",
          color: "#222",
          cursor: "pointer",
        }}
      >
        delete
      </button>
    </StyledBoard>
  );
}
