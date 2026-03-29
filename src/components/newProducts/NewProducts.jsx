
import "./newProducts.scss";

import modernArmchair from "../../assets/images/new-products/modern-armchair.jpg"
import EggChair from "../../assets/images/new-products/egg-chair.jpg"
import chaiseLounge from "../../assets/images/new-products/chaise-lounge.jpg"

export default function NewProducts() {
    return (
        <section className="new-products">
            <div className="container">

                <div className="header">
                    <h2>New Products</h2>
                    <nav>

                        <ul className="filter-links">
                            <li>
                                <button className="active">
                                    All
                                </button>
                            </li>
                            <li>
                                <button>
                                    Chairs
                                </button>
                            </li>
                            <li>
                                <button>
                                    Tables
                                </button>
                            </li>
                            <li>
                                <button>
                                    Armchairs
                                </button>
                            </li>
                            <li>
                                <button>
                                    Sofas
                                </button>
                            </li>
                            <li>
                                <button>
                                    Decor
                                </button>
                            </li>
                        </ul>

                    </nav>
                </div>

                <ul className="products-grid">
                    <li className="product-card">
                        <a href="#">
                            <div className="image-wrapper">
                                <img src={modernArmchair} alt="Modern Armchair" />
                                <button className="like-btn">♡</button>
                            </div>
                            <div className="product-info">
                                <div className="info-top">
                                    <h3>Modern Armchair</h3>
                                    <div className="color-swatches">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                                <span className="price">$250</span>
                            </div>
                        </a>
                    </li>
                    <li className="product-card">
                        <a href="#">
                            <div className="image-wrapper">
                                <img src={EggChair} alt="Egg Chair" />
                                <button className="like-btn">♡</button>
                            </div>
                            <div className="product-info">
                                <div className="info-top">
                                    <h3>Egg Chair</h3>
                                    <div className="color-swatches">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                                <span className="price">$250</span>
                            </div>
                        </a>
                    </li>
                    <li className="product-card">
                        <a href="#">
                            <div className="image-wrapper">
                                <img src={chaiseLounge} alt="Chaise Lounge" />
                                <button className="like-btn">♡</button>
                            </div>
                            <div className="product-info">
                                <div className="info-top">
                                    <h3>Chaise Lounge</h3>
                                    <div className="color-swatches">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                                <span className="price">$250</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

        </section>
    )
}