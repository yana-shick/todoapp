import supabase from "./supabase";

export async function getBoards() {
  let { data, error } = await supabase.from("board").select();
  if (error) {
    console.error(error);
    throw new Error("Boards could not be load");
  }
  // console.log(data);
  return data;
}

export async function createBoard(newBoard) {
  let { error } = await supabase.from("board").insert({ name: newBoard });
  if (error) {
    console.error(error);
    throw new Error("Board could not be load");
  }
}

export async function deleteBoard(id) {
  let { error } = await supabase.from("board").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Board could not be deleted");
  }
}
