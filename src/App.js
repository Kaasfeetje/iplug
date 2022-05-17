import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pros from "./components/Pros/Pros";
import Trend from "./components/Trend/Trend";

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Trend />
            <Pros />
        </div>
    );
};

export default App;
