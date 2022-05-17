import React from "react";
import MoneyGuaranteeIcon from "../Icons/MoneyGuaranteeIcon";
import SecurePaymentIcon from "../Icons/SecurePaymentIcon";
import ShippingIcon from "../Icons/ShippingIcon";
import TechSupportIcon from "../Icons/TechSupportIcon";
import "./Pros.css";

const Pros = () => {
    return (
        <section className="pros">
            <div>
                <ShippingIcon />
                <div>
                    <h5>Free Shipping</h5>
                    <p>Free Shipping On All Orders</p>
                </div>
            </div>
            <div>
                <MoneyGuaranteeIcon />
                <div>
                    <h5>Money Guarantee</h5>
                    <p>30 Day Money Back</p>
                </div>
            </div>
            <div>
                <TechSupportIcon />
                <div>
                    <h5>Online Support 24/7</h5>
                    <p>Technical Support 24/7</p>
                </div>
            </div>
            <div>
                <SecurePaymentIcon />
                <div>
                    <h5>Secure Payment</h5>
                    <p>All Cards Accepted</p>
                </div>
            </div>
        </section>
    );
};

export default Pros;
