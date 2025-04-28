import Navbar from "../../components/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';
import OurSchedule from "./OurSchedule";
function Schedule (){
    return(
        <>
        <Navbar/>
        <div className="firstSection">
        <div className="gradientBackground"></div>
            <div className="firstSectionText ">
            
         <OurSchedule/>         

            </div>
        </div>
        
        </>
    )
}

export default Schedule;