import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBoard } from "../../sevices/apiBoards";

export function useCreate() {
  const queryClient = useQueryClient();
  const { isPending, mutate: create } = useMutation({
    mutationFn: createBoard, //
    onSuccess: () => {
      console.log("success new board");
      queryClient.invalidateQueries({ queryKey: ["boards"] });
    },
    onError: () => {
      console.log("error new board");
    },
  });
  return { isPending, create };
}
