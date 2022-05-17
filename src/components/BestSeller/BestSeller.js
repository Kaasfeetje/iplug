import React from "react";
import BestSellerCard from "./BestSellerCard";
import beats from "../../images/beats.png";
import iwatchseries7 from "../../images/Iwatchseries7.png";
import iwatchseries6 from "../../images/iwatchseries6.png";
import iphone12promax from "../../images/Iphone12promax.png";
import gorewear from "../../images/gorewear.png";
import appleairpodsmax from "../../images/appleairpodsmax.png";
import dellprecision from "../../images/dellprecision.png";
import airpodspro from "../../images/airpodspro.png";
import "./BestSeller.css";

const BestSeller = () => {
    return (
        <section className="bestseller">
            <div className="head">
                <h2>Best Seller Products</h2>
                <h5>There are many variations</h5>
            </div>
            <div className="bestseller-list">
                <BestSellerCard img={beats} name="Beats" price={995} />
                <BestSellerCard
                    img={iwatchseries7}
                    name="Iwatch Serie 7"
                    price={700}
                />
                <BestSellerCard
                    img={iphone12promax}
                    name="Iphone 12 Pro Max 256gb"
                    price={1250}
                />
                <BestSellerCard
                    img={gorewear}
                    name="Gore Wear"
                    price={250}
                    oldPrice={499}
                />
                <BestSellerCard
                    img={iwatchseries6}
                    name="Iwatch Series 6"
                    price={600}
                />
                <BestSellerCard
                    img={appleairpodsmax}
                    name="Apple Airpods Max"
                    price={700}
                    oldPrice={800}
                />
                <BestSellerCard
                    img={dellprecision}
                    name="Dell Precision 5520"
                    price={1000}
                />
                <BestSellerCard
                    img={airpodspro}
                    name="Air Pods Pro"
                    price={600}
                />
            </div>
        </section>
    );
};

export default BestSeller;
