import { useLists } from "./useLists";
import { useDeleteList } from "./useDeleteList";

import List from "./List";

export default function Lists({ boardId }) {
  const { lists, isPending } = useLists(boardId);

  const { deleteList } = useDeleteList();

  function handleDelete(id) {
    deleteList(id);
  }

  if (!isPending) {
    return lists.map((list) => (
      <List key={list.id} list={list} onDelete={handleDelete} />
    ));
  }
}
