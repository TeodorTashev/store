import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
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
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import { setupLazyLoading } from './utils/imageOptimization';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css';
import './nav.css';
import './components/background-fix.css';

// Your React component
function App() {
  // Setup lazy loading when the app initializes
  useEffect(() => {
    // Add lazy loading to any images that might not use our LazyImage component
    setupLazyLoading();
    
    // Add meta tags for better performance
    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1, maximum-scale=5';
    document.head.appendChild(metaViewport);
  }, []);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <ErrorBoundary>
          <div>
            <Nav />
            <Routes>
            <Route path="/" element={
              <>
                <ImageSlider />
                <header className="home-header">
                  <h1 className="main-heading">Ethnobrodery - Традиционни български мотиви и ръчно бродирани облекла</h1>
                </header>
                <div className="tagline">
                  <h2>Открийте красотата на българските мотиви чрез нашите ръчно бродирани облекла</h2>
                </div>
                <CategoryGrid />
                <TopProducts />
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
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            </Routes>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </CartProvider>
  );
}

export default App;
