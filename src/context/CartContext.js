import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        // Initialize cart from localStorage
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        console.log("Adding to cart:", item); // For debugging
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => 
                i.id === item.id && 
                i.selectedSize === item.selectedSize && 
                i.selectedColor === item.selectedColor
            );

            if (existingItem) {
                return prevItems.map(i => 
                    i.id === item.id && 
                    i.selectedSize === item.selectedSize && 
                    i.selectedColor === item.selectedColor
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            }

            return [...prevItems, item];
        });
    };

    const removeFromCart = (itemId, selectedSize, selectedColor) => {
        setCartItems(prevItems => 
            prevItems.filter(item => 
                !(item.id === itemId && 
                  item.selectedSize === selectedSize && 
                  item.selectedColor === selectedColor)
            )
        );
    };

    const updateQuantity = (itemId, selectedSize, selectedColor, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId && 
                item.selectedSize === selectedSize && 
                item.selectedColor === selectedColor
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
} 