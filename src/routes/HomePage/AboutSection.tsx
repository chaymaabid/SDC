import Navbar from "../../components/NavBar";
import bg_img from '../../assets/bg_section12.jpg'
import "./AboutSection.css";
//import logo from "../../assets/Main_Logo_BlackTxt (1).png";
import logo from "../../assets/test.jpg";
import sdcLogo from "../../assets/Main_Logo_BlackTxt (1).png";
import logo_sight from "../../assets/logo-ieee-sight.png";
import isimmSB from "../../assets/isimmSB.jpg";
function AboutSection (){

    const aboutData = [
        {
            id: 1,
            title: "About IEEE Sight Day Congress",
            description: "In 2011, the SIGHT program was conceptualized and inaugurated in Kerala, India. Today, we have many reasons to celebrate the outstanding work accomplished by SIGHT volunteers. IEEE SIGHT Day's purpose is to foster a spirit of community for the global SIGHT network, increase awareness of IEEE SIGHT within IEEE, promote the opportunity to support SIGHT financially, and celebrate the impact SIGHT volunteers and groups are making.",
            imgSrc: sdcLogo,
            imgTitle:"",
            urlbutton:''
        },
        {
            id: 2,
            title: "About SIGHT",
            description: "The IEEE Special Interest Group on Humanitarian Technology (SIGHT) is an Institute of Electrical and Electronics Engineers (IEEE) program, instituted by the IEEE Humanitarian Activities Committee (HAC). IEEE SIGHT is a global network of groups consisting of IEEE members and volunteers who identify and address local problems by applying their technical skills and partnering with their local communities.",
            imgSrc: logo_sight,
            urlbutton:'https://sight.ieee.org/'
        },
        {
            id: 3,
            title: "IEEE ISIMM Student Branch",
            description: "The ISIMM Student Branch, founded in 2019, is a vibrant and dynamic community dedicated to fostering innovation and technical excellence. With over ?? active members, it stands as a leading hub for aspiring professionals at ISIMM. The branch hosts 5 Technical Chapters, including CS, CIS, RAS, IAS/PES, EMBS, and 2 Affinity Groups: WIE, SIGHT. Through the unwavering dedication and collaboration of its members, the branch has proudly earned recognition with prestigious IEEE Awards, showcasing its commitment to advancing technology and community impact.",
            imgSrc: isimmSB,
            imgTitle:"ISIMM Student Branch",
            urlbutton:''
        }
    ];

    return(
        <>
        <section className="aboutUs" id="aboutUs">
            <h1 className="heading"><span>About Us</span></h1>
            <div className="container-fluid containerAbout ">
            {aboutData.map((item) => (
                        <div key={item.id} className="rowAbouUs container">
                            <div className="image-container"> 
                                <img src={item.imgSrc} alt={item.title} />
                                {item.imgTitle && <h3>{item.imgTitle}</h3>}
                            </div>
                            <div className="content-aboutUs">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href={item.urlbutton} className="btnAboutUs">Learn More</a>
                            </div>
                        </div>
                    ))}
            </div>
        
        </section>
        </>
    )
}

export default AboutSection;