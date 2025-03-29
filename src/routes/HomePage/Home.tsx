import Navbar from "../../components/NavBar";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import bg_img from '../../assets/bg_section12.jpg'
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
            <img className="firstSectionImg" alt="firstSection_bg" src={bg_img}/>
            <div className="firstSectionText">
                <h1>SIGHT Day Congress</h1>
         
                <CountdownTimer/>
            </div>
        </div>
        <Logos/>
        <AboutSection/>
        <Memories/>
        <SocialMediaIcons />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.526201674761!2d10.613566074846371!3d35.860619720100416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a0c85142b6f%3A0xbd8001a3614f6d92!2sOrient%20Palace%20Sousse!5e0!3m2!1sfr!2stn!4v1743198871151!5m2!1sfr!2stn"
                className="google-map"
                 width="100%" 
                 height="450" 
                 style={{ border: 0 }} 
                 allowFullScreen loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade">

                 </iframe>
        </>
    )
}

export default Home;