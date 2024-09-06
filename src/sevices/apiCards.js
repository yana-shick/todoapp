import supabase from "./supabase";

export async function getCards(listId) {
  let { data, error } = await supabase
    .from("card")
    .select()
    .eq("listId", listId);
  if (error) {
    console.error(error);
    throw new Error("Cards could not be load");
  }
  //   console.log(data);
  return data;
}
