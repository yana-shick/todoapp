import { useCreate } from "./useCreate";
import { useState } from "react";

export default function Create() {
  const [newBoard, setNewBoard] = useState();
  const { create } = useCreate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(newBoard);
    create(newBoard);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="create new board"
          onChange={(e) => {
            setNewBoard(e.target.value);
          }}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
