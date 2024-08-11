import { useQuery } from "@tanstack/react-query";
import { getBoards } from "../../sevices/apiBoards";

export function useBoards() {
  const { data: boards, isPending } = useQuery({
    queryKey: ["boards"],
    queryFn: getBoards,
  });
  return { boards, isPending };
}
