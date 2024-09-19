import styled from "styled-components";

const StyledInput = styled.input`
  width: 250px;
  height: 30px;
  font-size: 12px;
  background: none;
  border: none;
  color: whitesmoke;
  outline: none;
  border-bottom: 1px solid whitesmoke;
`;

function AppInput({ label, name, className, ...rest }) {
  return (
    <>
      {/* <label htmlFor={name}> {label} </label>
      <input
        style={{
          width: "250px",
          height: "30px",
          fontSize: "12px",
          background: "none",
          border: "none",
          color: "whitesmoke",
          outline: "none",
          borderBottom: "1px solid whitesmoke",
        }}
        id={name}
        {...rest}
      /> */}
      <label htmlFor={name}> {label} </label>
      <StyledInput id={name} {...rest} />
    </>
  );
}

export default AppInput;
