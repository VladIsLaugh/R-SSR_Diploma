import React, { useState, useEffect } from "react";
import Wrapper from "../components/shared/Wrapper/Wrapper";
import HeroSection from "../components/home/Hero/HeroSection";
import Cards from "../components/home/Cards/Cards";
// import Footer from "../components/home/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Wrapper>
        <HeroSection />
        <Cards />
         {/* <Footer /> */}
      </Wrapper>
    </div>
  );
}
