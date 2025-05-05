import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ImageSlider from './components/ImageSlider';
import CategoryGrid from './components/CategoryGrid';
import TopProducts from './components/TopProducts';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Tshirts from './components/Tshirts';
import TshirtDetails from './components/TshirtDetails';
import Kids from './components/Kids';
import KidsDetails from './components/KidsDetails';
import Accessories from './components/Accessories';
import AccessoriesDetails from './components/AccessoriesDetails';
import Sweatshirts from './components/Sweatshirts';
import SweatshirtDetails from './components/SweatshirtDetails';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import AdminOrders from './components/AdminOrders';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import './styles.css';
import './nav.css';

// Your React component
function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={
              <>
                <ImageSlider />
                <div className="tagline">
                  <h2>Открийте красотата на българските мотиви чрез нашите ръчно бродирани облекла</h2>
                </div>
                <CategoryGrid />
                <TopProducts />
                <AboutUs />
              </>
            } />
            <Route path="/tshirts" element={<Tshirts />} />
            <Route path="/tshirts/:id" element={<TshirtDetails />} />
            <Route path="/sweatshirts" element={<Sweatshirts />} />
            <Route path="/sweatshirts/:id" element={<SweatshirtDetails />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/kids/:id" element={<KidsDetails />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/accessories/:id" element={<AccessoriesDetails />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
