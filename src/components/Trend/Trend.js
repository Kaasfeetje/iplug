import React from "react";
import "./Trend.css";
import TrendCard from "./TrendCard";
import earphone from "../../images/earphone.png";
import iwatch from "../../images/iwatch.png";
import laptop from "../../images/laptop.png";
import console from "../../images/console.png";
import oculus from "../../images/oculus.png";
import speaker from "../../images/speaker.png";

const Trend = () => {
    return (
        <section className="trend">
            <TrendCard
                className="trend-earphone"
                texts={["Enjoy", "With", "Earphone"]}
                img={earphone}
            />
            <TrendCard
                className="trend-iwatch"
                texts={["New", "Wear", "Iwatch"]}
                img={iwatch}
            />
            <TrendCard
                className="trend-laptop"
                texts={["Trend", "Devices", "Laptop"]}
                img={laptop}
            />
            <TrendCard
                className="trend-console"
                texts={["Best", "Gaming", "Console"]}
                img={console}
            />
            <TrendCard
                className="trend-oculus"
                texts={["Play", "Game", "Oculus"]}
                img={oculus}
            />
            <TrendCard
                className="trend-speaker"
                texts={["New", "JBL", "Speaker"]}
                img={speaker}
            />
        </section>
    );
};

export default Trend;
