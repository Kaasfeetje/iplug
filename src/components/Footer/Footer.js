import React from "react";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="description">
                    <h5 className="logo">iplugessentials</h5>
                    <p>
                        There are many variations passages of lorem iplum
                        available ,but the majority have suffered alteration.in
                        some formed humour
                    </p>
                </div>
                <div className="links">
                    <ul>
                        <li className="head">Meet Iplugessentials</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Team</li>
                        <li>Contact Us</li>
                        <li>Our Ecosystem</li>
                    </ul>
                    <ul>
                        <li className="head">Quick Link</li>
                        <li>New</li>
                        <li>Article</li>
                        <li>Help Center</li>
                        <li>Careers</li>
                        <li>License</li>
                        <li>Freebies</li>
                    </ul>
                    <ul>
                        <li className="head">Category Link</li>
                        <li>Graphics</li>
                        <li>Video</li>
                        <li>Presentation</li>
                        <li>Photos</li>
                        <li>Font</li>
                        <li>Web Template</li>
                    </ul>
                </div>
                <div className="subscribe">
                    <div className="follow">
                        <h5>Follow Us</h5>
                        <TwitterIcon /> <InstagramIcon /> <FacebookIcon />
                        <LinkedInIcon />
                    </div>
                    <h5>Subscribe</h5>
                    <p>Send me tips, trends, freebies, updates and offers.</p>
                    <form>
                        <input type="text" placeholder="Email Address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="tos">
                <span>
                    2022 Electronic Shop - Iplugessentials Figma Theme. All
                    rights reserved. Coded by{" "}
                    <a
                        href="https://github.com/Kaasfeetje"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Kaasfeetje
                    </a>
                </span>
                <span>Terms And Conditions | Privacy</span>
            </div>
        </footer>
    );
};

export default Footer;
