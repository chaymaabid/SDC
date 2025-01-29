import Navbar from "../../components/NavBar";
import bg_img from '../../assets/bg_section12.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurSchedule from "./OurSchedule";
function Schedule (){
    return(
        <>
        <Navbar/>
        <div className="firstSection">
            <img className="firstSectionImg" alt="firstSection_bg" src={bg_img}/>
            <div className="firstSectionText ">
            
         <OurSchedule/>         

            </div>
        </div>
        
        </>
    )
}

export default Schedule;