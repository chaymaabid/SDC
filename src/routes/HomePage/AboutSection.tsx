import "./AboutSection.css";
//import logo from "../../assets/Main_Logo_BlackTxt (1).png";
import sdcLogo from "../../assets/Main_Logo_BlackTxt (1).png";
import logo_sightIsimm from "../../assets/logosSection/sight.png";
import isimmSB from "../../assets/logosSection/ieee_isimm.png";
import IeeeTunisiaSection from "../../assets/IEEETunisiaSectionLogo.png";
function AboutSection (){

    const aboutData = [
        {
            id: 1,
            title: "IEEE Sight Day Congress",
            description: "The SDC 3.0 SIGHT Group Annual Congress, hosted by the IEEE ISIMM SIGHT Group, marked a significant milestone as they were announced the winner of the Non-Technical Challenge for the previous edition. The event, themed 'Marine Life', brought together SIGHT groups from across the Tunisia Section to share knowledge, exchange experiences, and showcase their impactful projects. The congress featured a series of workshops aimed at enhancing members' skills and fostering collaboration. The event culminated in a friendly competition to determine the best SIGHT group in Tunisia Section , with the winning group earning the honor of hosting the next edition of the congress.",
            imgSrc: sdcLogo,
            imgTitle:"",
            urlbutton:''
        },
        {
            id: 2,
            title: "IEEE Tunisia Section",
            description: "Founded in 2008, the IEEE Tunisia Section is dedicated to spreading IEEE initiatives throughout Tunisia. This is achieved through educational and technical programs, networking opportunities, and the advancement of technology and its applications to address humanitarian challenges. The section actively supports chapters, special interest groups, student activities, and student awards. IEEE has firmly established its presence in the Tunisian engineering community, with over 43 Student Branches located across various engineering schools, faculties, and universities.",
            imgSrc: IeeeTunisiaSection,
            urlbutton:'https://ieee.tn/'
        },
        {
            id: 3,
            title: "IEEE ISIMM Student Branch",
            description: "Founded in 2019, IEEE ISIMM SB is a dynamic student branch of the Institute of Electrical and Electronics Engineers (IEEE), based in the Tunisia Section, Region 8. As the largest IEEE student branch in Monastir, we proudly host 6 technical chapters: Computer Society (CS), Computational Intelligence Society (CIS), Robotics and Automation Society (RAS), Industrial Applications Society (IAS), Power and Energy Society (PES), and Engineering in Medicine and Biology Society (EMBS). Additionally, we have an Affinity Group for Women in Engineering (WIE) and the Special Interest Group on Humanitarian Technology (SIGHT). Our mission is to provide a platform for students to develop and enhance their technical skills and knowledge in instrumentation and measurement. We offer a variety of activities, including workshops, seminars, technical talks, and industrial visits, to give students valuable hands-on experience and practical exposure in these fields.",
            imgSrc: isimmSB,
            urlbutton:'https://www.facebook.com/IEEEISIMMSB'
        },
        {
            id: 4,
            title: "SIGHT (Special Interest Group on Humanitarian Technology)",
            description: "Founded in 2023, SIGHT at IEEE ISIMM SB focuses on using technology to tackle humanitarian challenges and improve lives in underserved communities. The group's mission is to promote technology for social good, empowering members to create a positive impact. Through engaging projects, members develop project management skills and contribute to meaningful community service initiatives.",
            imgSrc: logo_sightIsimm,
            urlbutton:'https://www.facebook.com/profile.php?id=100091680498696'
        },
        
        
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