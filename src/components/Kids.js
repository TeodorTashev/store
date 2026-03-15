import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import '../nav.css';
import './product-styles.css';
import { parseProductInfo, formatPrice } from '../utils/productUtils';

// Import all kids clothing images
import kidsPolo1 from '../images/deca/1 поло-шърт тениска 40лв Български мотиви.webp';
import kidsPolo2 from '../images/deca/2 поло-шърт тениска 40лв Български мотиви 2.webp';
import kidsPolo3 from '../images/deca/3 поло-шърт тениска 40лв Български мотиви 3.webp';
import kidsSweatshirt1 from '../images/deca/детски суитшърт 1 с цип и качулка 65лв народна шевица.webp';
import kidsSweatshirt2 from '../images/deca/детски суитшърт с цип и качулка 65лв (2) Кукер.webp';
import kidsTshirt1 from '../images/deca/1 тениска 35лв детски кукер.webp';
import kidsTshirt2 from '../images/deca/2 тениска 35лв играорци.webp';
import kidsTshirt3 from '../images/deca/3 тениска 35лв Сеславци.webp';
import kidsTshirt4 from '../images/deca/4 тениска 35лв народна шевица.webp';
import kidsTshirt5 from '../images/deca/5 тениска 35лв мотиви.webp';
import kidsTshirt6 from '../images/deca/6 тениска 35лв шопската.webp';
import kidsTshirt7 from '../images/deca/7 тениска 35лв природата.webp';
import kidsTshirt8 from '../images/deca/8 тениска 35лв любов.webp';
import kidsTshirt9 from '../images/deca/9 тениска 35лв шевица.webp';
import kidsTshirt10 from '../images/deca/10 тениска 35лв детско сърце.webp';
import kidsTshirt11 from '../images/deca/11 тениска 35лв шевица 2.webp';

const Kids = () => {
    const navigate = useNavigate();

    const kidsProducts = [
        // Polo Shirts
        { 
            id: 'polo1', 
            image: kidsPolo1, 
            ...parseProductInfo('1 поло-шърт тениска 40лв Български мотиви.webp', 'kids'),
            name: "Поло тениска с Български мотиви" 
        },
        { 
            id: 'polo2', 
            image: kidsPolo2, 
            ...parseProductInfo('2 поло-шърт тениска 40лв Български мотиви 2.webp', 'kids'),
            name: "Поло тениска с Български мотиви 2" 
        },
        { 
            id: 'polo3', 
            image: kidsPolo3, 
            ...parseProductInfo('3 поло-шърт тениска 40лв Български мотиви 3.webp', 'kids'),
            name: "Поло тениска с Български мотиви 3" 
        },
        
        // Sweatshirts
        { 
            id: 'sweatshirt1', 
            image: kidsSweatshirt1, 
            ...parseProductInfo('детски суитшърт 1 с цип и качулка 65лв народна шевица.webp', 'kids'),
            name: "Детски Суитшърт с цип и качулка Народна шевица" 
        },
        { 
            id: 'sweatshirt2', 
            image: kidsSweatshirt2, 
            ...parseProductInfo('детски суитшърт с цип и качулка 65лв (2) Кукер.webp', 'kids'),
            name: "Детски Суитшърт с цип и качулка Кукер" 
        },
        
        // Regular T-shirts
        { 
            id: 'tshirt1', 
            image: kidsTshirt1, 
            ...parseProductInfo('1 тениска 35лв детски кукер.webp', 'kids'),
            name: "Детска тениска Кукер" 
        },
        { 
            id: 'tshirt2', 
            image: kidsTshirt2, 
            ...parseProductInfo('2 тениска 35лв играорци.webp', 'kids'),
            name: "Детска тениска Играорци" 
        },
        { 
            id: 'tshirt3', 
            image: kidsTshirt3, 
            ...parseProductInfo('3 тениска 35лв Сеславци.webp', 'kids'),
            name: "Детска тениска Сеславци" 
        },
        { 
            id: 'tshirt4', 
            image: kidsTshirt4, 
            ...parseProductInfo('4 тениска 35лв народна шевица.webp', 'kids'),
            name: "Детска тениска Народна шевица" 
        },
        { 
            id: 'tshirt5', 
            image: kidsTshirt5, 
            ...parseProductInfo('5 тениска 35лв мотиви.webp', 'kids'),
            name: "Детска тениска Мотиви" 
        },
        { 
            id: 'tshirt6', 
            image: kidsTshirt6, 
            ...parseProductInfo('6 тениска 35лв шопската.webp', 'kids'),
            name: "Детска тениска Шопската" 
        },
        { 
            id: 'tshirt7', 
            image: kidsTshirt7, 
            ...parseProductInfo('7 тениска 35лв природата.webp', 'kids'),
            name: "Детска тениска Природата" 
        },
        { 
            id: 'tshirt8', 
            image: kidsTshirt8, 
            ...parseProductInfo('8 тениска 35лв любов.webp', 'kids'),
            name: "Детска тениска Любов" 
        },
        { 
            id: 'tshirt9', 
            image: kidsTshirt9, 
            ...parseProductInfo('9 тениска 35лв шевица.webp', 'kids'),
            name: "Детска тениска Шевица" 
        },
        { 
            id: 'tshirt10', 
            image: kidsTshirt10, 
            ...parseProductInfo('10 тениска 35лв детско сърце.webp', 'kids'),
            name: "Детска тениска Сърце" 
        },
        { 
            id: 'tshirt11', 
            image: kidsTshirt11, 
            ...parseProductInfo('11 тениска 35лв шевица 2.webp', 'kids'),
            name: "Детска тениска Шевица 2" 
        }
    ];

    const handleProductClick = (product) => {
        navigate(`/kids/${product.id}`, {
            state: {
                image: product.image,
                title: product.name,
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
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="price">{formatPrice(product.price)}</p>
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