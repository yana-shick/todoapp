import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBoard as deleteBoardApi } from "../../sevices/apiBoards";

export function useDeleteBoard() {
  const queryClient = useQueryClient();
  const { isPending, mutate: deleteBoard } = useMutation({
    mutationFn: deleteBoardApi, //
    onSuccess: () => {
      console.log("success board deleted");
      queryClient.invalidateQueries({ queryKey: ["boards"] });
    },
    onError: () => {
      console.log("error delete board");
    },
  });
  return { isPending, deleteBoard };
}
