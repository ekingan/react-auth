import React from 'react'

const headerStyle = {
    background: "black",
    height: "15vh",
}
const Header = ({handleFormSwitch}) => {
  return(
    <div style={headerStyle}>
      <h1 style={{color: "white"}}>JWT Auth Setup</h1>
      <button className="ui button" onClick={() => handleFormSwitch("signUp")}>Sign Up</button>
      <button className="ui button" onClick={() => handleFormSwitch("login")}>Log In</button>
    </div>
    )
}

export default Header;