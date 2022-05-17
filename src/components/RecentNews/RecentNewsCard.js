import React from "react";

const RecentNewsCard = ({ image, date, author, title, text }) => {
    return (
        <div className="recentnews-card">
            <img src={image} alt="News" />
            <div>
                <span className="date-author">
                    {date} by {author}
                </span>
                <h5 className="title">{title}</h5>

                <p className="text">{text}</p>
            </div>
        </div>
    );
};

export default RecentNewsCard;
