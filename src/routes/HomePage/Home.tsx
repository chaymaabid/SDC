import Navbar from "../../components/NavBar";
import SocialMediaIcons from "../../components/SocialMediaIcons";

import logoHome from "../../assets/Main_Logo_BlackTxt (1).png";
import "./Home.css";
import AboutSection from './AboutSection';
import CountdownTimer from "./CountdownTimer";
import Logos from "./Logos";
import Memories from './Memories';
function Home (){
    return(
        <>
        
        <Navbar/>
        <div className="firstSection">
        <div className="gradientBackground"></div>
        <div className="firstSectionText">
        <div className="logoHome-container">
          <img src={logoHome} alt="SIGHT Day Congress Logo" className="logoHome" />
        </div>
         
                <CountdownTimer/>
            </div>
        </div>
        <Logos/>
        <AboutSection/>
        <Memories/>
        <SocialMediaIcons />
                
        </>
    )
}

export default Home;