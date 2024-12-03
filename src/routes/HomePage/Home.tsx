import Navbar from "../../components/NavBar";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import bg_img from '../../assets/bg_section12.jpg'
import "./Home.css";
import AboutSection from './AboutSection';
function Home (){
    return(
        <>
        <Navbar/>
        <div className="firstSection">
            <img className="firstSectionImg" alt="firstSection_bg" src={bg_img}/>
            <div className="firstSectionText">
                <h1>SIGHT Day Congress</h1>

            </div>
        </div>
        <AboutSection/>
        <SocialMediaIcons />
        </>
    )
}

export default Home;