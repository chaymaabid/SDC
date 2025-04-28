import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './routes/HomePage/Home';
import Challenges from './routes/ChallengesPage/Challenges';

import VenuePage from './routes/VenuePage/VenuePage';
import Workshops from './routes/WorkshopsPage/Workshops';
import Schedule from './routes/schedulePage/schedule';
import Speakers from './routes/SpeakersPage/Speakers';
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
        <Route path="/Speakers" element={<Speakers/>}/>
        <Route path="/Workshops" element={<Workshops/>}/>
        <Route path="/Schedule" element={<Schedule/>}/>
        <Route path="/Challenges" element={<Challenges/>}/>
        <Route path="/Venue" element={<VenuePage/>}/>
        
      </Routes>
     
      
     
        
    </div>
  )
}

export default App
