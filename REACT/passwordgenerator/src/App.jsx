import { useState,useCallback } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str=str+"0123456789"
    }
    if (charAllowed) {
      str=str+"!@#$%^&*{}~_+=[]"
    }
    for (let index = 1; i<= array.length; i++){
      let char = Math.floor((Math.random() * str.length + 1))
      pas=str.charAt(char)

    }
    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
  
  return (
  <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-28 my-28 text-orange-500 bg-gray-600">
         <h1 className="text-white  text-center my-3">
      password generator
    </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
      
    </div>
  </div>
</>
      
  )
}

export default App