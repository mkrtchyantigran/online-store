
import './home.scss'
import MainBanner from '../../components/MainBanner/MainBanner'
import ShopByCategories from '../../components/ShopByCategories/ShopByCategories';
import NewProducts from '../../components/newProducts/NewProducts';

export default function Home() {
    return (
        <main>
            <MainBanner />
            <ShopByCategories />
            <NewProducts />
        </main>
    )
}

