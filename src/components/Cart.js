import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles.css';
import './cart-styles.css';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (item, newQuantity) => {
        if (newQuantity < 1) return;
        updateQuantity(item.id, item.selectedSize, item.selectedColor, newQuantity);
    };

    const handleRemoveItem = (item) => {
        removeFromCart(item.id, item.selectedSize, item.selectedColor);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <h1 className="cart-title">Вашата количка</h1>
                <div className="empty-cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <p>Вашата количка е празна</p>
                    <Link to="/" className="continue-shopping">Продължете пазаруването</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1 className="cart-title">Вашата количка</h1>
            
            <div className="cart-container">
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <div className="cart-item-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="cart-item-details">
                                <h3>{item.title}</h3>
                                <div className="cart-item-options">
                                    <p>Цвят: <span>{item.selectedColor}</span></p>
                                    <p>Размер: <span>{item.selectedSize}</span></p>
                                    {item.selectedGender && <p>Пол: <span>{item.selectedGender === 'male' ? 'Мъжки' : 'Дамски'}</span></p>}
                                </div>
                                <div className="cart-item-price">
                                    {item.price.toFixed(2)} лв.
                                </div>
                            </div>
                            <div className="cart-item-actions">
                                <div className="cart-quantity-control">
                                    <button 
                                        className="cart-quantity-btn"
                                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <span className="cart-quantity">{item.quantity}</span>
                                    <button 
                                        className="cart-quantity-btn"
                                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button 
                                    className="remove-item-btn"
                                    onClick={() => handleRemoveItem(item)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="cart-summary">
                    <h2>Обобщение на поръчката</h2>
                    <div className="cart-summary-row">
                        <span>Общо продукти:</span>
                        <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                    </div>
                    <div className="cart-summary-row">
                        <span>Доставка:</span>
                        <span>5.00 лв.</span>
                    </div>
                    <div className="cart-summary-row total">
                        <span>Обща сума:</span>
                        <span>{(parseFloat(getTotalPrice()) + 5).toFixed(2)} лв.</span>
                    </div>
                    <button className="checkout-btn" onClick={handleCheckout}>Продължи към плащане</button>
                    <Link to="/" className="continue-shopping">Продължи пазаруването</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart; 