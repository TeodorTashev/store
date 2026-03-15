import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../utils/productUtils';
import './TopProducts.css';

// Import product images
import tshirt4 from '../images/deca/4 тениска 35лв народна шевица.webp';
import tshirt10 from '../images/tenishki/10 тениска 40лв Шевица - Казичене.webp';
import tshirt30 from '../images/tenishki/30 тениска 45лв Шевица 5.webp';
// Note: The actual image filenames still use "суитшърт" until they are renamed on disk
import sweatshirtGreen from '../images/suichari/суитшърт с цип 80лв Кончета.webp';
import kidSweatshirt1 from '../images/deca/детски суитшърт 1 с цип и качулка 65лв народна шевица.webp';
import accessory from '../images/aksesuari/скънчи 10lv.webp';

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
            title: 'Детска тениска с народна шевица',
            price: 20.00,
            alt: 'Детска тениска с красива народна шевица - традиционен български мотив за деца',
            detailsPath: '/kids/tshirt4',
            state: {
                image: tshirt4,
                title: 'Детска тениска с народна шевица',
                price: 20.00,
                description: 'Качествена детска дреха с традиционни български мотиви. Изработена от мек, приятен за детската кожа памук. Бродирането го правим машинно!'
            }
        },
        {
            id: 10,
            image: tshirt10,
            title: 'Тениска с шевица Казичене',
            price: 25.00,
            alt: 'Тениска с шевица от Казичене - автентичен български народен мотив на модерна тениска',
            detailsPath: '/tshirts/10',
            state: {
                image: tshirt10,
                title: 'Тениска с шевица Казичене',
                price: 25.00,
                description: 'Памучна тениска с традиционни български мотиви. Високо качество не изгубва цвета си. Бродирането го правим машинно!'
            }
        },
        {
            id: 30,
            image: tshirt30,
            title: 'Тениска с шевица',
            price: 28.00,
            alt: 'Елегантна тениска с българска шевица - етно мотив с традиционна бродерия',
            detailsPath: '/tshirts/30',
            state: {
                image: tshirt30,
                title: 'Тениска с шевица',
                price: 28.00,
                description: 'Памучна тениска с традиционни български мотиви. Високо качество не изгубва цвета си. Бродирането го правим машинно!'
            }
        },
        {
            id: 2,
            image: sweatshirtGreen,
            title: 'Мъжки Суитшърт с цип - зелен',
            price: 43.00,
            alt: 'Зелен мъжки суитшърт с цип и български мотив - удобен и стилен с традиционна бродерия',
            detailsPath: '/sweatshirts/2',
            state: {
                image: sweatshirtGreen,
                title: 'Мъжки Суитшърт с цип - зелен',
                price: 43.00,
                description: 'Суитшърт с традиционни български мотиви. Високо качество, удобен и топъл.'
            }
        },
        {
            id: 'sweatshirt1',
            image: kidSweatshirt1,
            title: 'Детски Суитшърт с цип и качулка',
            price: 33.23,
            alt: 'Детски суитшърт с цип, качулка и народна шевица - топла детска дреха с български мотиви',
            detailsPath: '/kids/sweatshirt1',
            state: {
                image: kidSweatshirt1,
                title: 'Детски Суитшърт с цип и качулка',
                price: 33.23,
                description: 'Качествена детска дреха с традиционни български мотиви. Изработена от мек, приятен за детската кожа памук.'
            }
        },
        {
            id: 'acc3',
            image: accessory,
            title: 'Скрънчи',
            price: 7.00,
            alt: 'Скрънчи с български етно мотиви - красив аксесоар с традиционна шевица',
            detailsPath: '/accessories/acc3',
            state: {
                image: accessory,
                title: 'Скрънчи',
                price: 7.00,
                description: 'Качествен аксесоар с традиционни български мотиви. Изработен от висококачествени материали.'
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
                        role="article"
                        aria-label={`Продукт: ${product.title}, Цена: ${formatPrice(product.price)}`}
                    >
                        <img 
                            src={product.image} 
                            alt={product.alt} 
                            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                        />
                        <h3>{product.title}</h3>
                        <p className="price">{formatPrice(product.price)}</p>
                        <div className="buy-btn-container">
                            <button 
                                className="buy-btn" 
                                onClick={e => { e.stopPropagation(); handleProductClick(product); }}
                                aria-label={`Купи ${product.title} за ${formatPrice(product.price)}`}
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