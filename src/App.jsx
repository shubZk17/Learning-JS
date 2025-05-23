import { useCallback, useEffect, useRef, useState } from 'react'


function App() {

  const[length, setlength]= useState(8);
  const[numberA, setNumber]= useState(false);
  const[characterA, setCharacter]= useState(false);
  const[password, setpassword]= useState("");

  const passwordref = useRef(null)

  const passwordGenerator= useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberA==true) str +="1234567890"
    if(characterA==true) str += "@!#$%^&*"
    
    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    

    setpassword(pass)

  },[length,numberA,characterA,setpassword] )


  const copyPassword= useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])



useEffect(()=>{
  passwordGenerator()
},[length,numberA,characterA,passwordGenerator])   

  return (
    <>
     <div>
      <h1>PassWordGenerator</h1>
      <div>
      <input placeholder='Password'
      type='text'
      value={password}
      readOnly
      ref={passwordref}></input>
      <button 
      onClick={copyPassword}>Copy</button>
      </div>
      <div>
        <input type='range'
        min={6}
        max={20}
        value={length}
        onChange={(e)=>{setlength(e.target.value)}}></input>
        <label>Length :{length}</label>
        </div>
      <div>
        <input type='checkbox'
        checked={numberA}
        onChange={(e)=>{setNumber(prev => !prev)}}></input>
        <label>Numbers</label>
        </div>
      <div>
        <input type='checkbox'
        checked={characterA}
        onChange={(e)=>{setCharacter(prev => !prev)}}></input>
        <label>Character</label>
      </div>
     </div>
    </>
  )
}

export default App
