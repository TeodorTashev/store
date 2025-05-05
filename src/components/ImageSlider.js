import React, { useState, useEffect } from 'react';
import firstpage1 from '../images/parva/firstpage1.jpg';
import firstpage3 from '../images/parva/firstpage3.jpg';
import firstpage4 from '../images/parva/firstpage4.jpg';
import firstpage5 from '../images/parva/firstpage5.jpg';
import './ImageSlider.css';

function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        { image: firstpage1, title: 'Традиционни Български Мотиви' },
        { image: firstpage3, title: 'Автентични Дизайни' },
        { image: firstpage4, title: 'Съвременна Интерпретация' },
        { image: firstpage5, title: 'Българска Идентичност' }
    ];

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(current => 
            current === slides.length - 1 ? 0 : current + 1
        );
        setTimeout(() => setIsAnimating(false), 700);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(current => 
            current === 0 ? slides.length - 1 : current - 1
        );
        setTimeout(() => setIsAnimating(false), 700);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            <div 
                className="slider" 
                style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: 'transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)'
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
                        <div className="slide-content">
                            <h2>{slide.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="slider-nav">
                <button onClick={prevSlide}>&lt;</button>
                <button onClick={nextSlide}>&gt;</button>
            </div>
            
            <div className="slider-bullets">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`bullet ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider; 