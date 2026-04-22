
import { Link } from "react-router-dom";
import './footer.scss';

import facebookIcon from "../../assets/icons/footer-icons/Facebook_black.svg"
import frameIcon from "../../assets/icons/footer-icons/Frame90.svg"
import instagramIcon from "../../assets/icons/footer-icons/Instagram_black.svg"
import youtubeIcon from "../../assets/icons/footer-icons/Youtube_black.svg"
import homeIcon from "../../assets/icons/home_icon.svg";
import paymentsIcons from "../../assets/icons/footer-icons/payments_icons.svg";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="newsletter">
                    <div className="newsletter-text">
                        <h3>Subscribe to our newsletter</h3>
                        <p>Don't miss latest news & promotions</p>
                    </div>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div className="footer-columns">
                    <div className="store-info">
                        <div className="logo">
                            <img src={homeIcon} alt="f Store" />
                            <h4>f Store</h4>
                        </div>
                        <p>60 Fremont Ave. Hamden, CT 06514</p>
                        <p>Email: fStore@email.com</p>
                        <p>Phone: (928) 630-9272</p>
                        <ul className="socials">
                            <li>
                                <Link to="/">
                                    <img src={facebookIcon} alt="Facebook" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={frameIcon} alt="Twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={instagramIcon} alt="Instagram" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={youtubeIcon} alt="YouTube" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='shop-column footer-column'>
                        <h4>Shop</h4>
                        <ul>
                            <li><Link to="/">Chairs</Link></li>
                            <li><Link to="/">Beds</Link></li>
                            <li><Link to="/">Sofas</Link></li>
                            <li><Link to="/">Cabinets</Link></li>
                            <li><Link to="/">Armchairs</Link></li>
                            <li><Link to="/">Sale</Link></li>
                        </ul>
                    </div>
                    <div className='customer-service-column footer-column'>
                        <h4>Customer service</h4>
                        <ul>
                            <li><Link to="/">Orders</Link></li>
                            <li><Link to="/">Addresses</Link></li>
                            <li><Link to="/">Returns</Link></li>
                            <li><Link to="/">Account details</Link></li>
                            <li><Link to="/">F.A.Q</Link></li>
                        </ul>
                    </div>
                    <div className='delivery-column footer-column'>
                        <h4>Delivery</h4>
                        <ul>
                            <li><Link to="/">Orders</Link></li>
                            <li><Link to="/">Return</Link></li>
                            <li><Link to="/">Free Delivery</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright-and-payments">
                    <p>© Copyright f Store 2024. Design by Figma.guru</p>
                    <div className="payments">
                       <img src={paymentsIcons} alt="Accepted payments: Visa, American Express, Mastercard, PayPal" />
                    </div>
                </div>
            </div>
        </footer>
    )
}