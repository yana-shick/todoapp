import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteList as deleteListApi } from "../../sevices/apiLists";

export function useDeleteList() {
  const queryClient = useQueryClient();
  const { isPending, mutate: deleteList } = useMutation({
    mutationFn: deleteListApi, //
    onSuccess: () => {
      console.log("success list deleted");
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
    onError: () => {
      console.log("error delete list");
    },
  });
  return { isPending, deleteList };
}
