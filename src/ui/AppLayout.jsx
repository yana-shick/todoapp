import { Outlet } from "react-router-dom";

import styled from "styled-components";

import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;
const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background-image: linear-gradient(
    to right top,
    #222222,
    #27272a,
    #2d2c33,
    #32313c,
    #383645
  );
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: none;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
