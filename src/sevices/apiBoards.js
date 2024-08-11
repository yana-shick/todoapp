import supabase from "./supabase";

export async function getBoards() {
  let { data, error } = await supabase.from("board").select();
  if (error) {
    console.error(error);
    throw new Error("Boards could not be load");
  }
  return data;
}

export async function createBoard(newBoard) {
  let { data, error } = await supabase.from("board").insert({ name: newBoard });
  if (error) {
    console.error(error);
    throw new Error("Boards could not be load");
  }
  return data;
}
