
import './home.scss'
import MainBanner from '../../components/MainBanner/MainBanner'
import ShopByCategories from '../../components/ShopByCategories/ShopByCategories';
import NewProducts from '../../components/newProducts/NewProducts';
import ShopByRoom from '../../components/ShopByRoom/ShopByRoom';
import PromoVideo from '../../components/PromoVideo/PromoVideo';
import Bestsellers from '../../components/Bestsellers/Bestsellers';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';
import IconsBar from '../../components/IconsBar/IconsBar';
import Footer from '../../components/Footer/Footer';

export default function Home() {
    return (
        <main>
            <MainBanner />
            <ShopByCategories />
            <NewProducts />
            <ShopByRoom />
            <PromoVideo />  
            <Bestsellers />
            <CustomerReviews />
            <IconsBar />
            <Footer />
        </main>
    )
}

