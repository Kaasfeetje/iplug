import React from "react";
import RecentNewsCard from "./RecentNewsCard";
import recentnews1 from "../../images/recentnews1.png";
import recentnews2 from "../../images/recentnews2.png";
import recentnews3 from "../../images/recentnews3.png";
import "./RecentNews.css";

const RecentNews = () => {
    return (
        <section className="recentnews">
            <div className="head">
                <h2>Recent News</h2>
                <h5>The best news</h5>
            </div>
            <div className="recentnews-list">
                <RecentNewsCard
                    image={recentnews1}
                    date="February 27, 2022"
                    author="Happy"
                    title="How to choose perfect gadgets"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <RecentNewsCard
                    image={recentnews2}
                    date="February 27, 2022"
                    author="Happy"
                    title="How to choose perfect gadgets"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <RecentNewsCard
                    image={recentnews3}
                    date="February 27, 2022"
                    author="Happy"
                    title="How to choose perfect gadgets"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </div>
        </section>
    );
};

export default RecentNews;
