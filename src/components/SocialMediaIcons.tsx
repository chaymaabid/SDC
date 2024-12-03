import React from 'react';
import './SocialMediaIcons.css';
import linkedin from '../assets/linkedin1.svg';
import instagramIcon from '../assets/instagramIcon.png';
import facebookIcon from '../assets/facebookIcon.png';

import instagramIcon2 from '../assets/logo-instagram.png';
import facebookIcon2 from '../assets/logo-facebook.png';
function SocialMediaIcons() {
    return (
        <div className="social-media-icons">

            <div className="toggle">
                <input type="checkbox" />
                <span className="button" />
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='label'>
                <img src={instagramIcon} alt="Facebook" />
                </a>
            </div>
            <div className="toggle">
                <input type="checkbox" />
                <span className="button" />
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='label'>
                <img src={facebookIcon2} alt="Facebook" />
                </a>
            </div>
           
        </div>
    );
}

export default SocialMediaIcons;
