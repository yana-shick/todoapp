function AppInput({label, name, className , ...rest}){

  return(

    <>
      <label htmlFor ={name} > {label} </label>
      <input 
        style={{
          width: "250px",
          height: '30px', 
          fontSize: "12px", 
          background:"none", 
          border: "none", 
          color: 'whitesmoke',
          outline: 'none',
          borderBottom: '1px solid whitesmoke',
        }} 
        id = {name} {...rest} />
    </>
  )
}

export default AppInput