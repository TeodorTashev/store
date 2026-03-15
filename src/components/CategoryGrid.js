import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';
import mainT from '../images/parva/MainT.webp';
import mainH from '../images/parva/MainH.webp';
import mainC from '../images/parva/MainC.webp';
import mainA from '../images/parva/MainA.webp';

function CategoryGrid() {
    const categories = [
        { 
            image: mainT, 
            title: 'Тениски', 
            path: '/tshirts',
            alt: 'Тениски с български етно мотиви и шевици' 
        },
        { 
            image: mainH, 
            title: 'Суитшърт', 
            path: '/sweatshirts',
            alt: 'Суитшърти с традиционни български бродерии' 
        },
        { 
            image: mainC, 
            title: 'Детски дрехи', 
            path: '/kids',
            alt: 'Детски дрехи с автентични български мотиви' 
        },
        { 
            image: mainA, 
            title: 'Аксесоари', 
            path: '/accessories',
            alt: 'Аксесоари с етно елементи и български шевици' 
        }
    ];

    return (
        <section className="category-section container">
            <h2 className="section-heading">Нашите категории</h2>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <Link to={category.path} aria-label={`Разгледайте ${category.title}`}>
                            <div className="category-image">
                                <LazyImage 
                                    src={category.image} 
                                    alt={category.alt} 
                                    width={600}
                                    height={450}
                                />
                                <div className="category-title">
                                    <h3>{category.title}</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CategoryGrid; 