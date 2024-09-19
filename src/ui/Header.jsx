import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #383645;
  display: flex;
  justify-content: end;
`;

export default function Header() {
  return (
    <StyledHeader>
      <div>NAME</div>
      <div>UserDetails</div>
      <div>DarkMode</div>
      <div>Exit</div>
    </StyledHeader>
  );
}
