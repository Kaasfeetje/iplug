import React from "react";
// import "./Trend.css";

const TrendCard = ({ img, texts, className }) => {
    return (
        <div className={`trendcard ${className}`}>
            <h4>{texts[0]}</h4>
            <h3>{texts[1]}</h3>
            <h2>{texts[2]}</h2>
            <button>Browse</button>
            <img src={img} alt={texts[3]} />
        </div>
    );
};

export default TrendCard;
