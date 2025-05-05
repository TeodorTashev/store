import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import '../nav.css';
import './product-styles.css';

// Import all t-shirt images
import tshirt1 from '../images/tenishki/1 тениска 40лв.jpg';
import tshirt2 from '../images/tenishki/2 тениска 40лв.jpg';
import tshirt3 from '../images/tenishki/3 тениска 40лв.jpg';
import tshirt9 from '../images/tenishki/9 тениска 40лв.jpg';
import tshirt10 from '../images/tenishki/10 тениска 40лв.jpg';
import tshirt11 from '../images/tenishki/11 тениска 40лв.jpg';
import tshirt12 from '../images/tenishki/12 тениска 40лв.jpg';
import tshirt13 from '../images/tenishki/13 тениска 45лв.jpg';
import tshirt14 from '../images/tenishki/14 тениска 45лв.jpg';
import tshirt15 from '../images/tenishki/15 тениска 45лв.jpg';
import tshirt16 from '../images/tenishki/16 тениска 45лв.jpg';
import tshirt17 from '../images/tenishki/17 тениска 45лв.jpg';
import tshirt18 from '../images/tenishki/18 тениска 45лв.jpg';
import tshirt19 from '../images/tenishki/19 тениска 45лв.jpg';
import tshirt20 from '../images/tenishki/20 тениска 45лв.jpg';
import tshirt21 from '../images/tenishki/21 тениска 45лв.jpg';
import tshirt22 from '../images/tenishki/22 тениска 45лв.jpg';
import tshirt23 from '../images/tenishki/23 тениска 45лв.jpg';
import tshirt24 from '../images/tenishki/24 тениска 45лв.jpg';
import tshirt25 from '../images/tenishki/25 тениска 45лв.jpg';
import tshirt26 from '../images/tenishki/26 тениска 45лв.jpg';
import tshirt27 from '../images/tenishki/27 тениска 45лв.jpg';
import tshirt28 from '../images/tenishki/28 тениска 45лв.jpg';
import tshirt29 from '../images/tenishki/29 тениска 45лв (2).jpg';
import tshirt30 from '../images/tenishki/30 тениска 45лв.jpg';
import tshirt31 from '../images/tenishki/31 тениска 45лв.jpg';
import tshirt32 from '../images/tenishki/32 тениска 45лв.jpg';
import tshirt34 from '../images/tenishki/34 тениска 45лв.jpg';

const Tshirts = () => {
    const navigate = useNavigate();

    const tshirts = [
        { id: 1, image: tshirt1, title: 'Тениска с шевица 1', price: 40 },
        { id: 2, image: tshirt2, title: 'Тениска с шевица 2', price: 40 },
        { id: 3, image: tshirt3, title: 'Тениска с шевица 3', price: 40 },
        { id: 9, image: tshirt9, title: 'Тениска с шевица 9', price: 40 },
        { id: 10, image: tshirt10, title: 'Тениска с шевица 10', price: 40 },
        { id: 11, image: tshirt11, title: 'Тениска с шевица 11', price: 40 },
        { id: 12, image: tshirt12, title: 'Тениска с шевица 12', price: 40 },
        { id: 13, image: tshirt13, title: 'Тениска с шевица 13', price: 45 },
        { id: 14, image: tshirt14, title: 'Тениска с шевица 14', price: 45 },
        { id: 15, image: tshirt15, title: 'Тениска с шевица 15', price: 45 },
        { id: 16, image: tshirt16, title: 'Тениска с шевица 16', price: 45 },
        { id: 17, image: tshirt17, title: 'Тениска с шевица 17', price: 45 },
        { id: 18, image: tshirt18, title: 'Тениска с шевица 18', price: 45 },
        { id: 19, image: tshirt19, title: 'Тениска с шевица 19', price: 45 },
        { id: 20, image: tshirt20, title: 'Тениска с шевица 20', price: 45 },
        { id: 21, image: tshirt21, title: 'Тениска с шевица 21', price: 45 },
        { id: 22, image: tshirt22, title: 'Тениска с шевица 22', price: 45 },
        { id: 23, image: tshirt23, title: 'Тениска с шевица 23', price: 45 },
        { id: 24, image: tshirt24, title: 'Тениска с шевица 24', price: 45 },
        { id: 25, image: tshirt25, title: 'Тениска с шевица 25', price: 45 },
        { id: 26, image: tshirt26, title: 'Тениска с шевица 26', price: 45 },
        { id: 27, image: tshirt27, title: 'Тениска с шевица 27', price: 45 },
        { id: 28, image: tshirt28, title: 'Тениска с шевица 28', price: 45 },
        { id: 29, image: tshirt29, title: 'Тениска с шевица 29', price: 45 },
        { id: 30, image: tshirt30, title: 'Тениска с шевица 30', price: 45 },
        { id: 31, image: tshirt31, title: 'Тениска с шевица 31', price: 45 },
        { id: 32, image: tshirt32, title: 'Тениска с шевица 32', price: 45 },
        { id: 34, image: tshirt34, title: 'Тениска с шевица 34', price: 45 },
    ];

    const handleProductClick = (tshirt) => {
        navigate(`/tshirts/${tshirt.id}`, {
            state: {
                image: tshirt.image,
                title: tshirt.title,
                price: tshirt.price,
                description: 'Памучна тениска с традиционни български мотиви. Високо качество, издържа на много пране, не изгубва цвета си.'
            }
        });
    };

    return (
        <main className="tshirts-page">            
            <h1 className="tshirts-title">Тениски с Български Мотиви</h1>
            
            <div className="product-grid">
                {tshirts.map((tshirt) => (
                    <div key={tshirt.id} className="product-card" onClick={() => handleProductClick(tshirt)}>
                        <div className="product-image-container">
                            <img src={tshirt.image} alt={tshirt.title} />
                        </div>
                        <div className="product-info">
                            <h3>{tshirt.title}</h3>
                            <p className="price">{tshirt.price.toFixed(2)} лв.</p>
                            <a href="#" className="buy-btn" onClick={(e) => e.stopPropagation()}>Купи</a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Tshirts; 