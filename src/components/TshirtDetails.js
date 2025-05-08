import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles.css';
import '../nav.css';
import './product-styles.css';

const TshirtDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { image, title, price, description } = location.state || {};
    const sizeTableRef = useRef(null);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [showSizeTable, setShowSizeTable] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const isMobile = () => window.innerWidth <= 768;

    useEffect(() => {
        if (!location.state) {
            navigate('/tshirts');
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

    const handleAddToCart = () => {
        if (!selectedColor) {
            alert('Моля, изберете цвят преди да добавите в количката!');
            return;
        }
        
        if (!selectedSize) {
            alert('Моля, изберете размер преди да добавите в количката!');
            return;
        }
        
        if (!selectedGender) {
            alert('Моля, изберете пол преди да добавите в количката!');
            return;
        }

        const item = {
            id: location.pathname.split('/').pop(),
            title,
            price,
            image,
            selectedColor,
            selectedSize,
            selectedGender,
            quantity
        };

        addToCart(item);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2000);
    };

    const toggleSizeTable = () => {
        setShowSizeTable(!showSizeTable);
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
                        <label className="option-label">Пол:</label>
                        <div className="gender-options">
                            <div 
                                className={`gender-option ${selectedGender === 'male' ? 'selected' : ''}`}
                                onClick={() => setSelectedGender('male')}
                            >
                                Мъжки
                            </div>
                            <div 
                                className={`gender-option ${selectedGender === 'female' ? 'selected' : ''}`}
                                onClick={() => setSelectedGender('female')}
                            >
                                Дамски
                                </div>
                            </div>
                        </div>
                        
                        <div className="option-row">
                        <label className="option-label">Размер:</label>
                            <div className="size-wrapper">
                        {!selectedGender ? (
                            <p className="size-message">Изберете Пол, за да видите наличните размери</p>
                        ) : (
                                <div className="size-options">
                                    <div className={`size-option ${selectedSize === 'S' ? 'selected' : ''}`} onClick={() => handleSizeSelect('S')}>S</div>
                                    <div className={`size-option ${selectedSize === 'M' ? 'selected' : ''}`} onClick={() => handleSizeSelect('M')}>M</div>
                                    <div className={`size-option ${selectedSize === 'L' ? 'selected' : ''}`} onClick={() => handleSizeSelect('L')}>L</div>
                                    <div className={`size-option ${selectedSize === 'XL' ? 'selected' : ''}`} onClick={() => handleSizeSelect('XL')}>XL</div>
                                    <div className={`size-option ${selectedSize === '2XL' ? 'selected' : ''}`} onClick={() => handleSizeSelect('2XL')}>2XL</div>
                                    {selectedGender === 'male' && (
                                        <>
                                            <div className={`size-option ${selectedSize === '3XL' ? 'selected' : ''}`} onClick={() => handleSizeSelect('3XL')}>3XL</div>
                                            <div className={`size-option ${selectedSize === '4XL' ? 'selected' : ''}`} onClick={() => handleSizeSelect('4XL')}>4XL</div>
                                        </>
                                    )}
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
                                    value={quantity}
                                    onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                                    min="1"
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
                            <h3>Размери</h3>
                            <div className="size-tables-wrapper">
                                <div className="size-table-section">
                                    <h4>Мъжки</h4>
                                    <table className="size-table">
                                        <thead>
                                            <tr>
                                                <th>Размер</th>
                                                <th>Ширина</th>
                                                <th>Височина</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>S</td><td>50 см</td><td>70 см</td></tr>
                                            <tr><td>M</td><td>53 см</td><td>72 см</td></tr>
                                            <tr><td>L</td><td>56 см</td><td>74 см</td></tr>
                                            <tr><td>XL</td><td>58 см</td><td>76 см</td></tr>
                                            <tr><td>2XL</td><td>65 см</td><td>80 см</td></tr>
                                            <tr><td>3XL</td><td>65 см</td><td>85 см</td></tr>
                                            <tr><td>4XL</td><td>68 см</td><td>88 см</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div className="size-table-section">
                                    <h4>Дамски</h4>
                                    <table className="size-table">
                                        <thead>
                                            <tr>
                                                <th>Размер</th>
                                                <th>Ширина</th>
                                                <th>Височина</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>S</td><td>43 см</td><td>60 см</td></tr>
                                                <tr><td>M</td><td>45 см</td><td>63 см</td></tr>
                                                <tr><td>L</td><td>48 см</td><td>66 см</td></tr>
                                                <tr><td>XL</td><td>51 см</td><td>68 см</td></tr>
                                                <tr><td>2XL</td><td>53 см</td><td>70 см</td></tr>
                                        </tbody>
                                    </table>
                                </div>
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

            {/* Modal for image zoom */}
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

export default TshirtDetails; 