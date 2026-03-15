import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import '../nav.css';
import './product-styles.css';
import { parseProductInfo, formatPrice } from '../utils/productUtils';

// Import all t-shirt images
import tshirt1 from '../images/tenishki/1 тениска 40лв трибагреник- канатица.webp';
import tshirt2 from '../images/tenishki/2 тениска 40лв - трибагреник - шевица.webp';
import tshirt3 from '../images/tenishki/3 тениска 40лв Крилатица.webp';
import tshirt3_2 from '../images/tenishki/3 тениска 40лв Крилатица2.webp';
import tshirt4 from '../images/tenishki/4 тениска 40лв Васил Левски.webp';
import tshirt5 from '../images/tenishki/5 тениска 40лв Шевица - Сезони.webp';
import tshirt6 from '../images/tenishki/6 тениска 40лв българка - Шевица.webp';
import tshirt7 from '../images/tenishki/7 тениска 40лв Везба.webp';
import tshirt8 from '../images/tenishki/8 тениска 40лв  Шевица.webp';
import tshirt9 from '../images/tenishki/9 тениска 40лв От родопа до пирина.webp';
import tshirt10 from '../images/tenishki/10 тениска 40лв Шевица - Казичене.webp';
import tshirt11 from '../images/tenishki/11 тениска 40лв Шевица 2.webp';
import tshirt12 from '../images/tenishki/12 тениска 40лв Земя.webp';
import tshirt13 from '../images/tenishki/13 тениска 45лв Ракия.webp';
import tshirt14 from '../images/tenishki/14 тениска 45лв Градината.webp';
import tshirt15 from '../images/tenishki/15 тениска 45лв Везба 2.webp';
import tshirt16 from '../images/tenishki/16 тениска 45лв Везба 3.webp';
import tshirt17 from '../images/tenishki/17 тениска 45лв Врабчетата.webp';
import tshirt18 from '../images/tenishki/18 тениска 45лв Роза.webp';
import tshirt19 from '../images/tenishki/19 тениска 45лв Роза 2.webp';
import tshirt20 from '../images/tenishki/20 тениска 45лв Доборо и Злото.webp';
import tshirt21 from '../images/tenishki/21 тениска 45лв Плана - Планина.webp';
import tshirt22 from '../images/tenishki/22 тениска 45лв Кончета.webp';
import tshirt23 from '../images/tenishki/23 тениска 45лв Любов.webp';
import tshirt24 from '../images/tenishki/24 тениска 45лв любов.webp';
import tshirt25 from '../images/tenishki/25 тениска 45лв Елбетица.webp';
import tshirt26 from '../images/tenishki/26 тениска 45лв Тракия.webp';
import tshirt27 from '../images/tenishki/27 тениска 45лв Шевица 3.webp';
import tshirt28 from '../images/tenishki/28 тениска 45лв Булгар.webp';
import tshirt29 from '../images/tenishki/29 тениска 45лв Шевица 4.webp';
import tshirt29_white from '../images/tenishki/29 тениска 45лв Шевица 4 бяла.webp';
import tshirt30 from '../images/tenishki/30 тениска 45лв Шевица 5.webp';
import tshirt31 from '../images/tenishki/31 тениска 45лв Народен Мотив.webp';
import tshirt32 from '../images/tenishki/32 тениска 45лв Шевица 6.webp';
import tshirt33 from '../images/tenishki/33 тениска 45лв Шевица 7.webp';
import tshirt33_white from '../images/tenishki/33 тениска 45лв Шевица 7 бяла.webp';
import tshirt34 from '../images/tenishki/34 тениска 45лв Шевица 8.webp';
import tshirt35_heart from '../images/tenishki/35 тениска 45лв Сърце.webp';
import tshirt35 from '../images/tenishki/35 тениска 45лв Шевица 9.webp';

// Import polo t-shirt images
import polo1 from '../images/teniski-polo/1 поло-шърт тениска 60лв български мотив.webp';
import polo2 from '../images/teniski-polo/2 поло-шърт тениска 65лв Богата.webp';
import polo3 from '../images/teniski-polo/3 поло-шърт тениска 60лв Гиздавата.webp';
import polo4 from '../images/teniski-polo/4 поло-шърт тениска 60лв Елбетицата.webp';
import polo5 from '../images/teniski-polo/5 поло-шърт тениска 60лв Тракия.webp';
import polo6 from '../images/teniski-polo/6 поло-шърт тениска 60лв Моминската.webp';
import polo7 from '../images/teniski-polo/7 поло-шърт тениска 60лв Народната.webp';
import polo8 from '../images/teniski-polo/8 поло-шърт тениска 65лв Майсторската.webp';
import polo9 from '../images/teniski-polo/9 поло-шърт тениска 60лв шевица.webp';
import polo10 from '../images/teniski-polo/10 поло-шърт тениска 60лв Гората.webp';

const Tshirts = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('tshirts'); // 'tshirts' or 'polo'

    const tshirts = [
        { id: 1, image: tshirt1, ...parseProductInfo('1 тениска 40лв трибагреник- канатица.webp', 'tshirts'), name: "Трибагреник – канатица" },
        { id: 2, image: tshirt2, ...parseProductInfo('2 тениска 40лв - трибагреник - шевица.webp', 'tshirts'), name: "Трибагреник – шевица" },
        { id: 3, image: tshirt3, ...parseProductInfo('3 тениска 40лв Крилатица.webp', 'tshirts'), name: "Крилатица" },
        { id: '3_2', image: tshirt3_2, ...parseProductInfo('3 тениска 40лв Крилатица2.webp', 'tshirts'), name: "Крилатица (2)" },
        { id: 4, image: tshirt4, ...parseProductInfo('4 тениска 40лв Васил Левски.webp', 'tshirts'), name: "Васил Левски" },
        { id: 5, image: tshirt5, ...parseProductInfo('5 тениска 40лв Шевица - Сезони.webp', 'tshirts'), name: "Шевица – Сезони" },
        { id: 6, image: tshirt6, ...parseProductInfo('6 тениска 40лв българка - Шевица.webp', 'tshirts'), name: "Българка – Шевица" },
        { id: 7, image: tshirt7, ...parseProductInfo('7 тениска 40лв Везба.webp', 'tshirts'), name: "Везба" },
        { id: 8, image: tshirt8, ...parseProductInfo('8 тениска 40лв Шевица.webp', 'tshirts'), name: "Шевица" },
        { id: 9, image: tshirt9, ...parseProductInfo('9 тениска 40лв От родопа до пирина.webp', 'tshirts'), name: "От родопа до пирина" },
        { id: 10, image: tshirt10, ...parseProductInfo('10 тениска 40лв Шевица - Казичене.webp', 'tshirts'), name: "Шевица – Казичене" },
        { id: 11, image: tshirt11, ...parseProductInfo('11 тениска 40лв Шевица 2.webp', 'tshirts'), name: "Шевица 2" },
        { id: 12, image: tshirt12, ...parseProductInfo('12 тениска 40лв Земя.webp', 'tshirts'), name: "Земя" },
        { id: 13, image: tshirt13, ...parseProductInfo('13 тениска 45лв Ракия.webp', 'tshirts'), name: "Ракия" },
        { id: 14, image: tshirt14, ...parseProductInfo('14 тениска 45лв Градината.webp', 'tshirts'), name: "Градината" },
        { id: 15, image: tshirt15, ...parseProductInfo('15 тениска 45лв Везба 2.webp', 'tshirts'), name: "Везба 2" },
        { id: 16, image: tshirt16, ...parseProductInfo('16 тениска 45лв Везба 3.webp', 'tshirts'), name: "Везба 3" },
        { id: 17, image: tshirt17, ...parseProductInfo('17 тениска 45лв Врабчетата.webp', 'tshirts'), name: "Врабчетата" },
        { id: 18, image: tshirt18, ...parseProductInfo('18 тениска 45лв Роза.webp', 'tshirts'), name: "Роза" },
        { id: 19, image: tshirt19, ...parseProductInfo('19 тениска 45лв Роза 2.webp', 'tshirts'), name: "Роза 2" },
        { id: 20, image: tshirt20, ...parseProductInfo('20 тениска 45лв Доборо и Злото.webp', 'tshirts'), name: "Доборо и Злото" },
        { id: 21, image: tshirt21, ...parseProductInfo('21 тениска 45лв Плана - Планина.webp', 'tshirts'), name: "Плана – Планина" },
        { id: 22, image: tshirt22, ...parseProductInfo('22 тениска 45лв Кончета.webp', 'tshirts'), name: "Кончета" },
        { id: 23, image: tshirt23, ...parseProductInfo('23 тениска 45лв Любов.webp', 'tshirts'), name: "Любов" },
        { id: 24, image: tshirt24, ...parseProductInfo('24 тениска 45лв любов.webp', 'tshirts'), name: "Любов" },
        { id: 25, image: tshirt25, ...parseProductInfo('25 тениска 45лв Елбетица.webp', 'tshirts'), name: "Елбетица" },
        { id: 26, image: tshirt26, ...parseProductInfo('26 тениска 45лв Тракия.webp', 'tshirts'), name: "Тракия" },
        { id: 27, image: tshirt27, ...parseProductInfo('27 тениска 45лв Шевица 3.webp', 'tshirts'), name: "Шевица 3" },
        { id: 28, image: tshirt28, ...parseProductInfo('28 тениска 45лв Булгар.webp', 'tshirts'), name: "Булгар" },
        { id: 29, image: tshirt29, ...parseProductInfo('29 тениска 45лв Шевица 4.webp', 'tshirts'), name: "Шевица 4" },
        { id: '29_white', image: tshirt29_white, ...parseProductInfo('29 тениска 45лв Шевица 4 бяла.webp', 'tshirts'), name: "Шевица 4 (бяла)" },
        { id: 30, image: tshirt30, ...parseProductInfo('30 тениска 45лв Шевица 5.webp', 'tshirts'), name: "Шевица 5" },
        { id: 31, image: tshirt31, ...parseProductInfo('31 тениска 45лв Народен Мотив.webp', 'tshirts'), name: "Народен Мотив" },
        { id: 32, image: tshirt32, ...parseProductInfo('32 тениска 45лв Шевица 6.webp', 'tshirts'), name: "Шевица 6" },
        { id: 33, image: tshirt33, ...parseProductInfo('33 тениска 45лв Шевица 7.webp', 'tshirts'), name: "Шевица 7" },
        { id: '33_white', image: tshirt33_white, ...parseProductInfo('33 тениска 45лв Шевица 7 бяла.webp', 'tshirts'), name: "Шевица 7 (бяла)" },
        { id: 34, image: tshirt34, ...parseProductInfo('34 тениска 45лв Шевица 8.webp', 'tshirts'), name: "Шевица 8" },
        { id: '35_heart', image: tshirt35_heart, ...parseProductInfo('35 тениска 45лв Сърце.webp', 'tshirts'), name: "Сърце" },
        { id: 35, image: tshirt35, ...parseProductInfo('35 тениска 45лв Шевица 9.webp', 'tshirts'), name: "Шевица 9" }
    ];

    const poloShirts = [
        { id: 'polo1', image: polo1, ...parseProductInfo('1 поло-шърт тениска 60лв български мотив.webp', 'polo'), name: "Поло тениска български мотив" },
        { id: 'polo2', image: polo2, ...parseProductInfo('2 поло-шърт тениска 65лв Богата.webp', 'polo'), name: "Поло тениска Богата" },
        { id: 'polo3', image: polo3, ...parseProductInfo('3 поло-шърт тениска 60лв Гиздавата.webp', 'polo'), name: "Поло тениска Гиздавата" },
        { id: 'polo4', image: polo4, ...parseProductInfo('4 поло-шърт тениска 60лв Елбетицата.webp', 'polo'), name: "Поло тениска Елбетицата" },
        { id: 'polo5', image: polo5, ...parseProductInfo('5 поло-шърт тениска 60лв Тракия.webp', 'polo'), name: "Поло тениска Тракия" },
        { id: 'polo6', image: polo6, ...parseProductInfo('6 поло-шърт тениска 60лв Моминската.webp', 'polo'), name: "Поло тениска Моминската" },
        { id: 'polo7', image: polo7, ...parseProductInfo('7 поло-шърт тениска 60лв Народната.webp', 'polo'), name: "Поло тениска Народната" },
        { id: 'polo8', image: polo8, ...parseProductInfo('8 поло-шърт тениска 65лв Майсторската.webp', 'polo'), name: "Поло тениска Майсторската" },
        { id: 'polo9', image: polo9, ...parseProductInfo('9 поло-шърт тениска 60лв шевица.webp', 'polo'), name: "Поло тениска шевица" },
        { id: 'polo10', image: polo10, ...parseProductInfo('10 поло-шърт тениска 60лв Гората.webp', 'polo'), name: "Поло тениска Гората" }
    ];

    const handleProductClick = (product) => {
        navigate(`/tshirts/${product.id}`, {
            state: {
                image: product.image,
                title: product.name,
                price: product.price,
                description: 'Памучна тениска с традиционни български мотиви. Високо качество не изгубва цвета си. Бродирането го правим машинно!'
            }
        });
    };

    const displayedProducts = selectedCategory === 'tshirts' ? tshirts : poloShirts;

    return (
        <main className="tshirts-page">            
            <h1 className="tshirts-title">Тениски с Български Мотиви</h1>
            
            <div className="category-selector">
                <button 
                    className={`category-btn ${selectedCategory === 'tshirts' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('tshirts')}
                >
                    Тениски
                </button>
                <button 
                    className={`category-btn ${selectedCategory === 'polo' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('polo')}
                >
                    Поло Тениски
                </button>
            </div>
            
            <div className="product-grid">
                {displayedProducts.map((product) => (
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

export default Tshirts; 