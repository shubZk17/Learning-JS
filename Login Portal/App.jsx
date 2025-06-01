import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [display, setDisplay] = useState(false)

  function handleChange(event){
    setName(event.target.value)
  }

  function handleClick(e){
    e.preventDefault()
    if(!name || !email || !password){
      alert("All fields are required")
      return
    }
    setDisplay(true)
  }


  return (

    <>
    {display ? (<h2>{`Hello ${name} `}</h2>) :
      (<form onSubmit={handleClick}>
        <h2>Login Portal</h2>
        <label>Name: </label>
        <input onChange={handleChange}
        type='text'
        value={name}></input>
        <br></br>
        <label>Email: </label>
        <input 
        onChange={(e)=>setemail(e.target.value)}
        type='email'
        value={email}></input>
        <br />
        <label>Password: </label>
        <input 
        onChange={(e)=>setPassword(e.target.value)}
        type='password'
        value={password}></input>
        <br />
        <button type='submit'>Login</button>
      </form>)}
    </>
  )
}

export default App
