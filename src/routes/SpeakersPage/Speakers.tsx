import Navbar from "../../components/NavBar";

import SpeakerCard from "./SpeakerCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import'./Speakers.css';
import speaker from '../../src/assets/speakersimg/speaker1.jpg';
const speakersData = [
    { name: "Khaled Letaief",desc:"Division Director III, IEEE Board of Directors", linkedinLink: "https://www.linkedin.com/in/abid-chayma/", image: {speaker} },
    { name: "Speaker 2",desc:"Division Director III, IEEE Board of Directors", linkedinLink: "https://www.linkedin.com/in/abid-chayma/", image: {speaker} },
    { name: "Speaker 3", desc:"Division Director III, IEEE Board of Directors",linkedinLink: "https://www.linkedin.com/in/abid-chayma/", image: {speaker} },

    
  ];
function Speakers (){
    return(
        <>
        <Navbar/>
        <div className="firstSection">
        <div className="gradientBackground"></div>
            <div className="firstSectionText backgroundSectionTransparent">
            
            <div className="container mt-4">
                <div className="row">
                {speakersData.map((speaker, index) => (
                <div className="col-md-4 mb-4" key={index}>
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

            </div>
        </div>
        
        </>
    )
}

export default Speakers;