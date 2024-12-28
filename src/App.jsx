import { useState } from 'react'
import './App.css'
import Ask from './Components/Ask.jsx'
import Megh from './Components/Megh.jsx'

export default function App() {

  let [yes, setYes] = useState(false)
  const swapYes = () =>{
setYes(true)
  }
  return (
   <div className='relative cont w-full bg-black/75 min-h-screen flex justify-center items-center p-[8px]'>
   <img className='w-[100vw] h-[100vh] absolute opacity-[0.4]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcPTuPQ69E0OSJppR0np08-4m5dGkKfPKtyVYt8TBrI2qhPbCb8baDAGvDIbGXcIXUWE&usqp=CAU'/>
     {
       yes ? <Megh /> : < Ask swapYes = {swapYes}/>
     }
   </div>
  )
}
