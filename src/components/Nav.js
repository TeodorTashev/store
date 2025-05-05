import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../nav.css';
import logo from '../images/vs/logo1.png';

function Nav() {
    const { getCartCount } = useCart();
    const cartCount = getCartCount();
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const prevCountRef = useRef(cartCount);

    useEffect(() => {
        // If cart count increased, highlight the cart icon
        if (cartCount > prevCountRef.current) {
            setIsHighlighted(true);
            setTimeout(() => setIsHighlighted(false), 600);
        }
        prevCountRef.current = cartCount;
    }, [cartCount]);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 50) {
                nav.classList.add('navbar--scrolled');
            } else {
                nav.classList.remove('navbar--scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav id="mainNav" className="navbar">
            <div className="container">
                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <Link to="/" className="logo">
                    <img src={logo} alt="Ethnobrodery Logo" />
                    <span className="store-name">Ethnobrodery</span>
                </Link>

                <div className="mobile-cart-container">
                    <Link to="/cart" className={`cart-icon ${isHighlighted ? 'highlight' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>
                </div>

                <ul className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Начало</Link></li>
                    <li><Link to="/tshirts" onClick={() => setIsMenuOpen(false)}>Тениски</Link></li>
                    <li><Link to="/sweatshirts" onClick={() => setIsMenuOpen(false)}>Суичъри</Link></li>
                    <li><Link to="/kids" onClick={() => setIsMenuOpen(false)}>Детски дрехи</Link></li>
                    <li><Link to="/accessories" onClick={() => setIsMenuOpen(false)}>Аксесоари</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Контакти</Link></li>
                    <li className="cart-icon-container desktop-only">
                        <Link to="/cart" className={`cart-icon ${isHighlighted ? 'highlight' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav; 