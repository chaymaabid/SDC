import { useState } from 'react'
import Navbar from "./components/NavBar";
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './routes/HomePage/Home';
import Speakers from './routes/SpeakersPage/Speakers';
import Workshops from './routes/WorkshopsPage/Workshops';
import Schedule from './routes/schedulePage/schedule';
import Challenges from './routes/ChallengesPage/Challenges';
import CommingSoon from './routes/CommingSoonPage/CommingSoon';
function App() {

  return (
    <div className='app'>
      <Routes> 
        <Route path="/" element={<Home/>}/>
         {/*
        <Route path="/Speakers" element={<Speakers/>}/>
        <Route path="/Workshops" element={<Workshops/>}/>
        <Route path="/Schedule" element={<Schedule/>}/>
        */}
        <Route path="/Speakers" element={<CommingSoon/>}/>
        <Route path="/Workshops" element={<CommingSoon/>}/>
        <Route path="/Schedule" element={<CommingSoon/>}/>
        <Route path="/Challenges" element={<Challenges/>}/>
      </Routes>
     
      
     
        
    </div>
  )
}

export default App
