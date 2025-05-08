import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopProducts.css';

// Import product images
import tshirt4 from '../images/deca/4 тениска 35лв.jpg';
import tshirt10 from '../images/tenishki/10 тениска 40лв.jpg';
import tshirt30 from '../images/tenishki/30 тениска 45лв.jpg';
import sweatshirtGreen from '../images/suichari/суитшърт с цип 80лв.jpg';
import kidSweatshirt1 from '../images/deca/детски суитшърт 1 с цип и качулка 65лв.jpg';
import accessory from '../images/aksesuari/18лв.jpg';

function TopProducts() {
    const navigate = useNavigate();
    const productsGridRef = useRef(null);
    
    // For mobile horizontal scroll indicators
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            if (isMobile && productsGridRef.current) {
                // Add smooth scrolling to the products grid
                productsGridRef.current.scrollLeft = 0;
            }
        };
        
        // Initialize
        handleResize();
        
        // Add resize listener
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const products = [
        {
            id: 'tshirt4',
            image: tshirt4,
            title: 'Детска тениска 4',
            price: 35.00,
            detailsPath: '/kids/tshirt4',
            state: {
                image: tshirt4,
                title: 'Детска тениска 4',
                price: 35.00,
                description: 'Качествена детска дреха с традиционни български мотиви. Изработена от мек, приятен за детската кожа памук. Бродирането го правим машинно!'
            }
        },
        {
            id: 10,
            image: tshirt10,
            title: 'Тениска с шевица 10',
            price: 40.00,
            detailsPath: '/tshirts/10',
            state: {
                image: tshirt10,
                title: 'Тениска с шевица 10',
                price: 40.00,
                description: 'Памучна тениска с традиционни български мотиви. Високо качество не изгубва цвета си. Бродирането го правим машинно!'
            }
        },
        {
            id: 30,
            image: tshirt30,
            title: 'Тениска с шевица 30',
            price: 45.00,
            detailsPath: '/tshirts/30',
            state: {
                image: tshirt30,
                title: 'Тениска с шевица 30',
                price: 45.00,
                description: 'Памучна тениска с традиционни български мотиви. Високо качество не изгубва цвета си. Бродирането го правим машинно!'
            }
        },
        {
            id: 2,
            image: sweatshirtGreen,
            title: 'Мъжки суитшърт с цип - зелен',
            price: 80.00,
            detailsPath: '/sweatshirts/2',
            state: {
                image: sweatshirtGreen,
                title: 'Мъжки суитшърт с цип - зелен',
                price: 80.00,
                description: 'Суитшърт с традиционни български мотиви. Високо качество, удобен и топъл.'
            }
        },
        {
            id: 'sweatshirt1',
            image: kidSweatshirt1,
            title: 'Детски суитшърт 1',
            price: 65.00,
            detailsPath: '/kids/sweatshirt1',
            state: {
                image: kidSweatshirt1,
                title: 'Детски суитшърт 1',
                price: 65.00,
                description: 'Качествена детска дреха с традиционни български мотиви. Изработена от мек, приятен за детската кожа памук.'
            }
        },
        {
            id: 'accessory2',
            image: accessory,
            title: 'Аксесоар',
            price: 18.00,
            detailsPath: '/accessories/accessory2',
            state: {
                image: accessory,
                title: 'Аксесоар 2',
                price: 18.00,
                description: 'Аксесоар с традиционни български мотиви.'
            }
        }
    ];

    const handleProductClick = (product) => {
        navigate(product.detailsPath, { state: product.state });
    };

    return (
        <section className="top-products">
            <h2>Топ продукти</h2>
            <div className="products-grid" ref={productsGridRef}>
                {products.map((product, index) => (
                    <div 
                        key={index} 
                        className="product-card"
                        onClick={() => handleProductClick(product)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p className="price">{product.price.toFixed(2)} лв.</p>
                        <div className="buy-btn-container">
                            <button 
                                className="buy-btn" 
                                onClick={e => { e.stopPropagation(); handleProductClick(product); }}
                            >
                                Купи
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TopProducts; 