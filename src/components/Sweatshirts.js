import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import '../nav.css';
import './product-styles.css';

// Import sweatshirt images
import sweatshirt1 from '../images/suichari/суитшърт 75лв бял.jpg';
import sweatshirt2 from '../images/suichari/суитшърт с цип 80лв.jpg';
import sweatshirt3 from '../images/suichari/суитшърт с цип и качулка 85лв.jpg';

const Sweatshirts = () => {
    const navigate = useNavigate();
    const sweatshirts = [
        {
            id: 1,
            title: "Женски суитшърт - бял",
            price: 75.00,
            image: sweatshirt1,
            color: "Бяло",
            gender: "Дамски" 
        },
        {
            id: 2,
            title: "Мъжки суитшърт с цип - зелен",
            price: 80.00,
            image: sweatshirt2,
            color: "Зелен",
            gender: "Мъжки"
        },
        {
            id: 3,
            title: "Мъжки суитшърт с цип и качулка - черен",
            price: 85.00,
            image: sweatshirt3,
            color: "Черно",
            gender: "Мъжки"
        }
    ];

    const handleProductClick = (sweatshirt) => {
        navigate(`/sweatshirts/${sweatshirt.id}`, {
            state: {
                image: sweatshirt.image,
                title: sweatshirt.title,
                price: sweatshirt.price,
                description: 'Качествен суитшърт с традиционни български мотиви. Топъл и удобен за всеки сезон.',
                color: sweatshirt.color,
                gender: sweatshirt.gender
            }
        });
    };

    return (
        <main className="tshirts-page">
            <h1 className="tshirts-title">Суичъри с Български Мотиви</h1>
            
            <div className="product-grid">
                {sweatshirts.map(sweatshirt => (
                    <div 
                        key={sweatshirt.id} 
                        className="product-card"
                        onClick={() => handleProductClick(sweatshirt)}
                    >
                        <div className="product-image-container">
                            <img src={sweatshirt.image} alt={sweatshirt.title} />
                        </div>
                        <div className="product-info">
                            <h3>{sweatshirt.title}</h3>
                            <p className="price">{sweatshirt.price.toFixed(2)} лв.</p>
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