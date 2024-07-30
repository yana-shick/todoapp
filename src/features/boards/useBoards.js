import { useQuery } from "@tanstack/react-query";
import { getBoards } from "../../sevices/apiBoards";

export function useBoards() {
  const { data: boards, isLoading } = useQuery({
    queryKey: ["boards"],
    queryFn: getBoards,
  });
  return { boards, isLoading };
}
