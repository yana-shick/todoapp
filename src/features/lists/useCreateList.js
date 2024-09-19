import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createList as createListApi } from "../../sevices/apiLists";

export function useCreateList() {
  const queryClient = useQueryClient();
  const { isPending, mutate: createList } = useMutation({
    mutationFn: createListApi, //
    onSuccess: () => {
      console.log("success new list");
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
    onError: () => {
      console.log("error new list");
    },
  });
  return { isPending, createList };
}
