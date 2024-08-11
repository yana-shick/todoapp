import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBoard } from "../../sevices/apiBoards";

export function useDelete() {
  const queryClient = useQueryClient();
  const { isPending, mutate: delBoard } = useMutation({
    mutationFn: deleteBoard, //
    onSuccess: () => {
      console.log("success board deleted");
      queryClient.invalidateQueries({ queryKey: ["boards"] });
    },
    onError: () => {
      console.log("error delete board");
    },
  });
  return { isPending, delBoard };
}
