import React from 'react';
import './AboutUs.css';
import aboutImage from '../images/parva/firstpage3.jpg';

function AboutUs() {
    return (
        <section className="about-us">
            <div className="about-image">
                <img src={aboutImage} alt="About Ethnobrodery" />
            </div>
            <div className="about-content">
                <h2>За Ethnobrodery</h2>
                <p>
                    Ethnobrodery е създаден с много ентусиазъм и любов към българските традиции! 
                    Стремим се да се отличаваме, като предлагаме уникални ръчно бродирани дрехи и 
                    аксесоари, които няма да намерите другаде. Подбираме внимателно материалите, 
                    с които работим, за да получите най-добрите продукти на най-добра цена!
                </p>
                <div className="features">
                    <div className="feature">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/189/189792.png" 
                            alt="Бърза доставка" 
                        />
                        <div>Бърза доставка</div>
                    </div>
                    <div className="feature">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/190/190411.png" 
                            alt="Сигурно плащане" 
                        />
                        <div>Сигурно плащане</div>
                    </div>
                    <div className="feature">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/190/190406.png" 
                            alt="Опция преглед" 
                        />
                        <div>Опция преглед</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs; 