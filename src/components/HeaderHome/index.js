import React, { useState } from "react";
import Video from "../HeaderHome/media/Bgvideo2.mp4";

import {
  HeroContainer,
  HeroP,
  HeroContent,
  HeroBg,
  HeroPromoContainer,
  BgVideo,
  ContainerMain,
  Samosa,
} from "./HeroElements";

import styled from "styled-components"; 

const Gradients = styled.div`
  background-image: linear-gradient(
    180deg,
    rgb(0 0 0 / 78%) 20%,
    rgb(95 209 237 / 26%) 100%
  );
  width: 100%;
  height: 100%;
  transform: rotate(-180deg);
  object-fit: cover;
  position: absolute;
  z-index: 2;
`;
 
const HeaderHome = () => {
  return (
    <HeroContainer id="Home">
      <Gradients></Gradients>
      <HeroBg className="lg:mt-24 mt-0">
        <BgVideo autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <ContainerMain>
          <HeroP>BEST TRAILERS IN CANADA</HeroP>

          <Samosa>TRUCKS, DRY VANS, REEFERS AND MORE</Samosa>
        </ContainerMain>

        {/* <PCENTER class="text-gray-600 p-8">
          Work with a trusted global third-party logistics provider that has
          been empowering business growth for over 15 years. Our centralized
          marketplace connects you to the people, technology, data and capacity
        </PCENTER> */}

        {/* <button className="btn block lg:hidden">
          <span className="btn-text">Contact us</span>
        </button> */}
      </HeroContent>
      <HeroPromoContainer></HeroPromoContainer>
    </HeroContainer>
  );
};
export default HeaderHome;
