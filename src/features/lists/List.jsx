import styled from "styled-components";

import Cards from "../cards/Cards";

import { useCards } from "../cards/useCards";

import Spinner from "../../ui/Spinner";

const StyledList = styled.div`
  border: 1px solid white;
`;

export default function List({ list, onDelete }) {
  const { cards, isPending } = useCards(list.id);
  console.log("list component " + list.id);

  if (isPending) {
    return <Spinner />;
  }

  if (!isPending) {
    return (
      <StyledList>
        <p style={{ textAlign: "center" }}>{list.name}</p>
        <button onClick={() => onDelete(list.id)}>delete</button>
        <br />
        <Cards key={list.id} cards={cards} listId={list.id} />
      </StyledList>
    );
  }
}
