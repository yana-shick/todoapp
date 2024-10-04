import { useLocation } from "react-router-dom";

import Lists from "../features/lists/Lists";
import CreateNewList from "../features/lists/CreateNewList";

export default function Dashboard() {
  const location = useLocation();
  let boardId = location.pathname.split("/").at(-1);
  return (
    <>
      <CreateNewList boardId={boardId} />
      <Lists key={boardId} boardId={boardId} />
    </>
  );
}
