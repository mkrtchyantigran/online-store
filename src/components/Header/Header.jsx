import "./header.scss";
import phone from "../../assets/icons/phone.svg";
import search from "../../assets/icons/search.svg";
import navIcon from "../../assets/icons/nav-icon.svg";
import loginIcon from "../../assets/icons/login-icon.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import shopIcon from "../../assets/icons/shop-icon.svg";

import { Link, NavLink } from "react-router-dom";


export default function Header() {
    return (
        <header className="header">

            <div className="main-container">

                <div className="_promotion-bar">
                    <span>THIS WEEKEND SALE 20% OFF ON ALL PRODUCTS</span>
                </div>

                <div className="second-bar">

                    <div className="container">
                        <div className="address-box">
                            <p>60 Fremont Ave. Hamden, CT 06514</p>
                        </div>

                        <div className="search-box">

                            <select className="search-category">
                                <option value="all">All Categories</option>
                            </select>

                            <div className="search-container">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                />
                                <span className="search-icon">
                                    <img src={search} alt="search icon" />
                                </span>
                            </div>

                        </div>

                        <div className="contact-box">
                            <img src={phone} alt="phone icon" />
                            <p>(928) 630-9272</p>
                        </div>

                    </div>
                </div>

                <nav>

                    <Link to="/">
                        <img className="nav-logo" src={navIcon} alt="navigation icon" />
                    </Link>

                    <ul className="nav-links">
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us">
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>

                    <div className="right_side">
                        <ul>
                            <li>
                                <Link to="/login">
                                    <img src={loginIcon} alt="login icon" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/wishlist">
                                    <img src={heartIcon} alt="heart icon" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <img src={shopIcon} alt="shop icon" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                </nav>

            </div>

        </header>
    )
}