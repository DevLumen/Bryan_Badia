import React from "react";
import '../styles/main.css';
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";


export default function Main() {

    return (
        <div className="main_container">
            <div id="home" className="block_one">
                <Home />
            </div>
            <div id="portfolio" className="block_three">
                <Portfolio />
            </div>
            <div id="aboutus" className="block_two">
                <AboutUs />
            </div>
            <div id="faq" className="block_four">
                <Faq />
            </div>
            <div id="contact" className="footer_block">
                <Contact />
            </div>
        </div>
    )
}