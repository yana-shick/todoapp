import { useCreate } from "./useCreate";
import { useState } from "react";
import styled from "styled-components";
import AppInput from "../../ui/AppInput";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;


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
  <>
    <form onSubmit={handleSubmit}>
        {/* <input placeholder="create new board" />
        <button type="submit">Create</button> */}

      <Container>
        <AppInput
          label= "*"
          name="board"
          type = "text"
          placeholder = 'Name board...'
        />

        <button 
          style={{ 
            width: "100px",
            height: '30px', 
            fontSize: "12px", 
            background:"none", 
            border: "1px solid whitesmoke", 
            color: 'whitesmoke',
            cursor: "pointer"
              }} 
          type="submit">
            Create
        </button> 
      </Container>
        
    </form>
  </>
  );
}


