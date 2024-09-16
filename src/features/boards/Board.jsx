import styled from "styled-components";

import { NavLink } from "react-router-dom";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  overflow-wrap: break-word;

  padding: 0 12px;
  width: 14rem;
  height: 6rem;
  background: #ffff;

`;

export default function Board({ board, onDelete }) {

  const boardUrl = `/list/${board.id}`;
  
  return (
    <StyledBoard>
      <NavLink 
        style={{
          textDecoration: "none",
          color:'#222'
        }} 
        to={boardUrl}>{board.name}
      </NavLink>
      <button 
        onClick={() => onDelete(board.id)}
        style={{
          width: "100px",
          height: '30px', 
          fontSize: "12px", 
          background:"none", 
          border: "1px solid #222", 
          color: '#222',
          cursor: "pointer"
        }}
        >
        delete
      </button>
    </StyledBoard>
  );
}
