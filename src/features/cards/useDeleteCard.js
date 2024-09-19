import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCard as deleteCardApi } from "../../sevices/apiCards";

export function useDeleteCard(listId) {
  const queryClient = useQueryClient();
  const { isPending, mutate: deleteCard } = useMutation({
    mutationFn: deleteCardApi, //
    onSuccess: () => {
      console.log("success card deleted");
      queryClient.invalidateQueries({ queryKey: [`cards:${listId}`] });
    },
    onError: () => {
      console.log("error delete card");
    },
  });
  return { isPending, deleteCard };
}
