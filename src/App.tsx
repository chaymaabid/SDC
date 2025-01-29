import { useState } from 'react'
import Navbar from "./components/NavBar";
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './routes/HomePage/Home';
import Speakers from './routes/SpeakersPage/Speakers';
import Speakers2 from './routes/Speakers2/Speakers2';
import Schedule from './routes/schedulePage/schedule';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/Speakers" element={<Speakers/>}/>
        <Route path="/Workshops" element={<Speakers2/>}/>
        <Route path="/Schedule" element={<Schedule/>}/>
      </Routes>
     
      
     
        
    </div>
  )
}

export default App
