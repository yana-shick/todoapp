import { useQueryClient, useMutation } from "@tanstack/react-query";

import { createCard as createCardApi } from "../../sevices/apiCards";

export function useCreateCard(listId) {
  const queryClient = useQueryClient();
  const { isPending, mutate: createCard } = useMutation({
    mutationFn: createCardApi,
    onSuccess: () => {
      console.log("success new card");
      queryClient.invalidateQueries({ queryKey: [`cards:${listId}`] });
    },
    onError: () => {
      console.log("error new card");
    },
  });

  return { isPending, createCard };
}
