import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css';
import '../nav.css';
import './product-styles.css';

// Import sweatshirt images
import sweatshirt1 from '../images/suichari/суитшърт 75лв бял.jpg';
import sweatshirt2 from '../images/suichari/суитшърт с цип 80лв.jpg';
import sweatshirt3 from '../images/suichari/суитшърт с цип и качулка 85лв.jpg';

const SweatshirtDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const sizeTableRef = useRef(null);
    
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showSizeTable, setShowSizeTable] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const sweatshirts = [
        {
            id: 1,
            title: "Женски суитшърт - бял",
            price: 75.00,
            image: sweatshirt1,
            color: "Бяло",
            gender: "Дамски",
            description: "Топъл памучен суитшърт с традиционни български мотиви. Удобен и практичен за всеки сезон. Бродирането го правим машинно!",
            sizes: {
                'S': { width: 46, height: 62 },
                'M': { width: 49, height: 64 },
                'L': { width: 53, height: 66 },
                'XL': { width: 56, height: 68 },
                '2XL': { width: 59, height: 70 }
            }
        },
        {
            id: 2,
            title: "Мъжки суитшърт с цип - зелен",
            price: 80.00,
            image: sweatshirt2,
            color: "Зелен",
            gender: "Мъжки",
            description: "Топъл памучен суитшърт с цип и традиционни български мотиви. Удобен и практичен за всеки сезон. Бродирането го правим машинно!",
            sizes: {
                'S': { width: 51, height: 67 },
                'M': { width: 56, height: 70 },
                'L': { width: 61, height: 73 },
                'XL': { width: 64, height: 76 },
                '2XL': { width: 69, height: 79 }
            }
        },
        {
            id: 3,
            title: "Мъжки суитшърт с цип и качулка - черен",
            price: 85.00,
            image: sweatshirt3,
            color: "Черно",
            gender: "Мъжки",
            description: "Топъл памучен суитшърт с цип, качулка и традиционни български мотиви. Удобен и практичен за всеки сезон. Бродирането го правим машинно!",
            sizes: {
                'S': { width: 51, height: 67 },
                'M': { width: 56, height: 70 },
                'L': { width: 61, height: 73 },
                'XL': { width: 64, height: 76 },
                '2XL': { width: 69, height: 79 }
            }
        }
    ];

    const sweatshirt = sweatshirts.find(s => s.id === parseInt(id));

    useEffect(() => {
        if (!sweatshirt) {
            navigate('/sweatshirts');
            return;
        }
        
        // Calculate initial total price
        setTotalPrice((sweatshirt.price * quantity).toFixed(2));
    }, [sweatshirt, navigate, quantity]);

    useEffect(() => {
        // Scroll to size table when it becomes visible
        if (showSizeTable && sizeTableRef.current) {
            setTimeout(() => {
                sizeTableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [showSizeTable]);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleQuantityChange = (newQty) => {
        const qty = Math.max(1, newQty); // Ensure minimum of 1
        setQuantity(qty);
        if (sweatshirt) {
            setTotalPrice((sweatshirt.price * qty).toFixed(2));
        }
    };

    const toggleSizeTable = () => {
        setShowSizeTable(!showSizeTable);
    };

    const addToCart = () => {
        if (!selectedSize) {
            alert('Моля, изберете размер!');
            return;
        }

        alert(`Добавен продукт в кошницата:
Продукт: ${sweatshirt.title}
Размер: ${selectedSize}
Количество: ${quantity}
Обща сума: ${totalPrice} лв.`);
        
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2000);
    };

    if (!sweatshirt) return null;

    return (
        <main className="page-container">            
            <div className="product-detail">
                <div className="product-image">
                    <img 
                        src={sweatshirt.image} 
                        alt={sweatshirt.title} 
                        onClick={() => setShowModal(true)}
                    />
                </div>
                
                <div className="product-info">
                    <div className="title-price-container">
                        <h1 className="product-title">{sweatshirt.title}</h1>
                        <p className="product-price">{sweatshirt.price.toFixed(2)} лв.</p>
                    </div>
                    
                    <div className="product-description">
                        {sweatshirt.description}
                    </div>
                    
                    <div className="product-options">
                        <div className="option-row">
                            <label className="option-label">Цвят:</label>
                            <div className="color-options">
                                <div className="color-option selected">
                                    {sweatshirt.color}
                                </div>
                            </div>
                        </div>
                        
                        <div className="option-row">
                            <label className="option-label">Пол:</label>
                            <div className="gender-options">
                                <div className="gender-option selected">
                                    {sweatshirt.gender}
                                </div>
                            </div>
                        </div>
                        
                        <div className="option-row">
                            <label className="option-label">Размер:</label>
                            <div className="size-wrapper">
                                <div className="size-options">
                                    {Object.keys(sweatshirt.sizes).map(size => (
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
                                Обща сума: <span className="total-price-value">{totalPrice} лв.</span>
                            </div>
                        </div>
                        
                        {showSizeTable && (
                            <div className="size-table-container" ref={sizeTableRef}>
                                <h3>Размери</h3>
                                <div className="size-tables-wrapper">
                                    <table className="size-table">
                                        <thead>
                                            <tr>
                                                <th>Размер</th>
                                                <th>Ширина</th>
                                                <th>Височина</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(sweatshirt.sizes).map(([size, dimensions]) => (
                                                <tr key={size}>
                                                    <td>{size}</td>
                                                    <td>{dimensions.width}см</td>
                                                    <td>{dimensions.height}см</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                        
                        <button 
                            className={`add-to-cart ${showSuccessMessage ? 'success' : ''}`}
                            onClick={addToCart}
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
                        <img src={sweatshirt.image} alt={sweatshirt.title} />
                    </div>
                </div>
            )}
        </main>
    );
};

export default SweatshirtDetails; 