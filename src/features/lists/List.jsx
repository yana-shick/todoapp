import styled from "styled-components";

import Cards from "../cards/Cards";

const StyledList = styled.div`
  border: 1px solid white;
`;

export default function List({ list, onDelete }) {
  return (
    <StyledList>
      {list.name}
      <button onClick={() => onDelete(list.id)}>delete</button>
      <Cards list={list} />
    </StyledList>
  );
}
