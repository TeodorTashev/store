import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/productUtils';
import SEO from './SEO';
import '../styles.css';
import '../nav.css';
import './product-styles.css';

const KidsDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { image, title, price, description } = location.state || {};
    const sizeTableRef = useRef(null);

    const [selectedColor, setSelectedColor] = useState('Черно');
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showSizeTable, setShowSizeTable] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const seoData = {
        title: title,
        description: description,
        image: image,
        url: `https://ethnobrodery.com/kids/${title?.toLowerCase().replace(/\s+/g, '-')}`,
        type: 'product',
        product: {
            name: title,
            description: description,
            image: image,
            price: price,
            inStock: true,
            category: 'Детски дрехи',
            material: 'Памук',
            color: selectedColor || 'Множество цветове',
            sizes: ['3-4', '5-6', '7-8', '9-10', '11-12']
        },
        breadcrumbs: [
            {
                name: "Начало",
                url: "https://ethnobrodery.com"
            },
            {
                name: "Детски дрехи",
                url: "https://ethnobrodery.com/kids"
            },
            {
                name: title,
                url: `https://ethnobrodery.com/kids/${title?.toLowerCase().replace(/\s+/g, '-')}`
            }
        ],
        faqs: [
            {
                question: "Какви материали използвате за детските дрехи?",
                answer: "Нашите детски дрехи са изработени от 100% памук с високо качество, който е мек и приятен за детската кожа."
            },
            {
                question: "Как се извършва бродирането?",
                answer: "Бродирането се извършва машинно с високо качество, което гарантира издръжливост и дълготрайност на мотивите."
            },
            {
                question: "За какви възрасти са подходящи дрехите?",
                answer: "Предлагаме размери за деца от 3 до 12 години, с точни измервания за всеки размер."
            },
            {
                question: "Как да избера правилния размер за детето си?",
                answer: "Можете да използвате нашата таблица с размери, която показва точните измервания за всеки размер. Препоръчваме да измерите детето си и да изберете най-близкия размер според таблицата."
            },
            {
                question: "Как да поддържам детските дрехи в добро състояние?",
                answer: "Препоръчваме пране на 30 градуса и гладене на ниска температура. Избягвайте използването на белилни препарати."
            }
        ]
    };

    useEffect(() => {
        if (!location.state) {
            navigate('/kids');
            return;
        }
        
        // Calculate initial total price
        setTotalPrice((price * quantity).toFixed(2));
    }, [location.state, navigate, price, quantity]);

    useEffect(() => {
        // Scroll to size table when it becomes visible
        if (showSizeTable && sizeTableRef.current) {
            setTimeout(() => {
                sizeTableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [showSizeTable]);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        setSelectedSize(null); // Reset size when color changes
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleQuantityChange = (newQty) => {
        const qty = Math.max(1, newQty); // Ensure minimum of 1
        setQuantity(qty);
        setTotalPrice((price * qty).toFixed(2));
    };

    const toggleSizeTable = () => {
        setShowSizeTable(!showSizeTable);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Моля, изберете размер преди да добавите в количката!');
            return;
        }
        
        const item = {
            id: location.pathname.split('/').pop(),
            title,
            price,
            image,
            selectedColor,
            selectedSize,
            quantity
        };

        addToCart(item);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2000);
    };

    // Available sizes for black color
    const blackSizes = ['104см', '116см', '128см', '140см'];

    if (!location.state) {
        return null; // Will redirect in useEffect
    }

    return (
        <>
            <SEO {...seoData} />
            <main className="product-detail-page" style={{ paddingTop: '100px' }}>
                <div className="product-detail">
                    <div className="product-image" onClick={() => setShowModal(true)}>
                        <img src={image} alt={title} />
                    </div>
                    
                    <div className="product-info">
                        <div className="title-price-container">
                            <h1 className="product-title">{title}</h1>
                            <p className="product-price">{formatPrice(price)}</p>
                        </div>
                        
                        <p className="product-description">{description}</p>
                        
                        <div className="product-options">
                            <div className="option-row">
                                <label className="option-label">Цвят:</label>
                                <div className="color-options">
                                    <div 
                                        className={`color-option ${selectedColor === 'Черно' ? 'selected' : ''}`}
                                        onClick={() => handleColorSelect('Черно')}
                                    >
                                        Черно
                                    </div>
                                </div>
                            </div>
                            
                            <div className="option-row">
                                <label className="option-label">Размер:</label>
                                <div className="size-wrapper">
                                    <div className="size-options">
                                        {blackSizes.map(size => (
                                            <div 
                                                key={size}
                                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                                onClick={() => handleSizeSelect(size)}
                                            >
                                                {size}
                                            </div>
                                        ))}
                                    </div>
                                    <button className="size-table-toggle" onClick={toggleSizeTable}>
                                        {showSizeTable ? 'Скрий размери' : 'Таблица размери'}
                                    </button>
                                </div>
                            </div>
                            
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
                            
                            {showSizeTable && (
                                <div className="size-table-container" ref={sizeTableRef}>
                                    <h3>Детски размери</h3>
                                    <div className="size-tables-wrapper">
                                        <table className="size-table">
                                            <thead>
                                                <tr>
                                                    <th>Размер</th>
                                                    <th>Възраст</th>
                                                    <th>Височина (см)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td>92см</td><td>1.5-2 години</td><td>86-92</td></tr>
                                                <tr><td>98см</td><td>2-3 години</td><td>93-98</td></tr>
                                                <tr><td>104см</td><td>3-4 години</td><td>99-104</td></tr>
                                                <tr><td>116см</td><td>5-6 години</td><td>111-116</td></tr>
                                                <tr><td>128см</td><td>7-8 години</td><td>123-128</td></tr>
                                                <tr><td>140см</td><td>9-10 години</td><td>135-140</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                            
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

export default KidsDetails; 