import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const[length, setlength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setcharAllowed] = useState(false);
  const[password, setpassword] = useState("");

  // useref hook

  const passwordRef = useRef(null);
const passwordGenerator = useCallback(() => {
  let pass=""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(charAllowed) str +=  "!@#$%^&*()-_=+[]{}|;:,.<>?"

  for(let i=1; i<=length; i++){
    let char = Math.floor( Math.random()* str.length + 1)
  pass += str.charAt(char)

  }



  setpassword(pass);


} , [length, numberAllowed, charAllowed, setpassword])
  
const copyPasswordtoclipBoard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 4)
  window.navigator.clipboard.writeText(password)
}, [password])
useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
 
     <div className="main-container">
      <h1 className="heading"> Password Generator</h1>
     <div className='text-container'>
      <input type="text" value={password} className="txt-field" placeholder="password" readOnly ref={passwordRef}></input>
      <button onClick={copyPasswordtoclipBoard}
       className="">copy</button>
     </div>
     <div className='length-container'>
      <input type="range" min={6} max={50} value={length} onChange={(e) => {setlength(e.target.value)}}/>
      <label>Length: {length}</label>

     </div>
     <div className="num-conatiner">
      <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
        setNumberAllowed((prev) =>!prev);
      }}/>
      <label htmlFor="numberInput">Numbers</label>
     </div>
     <div className="char-conatiner">
      <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => {
        setcharAllowed((prev) => !prev);
      }}/>
      <label htmlFor="numberInput">Charcters</label>
     </div>
     </div>

  )
}

export default App
