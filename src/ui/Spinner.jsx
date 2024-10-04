import styled from "styled-components";

const StyledSpinner = styled.div`
  width: 400px;
  height: 400px;
  background-color: magenta;
`;

export default function Spinner() {
  return <StyledSpinner>...LOADING</StyledSpinner>;
}
