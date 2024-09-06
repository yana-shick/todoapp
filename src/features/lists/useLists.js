import { useQuery } from "@tanstack/react-query";
import { getLists } from "../../sevices/apiLists";

export function useLists(boardId) {
  const { data: lists, isPending } = useQuery({
    queryKey: ["lists"],
    queryFn: () => getLists(boardId),
  });

  return { lists, isPending };
}
