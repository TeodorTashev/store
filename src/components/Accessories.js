import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import '../nav.css';
import './product-styles.css';

// Import accessories images
import accessory1 from '../images/aksesuari/15лв.jpg';
import accessory2 from '../images/aksesuari/18лв.jpg';

const Accessories = () => {
    const navigate = useNavigate();

    const accessories = [
        { id: 'accessory1', image: accessory1, title: 'Аксесоар 1', price: 15 },
        { id: 'accessory2', image: accessory2, title: 'Аксесоар 2', price: 18 },
    ];

    const handleProductClick = (accessory) => {
        navigate(`/accessories/${accessory.id}`, {
            state: {
                image: accessory.image,
                title: accessory.title,
                price: accessory.price,
                description: 'Аксесоар с традиционни български мотиви.'
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
                            <img src={accessory.image} alt={accessory.title} />
                        </div>
                        <div className="product-info">
                            <h3>{accessory.title}</h3>
                            <p className="price">{accessory.price.toFixed(2)} лв.</p>
                            <a href="#" className="buy-btn" onClick={(e) => e.stopPropagation()}>Купи</a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Accessories; 