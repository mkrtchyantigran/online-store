import "./header.scss";
import phone from "../../assets/icons/phone.svg";
import search from "../../assets/icons/search.svg";
import navIcon from "../../assets/icons/nav-icon.svg";
import loginIcon from "../../assets/icons/login-icon.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import shopIcon from "../../assets/icons/shop-icon.svg";

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

                    <a href="/home">
                        <img className="nav-logo" src={navIcon} alt="navigation icon" />
                    </a>

                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                         <li><a href="/">Shop</a></li>
                        <li><a href="/">About Us</a></li>
                         <li><a href="/">Contact Us</a></li>
                    </ul>

                    <div className="right_side">
                        <ul>
                            <li>
                                <a href="">
                                    <img src={loginIcon} alt="login icon" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={heartIcon} alt="heart icon" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={shopIcon} alt="shop icon" />
                                </a>
                            </li>
                        </ul>
                    </div>

                </nav>

            </div>

        </header>
    )
}