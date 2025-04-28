import Navbar from "../../components/NavBar"

import "bootstrap/dist/css/bootstrap.min.css"
import "../SpeakersPage/Speakers.css"
import "../HomePage/AboutSection.css"
import WorkshopCart from "./WorkshopCart"
import "./Workshops.css" 
import amiraOurfelli from '../../assets/workshops/amiraOurfelli.png';
import ramlaBouhlel from '../../assets/workshops/ramlaBouhlel.png';
import wajihLetaief from '../../assets/workshops/wajihLetaief.png';
import mohamedAliKrichen from '../../assets/workshops/mohamedAliKrichen.png';

const workshopsData = [
  {
    id: 1,
    title: "Unlock Your Success",
    address: "Wajih Letaief",
    description:
      "Mastering Smart, Smarter, and Smartest Goals for Study and Business Excellence! This dynamic session will equip you with practical strategies to set powerful goals and drive success in both academics and business.",
    imageUrl: wajihLetaief,
    imageAlt: "Wajih Letaief",
    formLink:'#'
  },
  {
    id: 2,
    title: "Visionaries United",
    address: "Amira Ouertani",
    description:
    "Unlocking the Power of SIGHT and the HAC Family Advantage, Join Amira Ouertani, an expert in robotics, AI, and innovation, as she shares strategies to leverage IEEE programs for professional growth and impactful community service.",
    imageUrl: amiraOurfelli,
    imageAlt: "Amira Ouertani",
    formLink:'#'
  },
  {
    id: 3,
    title: " Eyes Under Waves ",
    address: "Ramla Bouhlel",
    description:
      "Exploring Marine Biodiversity with BRUVS, Discover how technology helps protect marine life with Ramla Ben Ali, a fisheries and environmental engineer passionate about ocean conservation.",
    imageUrl: ramlaBouhlel,
    imageAlt: "ramlaBouhlel",
    formLink:'#'
  },
  {
    id: 4,
    title: "IEEE Event and Project Management",
    address: "Mohamed Ali Krichen",
    description:
      "earn the secrets of successful event and project coordination with Mohamed Ali Kacem, an experienced IEEE leader and QA automation engineer.",
    imageUrl: mohamedAliKrichen,
    imageAlt: "mohamedAliKrichen",
    formLink:'#'
  },
]

function Workshops() {
  return (
    <>
      <Navbar />
      <div className="firstSection">
        <div className="gradientBackground"></div>
        <div className="firstSectionText">
          <div className="workshops-container">
            {workshopsData.map((workshop) => (
              <div key={workshop.id} className="workshop-item">
                <WorkshopCart
                formLink={workshop.formLink}
                  title={workshop.title}
                  address={workshop.address}
                  description={workshop.description}
                  imageUrl={workshop.imageUrl}
                  imageAlt={workshop.imageAlt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Workshops
