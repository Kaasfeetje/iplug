import React from "react";
import applelogo from "../../images/Apple Icon.png";
import fastspringlogo from "../../images/FastSpring Logo.png";
import jumiagrouplogo from "../../images/Jumia Group Logo.png";
import sweetgreenlogo from "../../images/Sweetgreen Logo.png";
import goldencreditunion from "../../images/Golden 1 Credit Union Logo.png";
import "./Logos.css";

const Logos = () => {
    return (
        <section className="logos">
            <img src={applelogo} alt="apple" />
            <img src={jumiagrouplogo} alt="jumia group" />
            <img src={goldencreditunion} alt="golden 1 credit union" />
            <img src={fastspringlogo} alt="fastspring" />
            <img src={sweetgreenlogo} alt="sweetgreen" />
        </section>
    );
};

export default Logos;
