import { useBoards } from "./useBoards";

import styled from "styled-components";

import CreateNewBoard from "./CreateNewBoard";

const StyledBoardMenu = styled.div`
  border: 1px solid purple;
`;

export default function BoardSideMenu() {
  const { boards, isPending } = useBoards();

  if (!isPending) {
    return (
      <StyledBoardMenu>
        <CreateNewBoard />
        <br />
        {boards.map((board) => (
          <div key={board.id}>{board.name}</div>
        ))}
      </StyledBoardMenu>
    );
  }
}
