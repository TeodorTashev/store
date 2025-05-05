import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './order-success-styles.css';

const OrderSuccess = () => {
    const { cartItems } = useCart();
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    return (
        <div className="order-success-page">
            <div className="success-container">
                <div className="success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                
                <h1>Поръчката е направена успешно!</h1>
                <p className="order-number">Номер на поръчка: <span>#{orderNumber}</span></p>
                
                <p className="success-message">
                    Благодарим Ви за направената поръчка! В рамките на няколко минути ще получите имейл с потвърждение на поръчката Ви.
                </p>
                
                <div className="order-summary-box">
                    <h2>Вашата поръчка</h2>
                    
                    <div className="order-items-list">
                        {cartItems.map((item, index) => (
                            <div className="success-order-item" key={index}>
                                <div className="item-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.title}</h3>
                                    <div className="item-specs">
                                        <p>Цвят: {item.selectedColor}</p>
                                        <p>Размер: {item.selectedSize}</p>
                                        {item.selectedGender && <p>Пол: {item.selectedGender === 'male' ? 'Мъжки' : 'Дамски'}</p>}
                                        <p>Количество: {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="item-price">
                                    {(item.price * item.quantity).toFixed(2)} лв.
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="order-total">
                        <span>Обща сума:</span>
                        <span>
                            {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} лв.
                        </span>
                    </div>
                </div>
                
                <div className="success-actions">
                    <Link to="/" className="continue-shopping-btn">
                        Връщане към началната страница
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess; 