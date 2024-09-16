import styled from "styled-components";

import Logo from "./Logo";

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;
  background-color: #222;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <div>MENU</div>
    </StyledSidebar>
  );
}
