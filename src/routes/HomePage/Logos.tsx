import React from "react";
import styled, { keyframes } from "styled-components";
import IEEELogo from "../../assets/logosSection/IEE.png";
import test from "../../assets/test.jpg";

const logos = [
    { img: IEEELogo, alt: "IEEE" },
    { img: IEEELogo, alt: "IEEE" },
    { img: IEEELogo, alt: "IEEE" },
    { img: IEEELogo, alt: "IEEE" },
    { img: IEEELogo, alt: "IEEE" },
  ];
const Logos: React.FC = () => {
  return (
    <Background>
      <LogosContainer>
      <LogosSlide>
        {logos.map((logo, index) => (
          <LogoImage key={`slide1-${index}`} src={logo.img} alt={logo.alt} />
        ))}
      </LogosSlide>

      <LogosSlide>
        {logos.map((logo, index) => (
          <LogoImage key={`slide2-${index}`} src={logo.img} alt={logo.alt} />
        ))}
      </LogosSlide>
    </LogosContainer>
    </Background>
  );
};

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Styled Components for the Logos
const LogosContainer = styled.div`
  overflow: hidden;
  padding: 60px 0;
  background: white;
  white-space: nowrap;
  position: relative;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
  }

  &:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
  }

  &:hover ${() => LogosSlide} {
    animation-play-state: paused;
  }
`;

const LogosSlide = styled.div`
  display: inline-block;
  animation: ${slide} 20s infinite linear;
`;

const LogoImage = styled.img`
  height: 70px;
  margin: 0 40px;
  width: 150px;
`;

const Background = styled.body`
  background: #f2f2f2;
`;


export default Logos;
