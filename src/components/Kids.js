import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import '../nav.css';
import './product-styles.css';

// Import all kids clothing images
import kidsPolo1 from '../images/deca/1 поло-шърт тениска 40лв.jpg';
import kidsPolo2 from '../images/deca/2 поло-шърт тениска 40лв.jpg';
import kidsPolo3 from '../images/deca/3 поло-шърт тениска 40лв.jpg';
import kidsSweatshirt1 from '../images/deca/детски суитшърт 1 с цип и качулка 65лв.jpg';
import kidsSweatshirt2 from '../images/deca/детски суитшърт с цип и качулка 65лв (2).jpg';
import kidsTshirt1 from '../images/deca/1 тениска 35лв.jpg';
import kidsTshirt2 from '../images/deca/2 тениска 35лв.jpg';
import kidsTshirt3 from '../images/deca/3 тениска 35лв.jpg';
import kidsTshirt4 from '../images/deca/4 тениска 35лв.jpg';
import kidsTshirt5 from '../images/deca/5 тениска 35лв.jpg';
import kidsTshirt7 from '../images/deca/7 тениска 35лв.jpg';
import kidsTshirt8 from '../images/deca/8 тениска 35лв.jpg';
import kidsTshirt9 from '../images/deca/9 тениска 35лв.jpg';
import kidsTshirt10 from '../images/deca/10 тениска 35лв.jpg';
import kidsTshirt11 from '../images/deca/11 тениска 35лв.jpg';

const Kids = () => {
    const navigate = useNavigate();

    const kidsProducts = [
        // Polo Shirts
        { id: 'polo1', image: kidsPolo1, title: 'Детска поло тениска 1', price: 40 },
        { id: 'polo2', image: kidsPolo2, title: 'Детска поло тениска 2', price: 40 },
        { id: 'polo3', image: kidsPolo3, title: 'Детска поло тениска 3', price: 40 },
        
        // Sweatshirts
        { id: 'sweatshirt1', image: kidsSweatshirt1, title: 'Детски суитшърт 1', price: 65 },
        { id: 'sweatshirt2', image: kidsSweatshirt2, title: 'Детски суитшърт 2', price: 65 },
        
        // Regular T-shirts
        { id: 'tshirt1', image: kidsTshirt1, title: 'Детска тениска 1', price: 35 },
        { id: 'tshirt2', image: kidsTshirt2, title: 'Детска тениска 2', price: 35 },
        { id: 'tshirt3', image: kidsTshirt3, title: 'Детска тениска 3', price: 35 },
        { id: 'tshirt4', image: kidsTshirt4, title: 'Детска тениска 4', price: 35 },
        { id: 'tshirt5', image: kidsTshirt5, title: 'Детска тениска 5', price: 35 },
        { id: 'tshirt7', image: kidsTshirt7, title: 'Детска тениска 7', price: 35 },
        { id: 'tshirt8', image: kidsTshirt8, title: 'Детска тениска 8', price: 35 },
        { id: 'tshirt9', image: kidsTshirt9, title: 'Детска тениска 9', price: 35 },
        { id: 'tshirt10', image: kidsTshirt10, title: 'Детска тениска 10', price: 35 },
        { id: 'tshirt11', image: kidsTshirt11, title: 'Детска тениска 11', price: 35 },
    ];

    const handleProductClick = (product) => {
        navigate(`/kids/${product.id}`, {
            state: {
                image: product.image,
                title: product.title,
                price: product.price,
                description: 'Качествена детска дреха с традиционни български мотиви. Изработена от мек, приятен за детската кожа памук. Бродирането го правим машинно!'
            }
        });
    };

    return (
        <main className="kids-page">
            <h1 className="kids-title">Детски Дрехи с Български Мотиви</h1>
            <div className="product-grid">
                {kidsProducts.map((product) => (
                    <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                        <div className="product-image-container">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <p className="price">{product.price.toFixed(2)} лв.</p>
                            <button 
                                className="buy-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleProductClick(product);
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

export default Kids; 