import Navbar from "../../components/NavBar";
import bg_img from '../../assets/bg_section12.jpg';
import './Challenges.css';
import technicalChallenge from '../../assets/challenges/technicalChallenge.jpg';
import nontechnicalChallenge from '../../assets/challenges//nonTechnical.jpg';
function Challenges (){
    return (
        <>
            <Navbar />
            <div className="firstSection">
                <img className="firstSectionImg" alt="firstSection_bg" src={bg_img} />
                <div className="firstSectionText backgroundSection">
                    <div className="contentContainer">
                        {/* Left Side (50%) */}
                        <div className="contentHalf leftContent">
                            <a href="https://drive.google.com/file/d/11ihXiXcsBRH11BMrshju8aq7V1f-VgBo/view?fbclid=IwY2xjawJUHSlleHRuA2FlbQIxMAABHdeqht_2AyEcR8fbACmZd6tFZ6Px9TvDk7uwVvf3CLg--7jLUsVPEqaGrg_aem_i3RZuiqdndRcS4sagpKw-g" target="_blank" rel="noopener noreferrer">
                            <img 
                                className="contentImage" 
                                src={technicalChallenge}
                                alt="Left content" 
                            />
                            </a>
                            <h2 className="contentTitle">Technical Challenge</h2>
                            <p className="contentParagraph">
                            Illegal fishing is one of the biggest threats to marine ecosystems in Tunisia. It destroys fish populations, harms protected marine habitats, and affects the livelihoods of local fishermen. This challenge aims to develop a technical solution to detect, monitor, or prevent illegal fishing using innovative technology while ensuring sustainability and alignment with the United Nations Sustainable Development Goals (SDGs).
                            </p>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLScz9mJ5Ur1dOiQR-MAAkVl5MWeKUe8c10HVt7L_AdwCWwEJuw/viewform' className="btnAboutUs">Submission</a>
                        </div>
                        
                       
                        <div className="contentHalf rightContent">
                            <a href="https://drive.google.com/file/d/1pgUmXbAdm0eIA4z1HCDQsqGDiJgDRRyJ/view?fbclid=IwY2xjawJUFVNleHRuA2FlbQIxMAABHSuerYB1xFyNag-8BpiQRAIQZ0kk_Ar-YmIaKZUEgUplg8pM374B0Yp6Ww_aem_cjGEWZTS-vHvPHiB8kdk9g" target="_blank" rel="noopener noreferrer">
                            <img 
                                className="contentImage" 
                                src={nontechnicalChallenge}
                                alt="Right content" 
                            />
                            </a>
                            <h2 className="contentTitle">Non Technical Challenge</h2>
                            <p className="contentParagraph">
                            The SDC 3.0 Non-Tech Challenge is an opportunity for IEEE SIGHT Student Branch Groups to present their activities, projects, and SDC 4.0 proposal to host the next edition of this event. This challenge allows SBs and SIGHT Groups to highlight their projects, innovation, and dedication to using technology for a better future.
                            </p>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLScRDJ5j3ECbPR34oHwcji443Ct3f-REYiMR48pdGp0wwCvXlg/viewform' className="btnAboutUs">Submission</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Challenges;
