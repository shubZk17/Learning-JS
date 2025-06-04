import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleClick = (e)=>{
     e.preventDefault()
     if(!username || !password) {
        return(alert("enter the username and password"))
     }
     setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        placeholder='Username'
        value={username}
        onChange={(e)=>{
         setusername(e.target.value)
        }}/>
        <br/>
        <input type='text'
        placeholder='Password'
        value={password}
        onChange={(e)=>{
         setpassword(e.target.value)
        }}/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login