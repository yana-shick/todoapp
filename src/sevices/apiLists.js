import supabase from "./supabase";

export async function getLists(boardId) {
  let { data, error } = await supabase
    .from("list")
    .select()
    .eq("boardId", boardId);

  if (error) {
    console.error(error);
    throw new Error("Loasts could not be load");
  }
  return data;
}

export async function createList(newList) {
  let { error } = await supabase.from("list").insert({ ...newList });
  if (error) {
    console.error(error);
    throw new Error("List could not be load");
  }
}

export async function deleteList(id) {
  let { error } = await supabase.from("list").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("List could not be deleted");
  }
}
