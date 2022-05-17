import React from "react";
import Discount from "./components/Discount/Discount";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pros from "./components/Pros/Pros";
import Trend from "./components/Trend/Trend";
import discount1 from "./images/discount1.png";

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Trend />
            <Pros />
            <Discount
                discount={20}
                catchPhrase="fine smile"
                timeframe="22 Feb to 7 March"
                image={discount1}
                color="#FF2222E5"
            />
        </div>
    );
};

export default App;
