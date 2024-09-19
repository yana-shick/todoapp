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
  return data;
}

export async function createCard(newCard) {
  let { error } = await supabase.from("card").insert({ ...newCard });
  if (error) {
    console.error(error);
    throw new Error("Card could not be load");
  }
}

export async function deleteCard(id) {
  let { error } = await supabase.from("card").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Card could not be deleted");
  }
}
