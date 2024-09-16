import styled from "styled-components";
import Cards from "../cards/Cards";

const StylesList = styled.div`
  border: 1px solid white;
`;

export default function List({ list }) {
  return (
    <>
    <StylesList>
      {list.name}
      <Cards listId={list.id} />
    </StylesList>
    </>
  );
}
