import Boards from "../features/boards/Boards";
import CreateNewBoard from "../features/boards/CreateNewBoard";

export default function Home() {
  return (
    <>
      <Boards />
      <CreateNewBoard />
    </>
  );
}
