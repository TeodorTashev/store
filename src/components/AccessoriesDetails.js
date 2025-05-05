import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';
import '../nav.css';
import './product-styles.css';

const AccessoriesDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { image, title, price, description } = location.state || {};

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        if (!location.state) {
            navigate('/accessories');
            return;
        }
        
        // Calculate initial total price
        setTotalPrice((price * quantity).toFixed(2));
    }, [location.state, navigate, price, quantity]);

    const handleQuantityChange = (newQty) => {
        const qty = Math.max(1, newQty); // Ensure minimum of 1
        setQuantity(qty);
        setTotalPrice((price * qty).toFixed(2));
    };

    const handleAddToCart = () => {
        alert(`Добавени ${quantity} броя в кошницата! Обща сума: ${totalPrice} лв.`);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2000);
    };

    if (!location.state) {
        return null; // Will redirect in useEffect
    }

    return (
        <main className="page-container">
            <div className="product-detail">
                <div className="product-image">
                    <img 
                        src={image} 
                        alt={title} 
                        onClick={() => setShowModal(true)}
                    />
                </div>
                
                <div className="product-info">
                    <div className="title-price-container">
                        <h1 className="product-title">{title}</h1>
                        <p className="product-price">{price.toFixed(2)} лв.</p>
                    </div>
                    
                    {description && (
                        <div className="product-description">
                            {description}
                        </div>
                    )}
                    
                    <div className="product-options">
                        <div className="quantity-section">
                            <div className="quantity-selector">
                                <span className="option-label">Количество:</span>
                                <div className="quantity-control">
                                    <button 
                                        className="quantity-btn"
                                        onClick={() => handleQuantityChange(quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <input 
                                        type="number" 
                                        min="1" 
                                        value={quantity}
                                        onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                                        max="20"
                                    />
                                    <button 
                                        className="quantity-btn"
                                        onClick={() => handleQuantityChange(quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            
                            <div className="total-price-container">
                                Обща сума: <span className="total-price-value">{totalPrice} лв.</span>
                            </div>
                        </div>
                        
                        <button 
                            className={`add-to-cart ${showSuccessMessage ? 'success' : ''}`}
                            onClick={handleAddToCart}
                        >
                            {showSuccessMessage ? 'Добавено в количката!' : 'Сложи в Количка'}
                        </button>
                    </div>
                </div>
            </div>
            
            {showModal && (
                <div className="modal" onClick={() => setShowModal(false)}>
                    <div className="modal-content">
                        <span className="close-modal" onClick={() => setShowModal(false)}>&times;</span>
                        <img src={image} alt={title} />
                    </div>
                </div>
            )}
        </main>
    );
};

export default AccessoriesDetails; 