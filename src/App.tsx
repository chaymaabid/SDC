import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './routes/HomePage/Home';
import Challenges from './routes/ChallengesPage/Challenges';
import CommingSoon from './routes/CommingSoonPage/CommingSoon';
import VenuePage from './routes/VenuePage/VenuePage';
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
        <Route path="/Venue" element={<VenuePage/>}/>
        
      </Routes>
     
      
     
        
    </div>
  )
}

export default App
