
import './home.scss'
import MainBanner from '../../components/MainBanner/MainBanner'
import ShopByCategories from '../../components/ShopByCategories/ShopByCategories';
import NewProducts from '../../components/newProducts/NewProducts';
import ShopByRoom from '../../components/ShopByRoom/ShopByRoom';
import PromoVideo from '../../components/PromoVideo/PromoVideo';

export default function Home() {
    return (
        <main>
            <MainBanner />
            <ShopByCategories />
            <NewProducts />
            <ShopByRoom />
            <PromoVideo />  
        </main>
    )
}

