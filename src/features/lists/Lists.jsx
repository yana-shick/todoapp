import { useLists } from "./useLists";
import { useLocation } from "react-router-dom";

import List from "./List";

export default function Lists() {

  const location = useLocation();

  let boardId = location.pathname.split("/").at(-1); 

  const { lists, isPending } = useLists(boardId);
  
  if (!isPending) {
    return lists.map((list) => <List key={list.id} list={list} />);
  }
}
