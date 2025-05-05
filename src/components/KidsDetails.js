import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';
import '../nav.css';
import './product-styles.css';

const KidsDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { image, title, price, description } = location.state || {};
    const sizeTableRef = useRef(null);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showSizeTable, setShowSizeTable] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
        if (!selectedColor) {
            alert('Моля, изберете цвят преди да добавите в количката!');
            return;
        }
        
        if (!selectedSize) {
            alert('Моля, изберете размер преди да добавите в количката!');
            return;
        }
        
        alert(`Продуктът е добавен в количката!\n${title}\nЦвят: ${selectedColor}\nРазмер: ${selectedSize}\nКоличество: ${quantity}\nОбща сума: ${totalPrice} лв.`);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2000);
    };

    // Available sizes based on color
    const blackSizes = ['104см', '116см', '128см', '140см'];
    const whiteSizes = ['92см', '98см', '104см', '116см', '128см', '140см'];

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
                    
                    <div className="product-description">
                        {description}
                    </div>
                    
                    <div className="product-options">
                        <div className="option-row">
                            <label className="option-label">Цвят:</label>
                            <div className="color-options">
                                <div 
                                    className={`color-option ${selectedColor === 'Бяло' ? 'selected' : ''}`}
                                    onClick={() => handleColorSelect('Бяло')}
                                >
                                    Бяло
                                </div>
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
                                {!selectedColor ? (
                                    <p className="size-message">Изберете цвят, за да видите наличните размери</p>
                                ) : (
                                    <div className="size-options">
                                        {(selectedColor === 'Черно' ? blackSizes : whiteSizes).map(size => (
                                            <div 
                                                key={size}
                                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                                onClick={() => handleSizeSelect(size)}
                                            >
                                                {size}
                                            </div>
                                        ))}
                                    </div>
                                )}
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
                                Обща сума: <span className="total-price-value">{totalPrice} лв.</span>
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
    );
};

export default KidsDetails; 