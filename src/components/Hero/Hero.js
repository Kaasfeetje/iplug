import React from "react";
import "./Hero.css";
import hero from "../../images/hero.png";

const Hero = () => {
    return (
        <main className="hero">
            <h3>Beats Solo</h3>
            <h2>Wireless</h2>
            <h1>Headphone</h1>
            <div>
                <button>Shop By Category</button>
                <div>
                    <h5>Description</h5>
                    <p>
                        Description There are many variations passages of lorem
                        iplum available ,but the majority have suffered
                        alteration.
                    </p>
                </div>
            </div>
            <img src={hero} alt="Headphone hero" />
        </main>
    );
};

export default Hero;
