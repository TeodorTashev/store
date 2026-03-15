import React, { useState, useEffect } from 'react';
import firstpage1 from '../images/parva/firstpage1.webp';
import firstpage3 from '../images/parva/firstpage3.webp';
import firstpage4 from '../images/parva/firstpage4.webp';
import firstpage5 from '../images/parva/firstpage5.webp';
import './ImageSlider.css';

function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        { 
            image: firstpage1, 
            title: 'Традиционни Български Мотиви',
            alt: 'Етно тениска с традиционни български шевици и орнаменти - ръчно бродиран дизайн'
        },
        { 
            image: firstpage3, 
            title: 'Автентични Дизайни',
            alt: 'Автентична българска шевица на модерна тениска - етно мотиви с традиционен произход'
        },
        { 
            image: firstpage4, 
            title: 'Съвременна Интерпретация',
            alt: 'Съвременни облекла с български етно мотиви - елегантно съчетание на традиция и мода'
        },
        { 
            image: firstpage5, 
            title: 'Българска Идентичност',
            alt: 'Колекция от етно облекла Ethnobrodery - българска идентичност в модерен дизайн'
        }
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

    // Preload the next slide image to prevent flashing
    useEffect(() => {
        const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        const img = new Image();
        img.src = slides[nextIndex].image;
    }, [currentSlide, slides]);

    // Define standard dimensions for slider images
    const imageWidth = 1920;
    const imageHeight = 850;

    return (
        <div className="slider-container">
            <div 
                className="slider" 
                style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: 'transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)'
                }}
            >
                {slides.map((slide, index) => {
                    return (
                        <div key={index} className="slide">
                                                            <img 
                                src={slide.image} 
                                alt={slide.alt} 
                                style={{ height: '850px', width: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
                                width={imageWidth}
                                height={imageHeight}
                                loading="eager"
                                fetchpriority="high"
                            />
                            <div className="slide-content">
                                <h2>{slide.title}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <div className="slider-nav">
                <button onClick={prevSlide} aria-label="Предишен слайд">&lt;</button>
                <button onClick={nextSlide} aria-label="Следващ слайд">&gt;</button>
            </div>
            
            <div className="slider-bullets">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`bullet ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Отиди на слайд ${index + 1}`}
                        role="button"
                        tabIndex="0"
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider; 