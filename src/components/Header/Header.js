import React from "react";
import MailIcon from "../Icons/MailIcon";
import MenuIcon from "../Icons/MenuIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import SearchIcon from "../Icons/SearchIcon";
import ShoppingCartIcon from "../Icons/ShoppingCartIcon";
import UserIcon from "../Icons/UserIcon";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className="logo">IPLUGESSENTIALS</li>
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item">Shop</li>
                    <li className="nav-item">Blog</li>
                    <li className="nav-info">
                        <div>
                            <MailIcon />
                            <span>info@iplug.com</span>
                        </div>
                        <div>
                            <PhoneIcon />
                            <span>+234 8066 44 1664</span>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="search">
                <div className="shop-by-category">
                    <MenuIcon />
                    Shop By Category
                </div>
                <form>
                    <input type="text" placeholder="Type Here..." />
                    <button type="submit">
                        <span>Search</span>
                        <SearchIcon />
                    </button>
                </form>
                <div className="personal">
                    <div>
                        <UserIcon />
                        <span>Login / sign up</span>
                    </div>
                    <ShoppingCartIcon />
                </div>
            </div>
        </header>
    );
};

export default Header;
