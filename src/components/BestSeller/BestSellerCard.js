import React from "react";

const BestSellerCard = ({ img, price, oldPrice, name }) => {
    return (
        <div className="bestseller-card">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                {oldPrice && <div className="sale">Sale!</div>}
            </div>
            <div className="info">
                <h5 className="name">{name}</h5>
                <div>
                    {oldPrice && <h5 className="oldPrice">${oldPrice}</h5>}
                    <h5 className="price">${price}</h5>
                </div>
            </div>
        </div>
    );
};

export default BestSellerCard;
