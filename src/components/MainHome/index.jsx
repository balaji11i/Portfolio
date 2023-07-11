import React from "react";
import Header from "./Header";
import AboutThree from "./AboutThree";
import ServicesTwo from "./ServicesTwo";
import BrandArea from "./BrandArea";
import HeroAreaSix from "./HeroAreaSix";
import TestimonialThree from "./TestimonialThree";
import FooterFour from "./FooterFour";


const index = () =>{
    return(
        <>
        <Header />
        <HeroAreaSix />
        <AboutThree />
        <ServicesTwo /> 
        {/* <AboutTwo /> */}
        <BrandArea hideTopBar={true} brand="-2" />
        <TestimonialThree /><br/>
        <FooterFour />
        </>
    );
};

export default index;