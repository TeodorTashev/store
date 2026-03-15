import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/productUtils';
import SEO from './SEO';
import '../styles.css';
import '../nav.css';
import './product-styles.css';

const AccessoriesDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { image, title, price, description } = location.state || {};

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const seoData = {
        title: title,
        description: description,
        image: image,
        url: `https://ethnobrodery.com/accessories/${title?.toLowerCase().replace(/\s+/g, '-')}`,
        type: 'product',
        product: {
            name: title,
            description: description,
            image: image,
            price: price,
            inStock: true,
            category: 'Аксесоари',
            material: 'Памук'
        },
        breadcrumbs: [
            {
                name: "Начало",
                url: "https://ethnobrodery.com"
            },
            {
                name: "Аксесоари",
                url: "https://ethnobrodery.com/accessories"
            },
            {
                name: title,
                url: `https://ethnobrodery.com/accessories/${title?.toLowerCase().replace(/\s+/g, '-')}`
            }
        ],
        faqs: [
            {
                question: "Какви материали използвате за аксесоарите?",
                answer: "Нашите аксесоари са изработени от висококачествени материали, включително памук и други естествени влакна."
            },
            {
                question: "Как се извършва бродирането?",
                answer: "Бродирането се извършва машинно с високо качество, което гарантира издръжливост и дълготрайност на мотивите."
            },
            {
                question: "Как да поддържам аксесоарите в добро състояние?",
                answer: "Препоръчваме внимателно почистване с мека четка и избягване на директна слънчева светлина. За по-трудни замърсявания, моля, консултирайте се с нас."
            },
            {
                question: "Какви аксесоари предлагате?",
                answer: "Предлагаме разнообразни аксесоари с традиционни български мотиви, включително панделки, диадеми, скънчи и други."
            },
            {
                question: "Могат ли аксесоарите да се персонализират?",
                answer: "Да, някои от нашите аксесоари могат да бъдат персонализирани с различни мотиви или цветове. Моля, свържете се с нас за повече информация."
            }
        ]
    };

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
        const item = {
            id: location.pathname.split('/').pop(),
            title,
            price,
            image,
            quantity
        };

        addToCart(item);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2000);
    };

    if (!location.state) {
        return null; // Will redirect in useEffect
    }

    return (
        <>
            <SEO {...seoData} />
            <main className="page-container" style={{ paddingTop: '100px' }}>
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
                            <p className="product-price">{formatPrice(price)}</p>
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
                                    Обща сума: <span className="total-price-value">{formatPrice(parseFloat(totalPrice))}</span>
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
        </>
    );
};

export default AccessoriesDetails; 