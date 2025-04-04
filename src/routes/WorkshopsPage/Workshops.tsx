import Navbar from "../../components/NavBar";
import bg_img from '../../assets/bg_section12.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import'../SpeakersPage/Speakers.css';
import '../HomePage/AboutSection.css'

function Workshops (){
    return(
        <>
        <Navbar/>
        <div className="firstSection supp">
            <img className="firstSectionImg supp" alt="firstSection_bg" src={bg_img}/>
            <div className="firstSectionText backgroundSection supp">
                    

            </div>
            
        </div>
        
        </>
    )
}

export default Workshops;