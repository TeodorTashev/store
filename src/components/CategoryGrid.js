import React from 'react';
import { Link } from 'react-router-dom';
import mainT from '../images/parva/MainT.jpg';
import mainH from '../images/parva/MainH.jpg';
import mainC from '../images/parva/MainC.png';
import mainA from '../images/parva/MainA.jpg';

function CategoryGrid() {
    const categories = [
        { image: mainT, title: 'Тениски', path: '/tshirts' },
        { image: mainH, title: 'Суичъри', path: '/sweatshirts' },
        { image: mainC, title: 'Детски дрехи', path: '/kids' },
        { image: mainA, title: 'Аксесуари', path: '/accessories' }
    ];

    return (
        <main className="container">
            <div className="category-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <Link to={category.path}>
                            <div className="category-image">
                                <img src={category.image} alt={category.title} />
                                <div className="category-title">
                                    <h3>{category.title}</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default CategoryGrid; 