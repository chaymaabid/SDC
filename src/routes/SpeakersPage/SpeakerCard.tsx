import React from "react";
import './SpeakerCard.css';

// Define the type for the props
interface SpeakerProps {
  name: string;
  linkedinLink: string;
  image: string;
  desc:string;
}

const SpeakerCard: React.FC<SpeakerProps> = ({ name, linkedinLink, image, desc }) => {
  return (
    <div className="speakercard">
      <button className="mail">
        {/* SVG for mail icon */}
      </button>
      <div className="profile-pic" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="bottom">
        <div className="content">
          <span className="name">{name}</span>
          <span className="speakerDesc">{desc}</span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            {/* SVG for LinkedIn icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="0000" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.84-.6 1.88-1.5 3-1.5 2.21 0 4 1.79 4 4v6z" />
            </svg>
          </a>
          </div>
          <div className="website">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
