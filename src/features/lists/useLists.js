import { useQuery } from "@tanstack/react-query";
import { getLists } from "../../sevices/apiLists";

export function useLists(boardId) {
  const { data: lists, isPending } = useQuery({
    queryKey: ["lists"],
    queryFn: () => getLists(boardId),
    // gcTime: 5 * 1000,
    gcTime: 0,
  });

  return { lists, isPending };
}
