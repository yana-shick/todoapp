import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBoard as createBoardApi } from "../../sevices/apiBoards";

export function useCreate() {
  const queryClient = useQueryClient();
  const { isPending, mutate: createBoard } = useMutation({
    mutationFn: createBoardApi, //
    onSuccess: () => {
      console.log("success new board");
      queryClient.invalidateQueries({ queryKey: ["boards"] });
    },
    onError: () => {
      console.log("error new board");
    },
  });
  return { isPending, createBoard };
}
