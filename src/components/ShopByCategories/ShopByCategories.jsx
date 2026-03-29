
import './shopByCategories.scss';

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
                            <a href="#">
                                <div className='image-wrapper'>
                                    <img src="" alt="chair" />
                                </div>
                                <div className="category-info">
                                    <h3>Tables</h3>
                                    <span>24 products</span>
                                </div>
                            </a>
                        </li>
                         <li className="category-card">
                            <a href="#">
                                <div className='image-wrapper'>
                                    <img src="" alt="chair" />
                                </div>
                                <div className="category-info">
                                    <h3>Tables</h3>
                                    <span>24 products</span>
                                </div>
                            </a>
                        </li>
                         <li className="category-card">
                            <a href="#">
                                <div className='image-wrapper'>
                                    <img src="" alt="chair" />
                                </div>
                                <div className="category-info">
                                    <h3>Tables</h3>
                                    <span>24 products</span>
                                </div>
                            </a>
                        </li>
                    </ul>
            </div>
        </section>
    )
}