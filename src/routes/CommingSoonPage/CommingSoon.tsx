import Navbar from "../../components/NavBar";
import bg_img from '../../assets/bg_section12.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function CommingSoon (){
    return(
        <>
        <Navbar/>
        <div className="firstSection">
            <img className="firstSectionImg" alt="firstSection_bg" src={bg_img}/>
            <div className="firstSectionText  backgroundSectionTransparent">
            <h3 style={{ marginTop:'15%',color:'#ffff'}}>Coming Soon...</h3>
                 

            </div>
        </div>
        
        </>
    )
}

export default CommingSoon;