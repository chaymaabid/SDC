import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/NavBar";

import './VenuePage.css'; 

function VenuePage() {
    return (
        <>
            <Navbar/>
            <div className="firstSection">
            <div className="gradientBackground"></div>
                <div className="firstSectionText">
                    <div className="container venue-container">
                        <div className="row">
                            {/* Left side - Map iframe */}
                            <div className="col-md-6 map-container">
                                <div className="map-wrapper">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.526201674761!2d10.613566074846371!3d35.860619720100416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a0c85142b6f%3A0xbd8001a3614f6d92!2sOrient%20Palace%20Sousse!5e0!3m2!1sfr!2stn!4v1743198871151!5m2!1sfr!2stn"
                                        width="100%" 
                                        height="400" 
                                        style={{border: 0}} 
                                        allowFullScreen loading="lazy" 
                                        title="Venue Location"
                                        className='mapframe'
                                    ></iframe>
                                </div>
                            </div>
                            
                            {/* Right side - Location info */}
                            <div className="col-md-6 venue-info">
                                <h2 className="venue-title">Sight Day Congress (SDC 3.0) </h2>
                                
                                <div className="venue-description">
                                    <p>The Sight Day Congress (SDC 3.0) is the annual congress of all SIGHT groups in the Tunisia section, and this edition is proudly hosted by SIGHT Group ISIMM SB, IEEE ISIMM SB, and IEEE SIGHT Group Tunisia Section. This year's theme, "Marine Life", brings an exciting exploration of the latest technologies, innovations, and research focused on preserving, understanding, and advancing marine ecosystems.</p>
                                </div>
                                <div className="venue-details">
                                    <p><i className="bi bi-geo-alt-fill"></i> 📍 Venue: Orient Palace, Sousse</p>
                                    <p><i className="bi bi-telephone-fill"></i>Event Dates: April 19-20, 2025</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default VenuePage;