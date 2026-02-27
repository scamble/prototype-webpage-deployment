import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Context
const CartContext = createContext();

// Create a Custom Hook to use the Cart Context
export const useCart = () => {
    return useContext(CartContext);
};

// Create the Provider Component
export const CartProvider = ({ children }) => {
    // Initialize cart state from localStorage if available, otherwise empty array
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('epyc_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    // Save to localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('epyc_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Actions
    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            // Check if item already exists in cart
            const existingItemIndex = prevItems.findIndex(item => item.id === product.id);

            if (existingItemIndex >= 0) {
                // Update quantity if item exists
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += quantity;
                return updatedItems;
            } else {
                // Add new item with quantity
                return [...prevItems, { ...product, quantity }];
            }
        });

        // Optionally open the cart slider when an item is added
        setIsCartOpen(true);
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return; // Prevent 0 or negative quantities

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const toggleCart = () => {
        setIsCartOpen(prev => !prev);
    };

    // Derived Values
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    const value = {
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        getCartTotal,
        getCartCount,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
