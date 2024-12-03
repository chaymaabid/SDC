import { useState } from 'react'
import Navbar from "./components/NavBar";
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './routes/HomePage/Home';
import Speakers from './routes/SpeakersPage/Speakers';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/Speakers" element={<Speakers/>}/>

      </Routes>
     
      
     
        
    </div>
  )
}

export default App
