import { useState } from 'react' // hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)  // hook created
    


    // let counter=15
   const addValue =()=>{
    //  console.log("value added", counter);
      counter =counter +1
      setCounter(counter)  // hook called
    }

  const removeValue =()=> {
      setCounter(counter-1)

    }

  return (
    <>
      <h1> React and chai</h1>
      <h2>Counter Value :5</h2>
        <button onClick={addValue} 
        >  Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>

      <p>Footer data : {counter} </p>
    </>
  )
}

export default App
