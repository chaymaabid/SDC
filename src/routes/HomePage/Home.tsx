import Navbar from "../../components/NavBar";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import bg_img from '../../assets/bg_section12.jpg'
import "./Home.css";
import AboutSection from './AboutSection';
import CountdownTimer from "./CountdownTimer";
import Logos from "./Logos";
function Home (){
    return(
        <>
        
        <Navbar/>
        <div className="firstSection">
            <img className="firstSectionImg" alt="firstSection_bg" src={bg_img}/>
            <div className="firstSectionText">
                <h1>SIGHT Day Congress</h1>
         
                <CountdownTimer/>
            </div>
        </div>
        <Logos/>
        <AboutSection/>
        <SocialMediaIcons />
        </>
    )
}

export default Home;