import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import '../nav.css';
import './product-styles.css';
import { formatPrice } from '../utils/productUtils';

// Import accessory images
import accessory3 from '../images/aksesuari/скънчи 10lv.webp';

const Accessories = () => {
    const navigate = useNavigate();
    
    const accessories = [
        {
            id: 'acc3',
            image: accessory3,
            name: 'Скрънчи',
            price: 7.00
        }
    ];

    const handleProductClick = (accessory) => {
        navigate(`/accessories/${accessory.id}`, {
            state: {
                image: accessory.image,
                title: accessory.name,
                price: accessory.price,
                description: 'Качествен аксесоар с традиционни български мотиви. Изработен от висококачествени материали.'
            }
        });
    };

    return (
        <main className="accessories-page">
            <h1 className="accessories-title">Аксесоари с Български Мотиви</h1>
            <div className="product-grid">
                {accessories.map((accessory) => (
                    <div key={accessory.id} className="product-card" onClick={() => handleProductClick(accessory)}>
                        <div className="product-image-container">
                            <img src={accessory.image} alt={accessory.name} />
                        </div>
                        <div className="product-info">
                            <h3>{accessory.name}</h3>
                            <p className="price">{formatPrice(accessory.price)}</p>
                            <button 
                                className="buy-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleProductClick(accessory);
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

export default Accessories; 