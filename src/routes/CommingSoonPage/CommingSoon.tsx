import Navbar from "../../components/NavBar";
import bg_img from '../../assets/bg_section12.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function CommingSoon (){
    return(
        <>
        <Navbar/>
        <div className="firstSection">
            <img className="firstSectionImg" alt="firstSection_bg" src={bg_img}/>
            <div className="firstSectionText backgroundSection">
            <h3 style={{ fontSize:'150px', marginTop:'15%',color:'#ffff'}}>Comming Soon...</h3>
                 

            </div>
        </div>
        
        </>
    )
}

export default CommingSoon;