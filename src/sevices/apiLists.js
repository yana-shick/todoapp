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
//   console.log(data);
  return data;
}
