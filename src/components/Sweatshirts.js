import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import '../nav.css';
import './product-styles.css';
import { parseProductInfo, formatPrice } from '../utils/productUtils';

// Import sweatshirt images
import sweatshirt1 from '../images/suichari/суитшърт 75лв бял Българското.webp';
import sweatshirt2 from '../images/suichari/суитшърт с цип 80лв Кончета.webp';
import sweatshirt3 from '../images/suichari/суитшърт с цип и качулка Български мотив 85лв.webp';

const Sweatshirts = () => {
    const navigate = useNavigate();
    const sweatshirts = [
        {
            id: 1,
            image: sweatshirt1,
            ...parseProductInfo('суитшърт 75лв бял Българското.webp', 'sweatshirts'),
            name: "Суитшърт Българското",
            color: "Бяло",
            gender: "Дамски" 
        },
        {
            id: 2,
            image: sweatshirt2,
            ...parseProductInfo('суитшърт с цип 80лв Кончета.webp', 'sweatshirts'),
            name: "Суитшърт с цип Кончета",
            color: "Зелен",
            gender: "Мъжки"
        },
        {
            id: 3,
            image: sweatshirt3,
            ...parseProductInfo('суитшърт с цип и качулка Български мотив 85лв.webp', 'sweatshirts'),
            name: "Суитшърт с цип и качулка Български мотив",
            color: "Черно",
            gender: "Мъжки"
        }
    ];

    const handleProductClick = (sweatshirt) => {
        navigate(`/sweatshirts/${sweatshirt.id}`, {
            state: {
                image: sweatshirt.image,
                title: sweatshirt.name,
                price: sweatshirt.price,
                description: 'Качествен Суитшърт с традиционни български мотиви. Топъл и удобен за всеки сезон.',
                color: sweatshirt.color,
                gender: sweatshirt.gender
            }
        });
    };

    return (
        <main className="tshirts-page">
            <h1 className="tshirts-title">Суитшърт с Български Мотиви</h1>
            
            <div className="product-grid">
                {sweatshirts.map(sweatshirt => (
                    <div 
                        key={sweatshirt.id} 
                        className="product-card"
                        onClick={() => handleProductClick(sweatshirt)}
                    >
                        <div className="product-image-container">
                            <img src={sweatshirt.image} alt={sweatshirt.name} />
                        </div>
                        <div className="product-info">
                            <h3>{sweatshirt.name}</h3>
                            <p className="price">{formatPrice(sweatshirt.price)}</p>
                            <button 
                                className="buy-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleProductClick(sweatshirt);
                                }}
                            >
                                Купи
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Sweatshirts; 