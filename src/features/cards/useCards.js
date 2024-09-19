import { useQuery } from "@tanstack/react-query";
import { getCards } from "../../sevices/apiCards";

export function useCards( listId ) {
  const { data: cards, isPending } = useQuery({
    queryKey: [`cards:${listId}`],
    queryFn: () => getCards(listId),
    gcTime: 5 * 1000,
  });
  return { cards, isPending };
}
