
import { Link } from "react-router-dom";
import "./bestsellers.scss";

import modernChair from "../../assets/images/shop-categories-images/category-chair.jpg";
import modernTable from "../../assets/images/shop-categories-images/category-table.jpg";
import modernArmChair from "../../assets/images/shop-categories-images/category-armchair.jpg";
import modernEggChair from "../../assets/images/new-products/egg-chair.jpg";
import modernSecondArmchair from "../../assets/images/new-products/modern-armchair.jpg";
import modernChaiseLounge from "../../assets/images/new-products/chaise-lounge.jpg";

const products = [
    { id: 1, name: "Modern Chair", price: 250, badge: null, imgSrc: modernChair },
    { id: 2, name: "Folding Table", price: 250, badge: "SALE", imgSrc: modernTable },
    { id: 3, name: "Classic Armchair", price: 250, badge: null, imgSrc: modernArmChair },
    { id: 4, name: "Papasan Chair", price: 250, badge: null, imgSrc: modernEggChair },
    { id: 5, name: "Modern Chair", price: 250, badge: null, imgSrc: modernSecondArmchair },
    { id: 6, name: "Coffee Table", price: 250, badge: null, imgSrc: modernChaiseLounge },
    { id: 7, name: "Modern Chair", price: 250, badge: null, imgSrc: modernTable },
    { id: 8, name: "Coffee Table", price: 200, oldPrice: 250, badge: "NEW", imgSrc: modernTable },
];


export default function Bestsellers() {
    return (
        <section className="bestsellers">
            <div className="container">
                <div className="title-and-button">
                    <h2>Bestsellers</h2>
                    <Link to="/">View all</Link>
                </div>

                <ul className="products-grid">
                    {products.map((product) => (
                        <li key={product.id} className="product-card">
                            <Link to="/">
                                <div className="image-wrapper">
                                    {product.badge && (
                                        <span className={`badge badge ${product.badge.toLowerCase()}`}>
                                            {product.badge}
                                        </span>

                                    )}
                                    <img src={product.imgSrc} alt={product.name} />
                                </div>
                                <div className="product-info">
                                    <h3>{product.name}</h3>

                                    <div className="price-row">
                                        {product.oldPrice && (
                                            <span className="old-price-row">{product.oldPrice}</span>
                                        )}
                                        <span className="price">{product.price}</span>
                                    </div>
                                    <div className="color-swatches">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
