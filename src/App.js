import React from "react";
import BestSeller from "./components/BestSeller/BestSeller";
import Discount from "./components/Discount/Discount";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Logos from "./components/Logos/Logos";
import Pros from "./components/Pros/Pros";
import RecentNews from "./components/RecentNews/RecentNews";
import Trend from "./components/Trend/Trend";
import discount1 from "./images/discount1.png";
import discount2 from "./images/discount2.png";

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
            <BestSeller />
            <Discount
                discount={20}
                catchPhrase="happy hours"
                timeframe="22 Feb to 7 March"
                image={discount2}
                color="#3FB13DE5"
            />
            <RecentNews />
            <Logos />
            <Footer />
        </div>
    );
};

export default App;
