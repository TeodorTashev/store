import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './checkout-styles.css';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { app } from '../firebase';

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, getCartCount, clearCart } = useCart();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        deliveryMethod: 'address',
        termsAccepted: false,
        address: '',
        addressDetails: '',
        postalCode: '',
        city: ''
    });
    const [errors, setErrors] = useState({});

    // Redirect to cart if no items
    if (getCartCount() === 0) {
        navigate('/cart');
        return null;
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Моля, въведете имейл адрес';
        if (!formData.firstName) newErrors.firstName = 'Моля, въведете име';
        if (!formData.lastName) newErrors.lastName = 'Моля, въведете фамилия';
        if (!formData.phone) newErrors.phone = 'Моля, въведете телефонен номер';
        if (!formData.termsAccepted) newErrors.termsAccepted = 'Трябва да се съгласите с условията';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                console.log('Starting order submission...');
                console.log('Cart items:', cartItems);
                
                // Create order object
                const orderData = {
                    customerInfo: {
                        email: formData.email,
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        phone: formData.phone,
                    },
                    items: cartItems,
                    totalAmount: getTotalPrice(),
                    deliveryMethod: formData.deliveryMethod,
                    status: 'pending',
                    createdAt: new Date(),
                    orderNumber: `ORD-${Date.now()}`
                };

                console.log('Order data prepared:', orderData);

                // Add to Firestore
                const db = getFirestore(app);
                console.log('Firestore instance created');
                
                const ordersCollection = collection(db, 'orders');
                console.log('Orders collection reference created');
                
                const docRef = await addDoc(ordersCollection, orderData);
                console.log('Order saved with ID:', docRef.id);
                
                // Clear cart and redirect
                clearCart();
            alert('Поръчката е направена успешно! Благодарим Ви!');
            navigate('/order-success');
            } catch (error) {
                console.error("Detailed error in order submission:", error);
                alert('Възникна грешка при обработката на поръчката. Моля, опитайте отново.');
            }
        } else {
            console.log('Form validation failed:', errors);
        }
    };

    const getDeliveryPrice = () => {
        switch (formData.deliveryMethod) {
            case 'speedy':
                return 4.99;
            case 'ekont':
                return 6.29;
            case 'address':
                return 7.00;
            default:
                return 7.00;
        }
    };

    const getTotalPrice = () => {
        const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        return (subtotal + getDeliveryPrice()).toFixed(2);
    };

    return (
        <div className="checkout-page">
            <h1>Завършване на поръчката</h1>
            
            <div className="checkout-container">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h2>Вашите данни</h2>
                        
                        <div className="form-group">
                            <label htmlFor="email">Имейл *</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Имейл"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <div className="error-message">{errors.email}</div>}
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">Име *</label>
                                <input 
                                    type="text" 
                                    id="firstName" 
                                    name="firstName" 
                                    placeholder="Име"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={errors.firstName ? 'error' : ''}
                                />
                                {errors.firstName && <div className="error-message">{errors.firstName}</div>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="lastName">Фамилия *</label>
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    name="lastName" 
                                    placeholder="Фамилия"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={errors.lastName ? 'error' : ''}
                                />
                                {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="phone">Телефон *</label>
                            <div className="phone-input">
                                <div className="phone-prefix">+359</div>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="Телефон"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={errors.phone ? 'error' : ''}
                                />
                            </div>
                            {errors.phone && <div className="error-message">{errors.phone}</div>}
                        </div>
                    </div>
                    
                    <div className="form-section">
                        <h2>Адрес за доставка</h2>
                        <p className="section-subtitle">(до офис на Спиди / Еконт или до Адрес)</p>
                        
                        <div className="form-group">
                            <label>Метод на доставка</label>
                            
                            <div className="delivery-methods">
                                <div className="delivery-method">
                                    <input 
                                        type="radio" 
                                        id="speedy" 
                                        name="deliveryMethod" 
                                        value="speedy"
                                        checked={formData.deliveryMethod === 'speedy'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="speedy">
                                        Офис със Спиди
                                        <span className="delivery-price">4.99лв.</span>
                                    </label>
                                </div>
                                
                                <div className="delivery-method">
                                    <input 
                                        type="radio" 
                                        id="ekont" 
                                        name="deliveryMethod" 
                                        value="ekont"
                                        checked={formData.deliveryMethod === 'ekont'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="ekont">
                                        Офис с Еконт
                                        <span className="delivery-price">6.29лв.</span>
                                    </label>
                                </div>
                                
                                <div className="delivery-method">
                                    <input 
                                        type="radio" 
                                        id="address" 
                                        name="deliveryMethod" 
                                        value="address"
                                        checked={formData.deliveryMethod === 'address'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="address">
                                        Адрес
                                        <span className="delivery-price">7.00лв.</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <>
                            <div className="form-group">
                                <label htmlFor="address">Адрес/име на офис *</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Адрес или име на офис"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="addressDetails">Етаж, апартамент и т.н. (незадължително)</label>
                                <input
                                    type="text"
                                    id="addressDetails"
                                    name="addressDetails"
                                    placeholder="Етаж, апартамент и т.н. (по желание)"
                                    value={formData.addressDetails}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="postalCode">Пощенски код *</label>
                                    <input
                                        type="text"
                                        id="postalCode"
                                        name="postalCode"
                                        placeholder="Пощенски код"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">Град *</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        placeholder="Град"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </>
                    </div>
                    
                    <div className="form-section">
                        <h2>Начин на плащане</h2>
                        
                        <div className="payment-method">
                            <input 
                                type="radio" 
                                id="cod" 
                                name="paymentMethod" 
                                value="cod"
                                checked
                                readOnly
                            />
                            <label htmlFor="cod">
                                Плащане на куриер с Наложен Платеж
                            </label>
                        </div>
                        
                        <p className="payment-note">Дължимата сума се заплаща при получаване на поръчката.</p>
                        
                        <div className="form-group terms-group">
                            <input 
                                type="checkbox" 
                                id="terms" 
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                className={errors.termsAccepted ? 'error' : ''}
                            />
                            <label htmlFor="terms">
                                Прочетох и се съгласявам с <a href="/terms" target="_blank">правилата и условията</a> на сайта *
                            </label>
                            {errors.termsAccepted && <div className="error-message">{errors.termsAccepted}</div>}
                        </div>
                        
                        <button type="submit" className="order-button">ПОРЪЧАЙ →</button>
                    </div>
                </form>
                
                <div className="order-summary">
                    <h2>Вашата поръчка</h2>
                    
                    <div className="order-items">
                        {cartItems.map((item, index) => (
                            <div className="order-item" key={index}>
                                <div className="order-item-image">
                                    <img src={item.image} alt={item.title} />
                                    <span className="order-item-quantity">{item.quantity}</span>
                                </div>
                                <div className="order-item-details">
                                    <h3>{item.title}</h3>
                                    <div className="order-item-options">
                                        <p>Цвят: <span>{item.selectedColor}</span></p>
                                        <p>Размер: <span>{item.selectedSize}</span></p>
                                        {item.selectedGender && <p>Пол: <span>{item.selectedGender === 'male' ? 'Мъжки' : 'Дамски'}</span></p>}
                                    </div>
                                </div>
                                <div className="order-item-price">
                                    {(item.price * item.quantity).toFixed(2)} лв.
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="order-totals">
                        <div className="total-row">
                            <span>Междинна сума:</span>
                            <span>{cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)} лв.</span>
                        </div>
                        <div className="total-row">
                            <span>Доставка:</span>
                            <span>{getDeliveryPrice().toFixed(2)} лв.</span>
                        </div>
                        <div className="total-row grand-total">
                            <span>Обща сума:</span>
                            <span>{getTotalPrice()} лв.</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="privacy-notice">
                <p>Вашите лични данни ще бъдат използвани за обработка на Вашата поръчка. За повече информация <a href="/privacy">Защита на Лични Данни</a></p>
            </div>
        </div>
    );
};

export default Checkout; 