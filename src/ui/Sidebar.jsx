import { useLocation } from "react-router-dom";

import styled from "styled-components";

import Logo from "./Logo";
import BoardMenu from "../features/boards/BoardSideMenu";

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;
  background-color: #222;
`;

export default function Sidebar() {
  const location = useLocation().pathname;

  if (location === "/") {
    return (
      <StyledSidebar>
        <Logo />
        Another Menu
      </StyledSidebar>
    );
  }
  return (
    <StyledSidebar>
      <Logo />
      <BoardMenu />
    </StyledSidebar>
  );
}
