import BrandeStrip from '../../components/brandeStrip/BrandeStrip';
import DiscountBanners from '../../components/discountBanners/DiscountBanners';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/hero/HeroSection';
import JustForYou from '../../components/justForYou/JustForYou';
import Navbar from '../../components/navbar/Navbar';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import ShopByCategory from '../../components/shopByCategory/ShopByCategory';
import TrendingProducts from '../../components/trending/TrendingProducts';
import './Home.css';


export default function Home(){
    return(
        <>
            <Navbar />
            <HeroSection />
            <TrendingProducts />
            <DiscountBanners />
            <ShopByCategory />
            <JustForYou />
            <BrandeStrip />
            <NewsLetter />
            <Footer />
        </>
    )
}