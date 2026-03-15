import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/productUtils';
import SEO from './SEO';
import '../styles.css';
import '../nav.css';
import './product-styles.css';
import { parseProductInfo } from '../utils/productUtils';

// Import sweatshirt images
import sweatshirt1 from '../images/suichari/суитшърт 75лв бял Българското.webp';
import sweatshirt2 from '../images/suichari/суитшърт с цип 80лв Кончета.webp';
import sweatshirt3 from '../images/suichari/суитшърт с цип и качулка Български мотив 85лв.webp';

const SweatshirtDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const sizeTableRef = useRef(null);
    const { addToCart } = useCart();
    
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showSizeTable, setShowSizeTable] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const { image, title, price, description } = location.state || {};

    const seoData = {
        title: title,
        description: description,
        image: image,
        url: `https://ethnobrodery.com/sweatshirts/${id}`,
        type: 'product',
        product: {
            name: title,
            description: description,
            image: image,
            price: price,
            inStock: true,
            category: 'Суитшърти',
            material: 'Памук',
            sizes: ['S', 'M', 'L', 'XL', '2XL']
        },
        breadcrumbs: [
            {
                name: "Начало",
                url: "https://ethnobrodery.com"
            },
            {
                name: "Суитшърти",
                url: "https://ethnobrodery.com/sweatshirts"
            },
            {
                name: title,
                url: `https://ethnobrodery.com/sweatshirts/${id}`
            }
        ],
        faqs: [
            {
                question: "Какви материали използвате за суитшъртите?",
                answer: "Нашите суитшърти са изработени от висококачествен памук, който осигурява комфорт и топлина."
            },
            {
                question: "Как се извършва бродирането?",
                answer: "Бродирането се извършва машинно с високо качество, което гарантира издръжливост и дълготрайност на мотивите."
            },
            {
                question: "Какви размери предлагате?",
                answer: "Предлагаме размери от S до 2XL, които са подходящи за повечето типове фигури."
            },
            {
                question: "Как да избера правилния размер?",
                answer: "Можете да използвате нашата таблица с размери, която показва точните измервания за всеки размер. Препоръчваме да измерите себе си и да изберете най-близкия размер според таблицата."
            },
            {
                question: "Как да поддържам суитшърта в добро състояние?",
                answer: "Препоръчваме пране на 30 градуса и гладене на ниска температура. Избягвайте използването на белилни препарати."
            }
        ]
    };

    const sweatshirts = [
        { 
            id: 1, 
            image: sweatshirt1, 
            ...parseProductInfo('суитшърт 75лв бял Българското.webp', 'sweatshirts'),
            name: "Суитшърт Българското",
            color: "Бяло",
            gender: "Дамски",
            description: 'Качествен Суитшърт с традиционни български мотиви. Топъл и удобен за всеки сезон.',
            sizes: {
                'S': { width: 48, height: 68 },
                'M': { width: 50, height: 70 },
                'L': { width: 52, height: 72 },
                'XL': { width: 54, height: 74 },
                '2XL': { width: 56, height: 76 }
            }
        },
        { 
            id: 2, 
            image: sweatshirt2, 
            ...parseProductInfo('суитшърт с цип 80лв Кончета.webp', 'sweatshirts'),
            name: "Суитшърт с цип Кончета",
            color: "Зелен",
            gender: "Мъжки",
            description: 'Качествен Суитшърт с традиционни български мотиви. Топъл и удобен за всеки сезон.',
            sizes: {
                'S': { width: 50, height: 70 },
                'M': { width: 53, height: 72 },
                'L': { width: 56, height: 74 },
                'XL': { width: 58, height: 76 },
                '2XL': { width: 60, height: 78 },
                '3XL': { width: 62, height: 80 }
            }
        },
        { 
            id: 3, 
            image: sweatshirt3, 
            ...parseProductInfo('суитшърт с цип и качулка Български мотив 85лв.webp', 'sweatshirts'),
            name: "Суитшърт с цип и качулка Български мотив",
            color: "Черно",
            gender: "Мъжки",
            description: 'Качествен Суитшърт с традиционни български мотиви. Топъл и удобен за всеки сезон.',
            sizes: {
                'S': { width: 50, height: 70 },
                'M': { width: 53, height: 72 },
                'L': { width: 56, height: 74 },
                'XL': { width: 58, height: 76 },
                '2XL': { width: 60, height: 78 },
                '3XL': { width: 62, height: 80 }
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

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Моля, изберете размер!');
            return;
        }

        const item = {
            id: parseInt(id),
            title: sweatshirt.name,
            price: sweatshirt.price,
            image: sweatshirt.image,
            selectedSize,
            selectedColor: sweatshirt.color,
            quantity
        };

        addToCart(item);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2000);
    };

    if (!sweatshirt) return null;

    return (
        <>
            <SEO {...seoData} />
            <main className="product-detail-page" style={{ paddingTop: '100px' }}>            
                <div className="product-detail">
                    <div className="product-image" onClick={() => setShowModal(true)}>
                        <img src={sweatshirt.image} alt={sweatshirt.name} />
                    </div>
                    
                    <div className="product-info">
                        <div className="title-price-container">
                            <h1 className="product-title">{sweatshirt.name}</h1>
                            <p className="product-price">{formatPrice(sweatshirt.price)}</p>
                        </div>
                        
                        <p className="product-description">{sweatshirt.description}</p>
                        
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
                                    Обща сума: <span className="total-price-value">{formatPrice(parseFloat(totalPrice))}</span>
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
                            <img src={sweatshirt.image} alt={sweatshirt.name} />
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};

export default SweatshirtDetails; 