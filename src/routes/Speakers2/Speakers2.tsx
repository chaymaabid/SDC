import Navbar from "../../components/NavBar";
import bg_img from '../../assets/bg_section12.jpg';
import SpeakerCard from "../SpeakersPage/SpeakerCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import'../SpeakersPage/Speakers.css';
import '../HomePage/AboutSection.css'
const speakersData = [
    { name: "Khaled Letaief",desc:"Division Director III, IEEE Board of Directors", linkedinLink: "https://www.linkedin.com/in/abid-chayma/", image: "../../src/assets/speakersimg/speaker1.jpg" },
    { name: "Speaker 2",desc:"Division Director III, IEEE Board of Directors", linkedinLink: "https://www.linkedin.com/in/abid-chayma/", image: "../../src/assets/speakersimg/speaker1.jpg" },
    { name: "Speaker 3", desc:"Division Director III, IEEE Board of Directors",linkedinLink: "https://www.linkedin.com/in/abid-chayma/", image: "../../src/assets/speakersimg/speaker1.jpg" },
    { name: "Speaker 4", desc:"Division Director III, IEEE Board of Directors",linkedinLink: "https://www.linkedin.com/in/abid-chayma/", image: "../../src/assets/speakersimg/speaker1.jpg" },
    // Add more speakers as needed
  ];
function Speakers2 (){
    return(
        <>
        <Navbar/>
        <div className="firstSection supp">
            <img className="firstSectionImg supp" alt="firstSection_bg" src={bg_img}/>
            <div className="firstSectionText backgroundSection supp">
                    

            </div>
            
        </div>
        <section className="aboutUs" id="aboutUs">
            <h1 className="heading"><span>About Us</span></h1>
        <div className="container mt-3">
                <div className="row">
                {speakersData.map((speaker, index) => (
                <div className="col-md-3 mb-3" key={index}>
                <SpeakerCard 
                    name={speaker.name} 
                    linkedinLink={speaker.linkedinLink} 
                    image={speaker.image} 
                    desc={speaker.desc}
                />
                </div>
                ))}
                </div>
            </div>    
            </section>
        </>
    )
}

export default Speakers2;