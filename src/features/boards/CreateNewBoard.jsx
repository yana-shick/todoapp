import { useCreate } from "./useCreate";
import { useState } from "react";

export default function CreateNewBoard() {
  const { createBoard } = useCreate();

  function handleSubmit(e) {
    e.preventDefault();
    createBoard(e.target[0].value, {
      onSuccess: () => {
        e.target.reset();
      },
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="create new board" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
