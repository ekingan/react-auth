import React, {useState} from 'react'

const SignUpForm = ({handleLogin}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (evt) => {
        setEmail(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/api/v1/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            handleLogin(data.user)
        })
        setEmail("")
        setPassword("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    
    return(
        <div style={formDivStyle}>
            <h1>Sign Up</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Email</label>
                    <input value={email} onChange={handleUsernameChange} type="text" placeholder="email"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>
                
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm