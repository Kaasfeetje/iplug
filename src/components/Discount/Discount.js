import React from "react";
import ArrowUpIcon from "../Icons/ArrowUpIcon";
import "./Discount.css";

const Discount = ({ discount, catchPhrase, image, timeframe, color }) => {
    return (
        <section className="discount" style={{ backgroundColor: color }}>
            <div className="discount-info">
                <h3>{discount} % OFF</h3>
                <h2 className="catchphrase">{catchPhrase}</h2>
                <span>{timeframe}</span>
                <img src={image} alt={catchPhrase} />
            </div>
            <div className="discount-sale">
                <h3>Beats Solo Air</h3>
                <h2>Summer Sale</h2>
                <p>
                    Company that's grown from 270 to 480 employees in the last
                    12 months
                </p>
                <div className="buttons">
                    <button className="shop-btn" style={{ color }}>
                        Shop
                    </button>
                    <button>
                        <ArrowUpIcon />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Discount;
