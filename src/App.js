import About from "./Component/AboutUs/About";
import "./App.css";
import ContactUs from "./Component/ContactUs/ContactUs";
import Offer from "./Component/Offer/Offer";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Component/footer/Footer";
import AllProducts from "./Component/Products/AllProducts";
import Home from "./Component/Home/Home";
import ProductDetails from "./Component/Products/ProductDetails";
import Login from "./SignUP , Login/Login";
import Products from "./Component/Admin-Dashboard/Products";
import AddProducts from "./Component/Admin-Dashboard/AddProducts";
import ProductDetailsD from "./Component/Admin-Dashboard/ProductDetailsD";
import EditProducts from "./Component/Admin-Dashboard/EditProducts";
import { useEffect, useLayoutEffect, useState } from "react";
import Background from "./Component/Background-Animate/Background";
import Navbar from "./Component/Navbar/Navbar";
import Buy from "./Component/BuyNow/Buy";
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
    useEffect(()=>{
                       Aos.init({
                           duration:3000,
                           once:false
                       })
                   },[])

  const [token ,setToken] = useState(() => localStorage.getItem('token') ?? null);
const [scrollPosition, setScrollPosition] = useState(null);
 // add to cart (Bell)
  const [CartItem , setCartItem] = useState(()=>{
    const save = localStorage.getItem("cart");
    return save ? JSON.parse(save).filter(Boolean) :[]
  });
  const handleAddCart = (product) => {
  if (!product || !product.title) return; // حماية من null
  setScrollPosition(window.scrollY); // نحفظ مكان الصفحة قبل الإضافة
  setCartItem((prev) => [...prev, product]);
};
//  حذف منتج بدون إعادة scroll
const handleDeleteCart = (title) => {
  const cartDelete = CartItem.filter(
    (item) => item && item.title !== title
  );
  setScrollPosition(window.scrollY); // نحفظ موضع الصفحة قبل الحذف
  setCartItem(cartDelete);
};

// حفظ السلة في localStorage تلقائيًا
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(CartItem));
}, [CartItem]);

// استرجاع موضع الصفحة مباشرة بعد التحديث
useLayoutEffect(() => {
  if (scrollPosition !== null) {
    window.scrollTo(0, scrollPosition);
    setScrollPosition(null);
  }
}, [scrollPosition])

  return (
    <>
      <Navbar CartItem={CartItem} deleteCart = {handleDeleteCart} setToken={setToken} token={token}  />
        <Background />
      <Routes>
  <Route
    path="login"
    element={!token ? <Login setToken={setToken} token={token} /> : null}
  />
    <Route
    path="products"
    element={ <Products />}
  />
        <Route exact path="/" element={<Home onAddCart = {handleAddCart}/>} />
        <Route path="about" element={<About />} />
        <Route path="offer" element={<Offer onAddCart = {handleAddCart} />} />
        <Route path="allProducts" element={<AllProducts />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="product/:productId" element={<ProductDetails  />}  />
        <Route path="product/:productId/buy" element={<Buy />}  />
        <Route path="products/add" element={<AddProducts />} />
        <Route path="products/:productId" element={<ProductDetailsD />} />
        <Route path="products/edit/:productId" element={<EditProducts />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
