import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemToRemove) => {
        const newItems = cartItems.filter(
            (item) => item.id !== itemToRemove.id
        );
        setCartItems(newItems);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.precio, 0);
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, getCartTotal }}
        >
            {children}
        </CartContext.Provider>
    );
};
