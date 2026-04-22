
import { Link } from "react-router-dom";
import './shopByCategories.scss';
import table from "../../assets/images/shop-categories-images/category-table.jpg"
import chair from "../../assets/images/shop-categories-images/category-chair.jpg"
import armchair from "../../assets/images/shop-categories-images/category-armchair.jpg"
import sofa from "../../assets/images/shop-categories-images/category-sofa.jpg"


export default function ShopByCategories() {
    return (
        <section className='shopByCategories'>
            <div className="container">

                <div className="title-and-button">
                    <h2 className='title'>Shop by Categories</h2>
                    <button className="btn buttonViewAll">View All</button>
                </div>

                <ul className="categories-list"> 
                        <li className="category-card">
                            <Link to="/">
                                <div className='image-wrapper'>
                                    <img src={chair} alt="chair" />
                                </div>
                                <div className="category-info">
                                    <h3>Tables</h3>
                                    <span>24 products</span>
                                </div>
                            </Link>
                        </li>
                         <li className="category-card">
                            <Link to="/">
                                <div className='image-wrapper'>
                                    <img src={table} alt="table" />
                                </div>
                                <div className="category-info">
                                    <h3>Tables</h3>
                                    <span>24 products</span>
                                </div>
                            </Link>
                        </li>
                         <li className="category-card">
                            <Link to="/">
                                <div className='image-wrapper'>
                                    <img src={armchair} alt="armchair" />
                                </div>
                                <div className="category-info">
                                    <h3>Armchairs</h3>
                                    <span>24 products</span>
                                </div>
                            </Link>
                        </li>
                        <li className="category-card">
                            <Link to="/">
                                <div className='image-wrapper'>
                                    <img src={sofa} alt="sofa" />
                                </div>
                                <div className="category-info">
                                    <h3>Sofas</h3>
                                    <span>24 products</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
            </div>
        </section>
    )
}