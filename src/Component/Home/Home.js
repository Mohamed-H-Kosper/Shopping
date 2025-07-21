import AdviceShopping from "./AdviceShopping";
import CardOffer from "./CardOffer";
import HomeImage from "./HomeImage";
import ProductsHome2 from "./ProductHome2";
import ProductsHome from "./ProductsHome";
import Slider from "../Home/Slider";

function Home({onAddCart}){
    return(
        <>
    <HomeImage />
    <CardOffer   onAddCart={onAddCart}/>
    <ProductsHome onAddCart={onAddCart}/>
    <Slider />
    <ProductsHome2  onAddCart={onAddCart}/>
    <AdviceShopping />
    </>
    )
}
export default Home;