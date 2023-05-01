import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex(
            (cartItem) => cartItem.id === item.id
        );
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].cantidad++;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...item, cantidad: 1 }]);
        }
    };

    const removeFromCart = (itemToRemove, removeOne = false) => {
        const existingItemIndex = cartItems.findIndex(
            (cartItem) => cartItem.id === itemToRemove.id
        );
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            if (removeOne) {
                updatedCartItems[existingItemIndex].cantidad--;
                if (updatedCartItems[existingItemIndex].cantidad === 0) {
                    updatedCartItems.splice(existingItemIndex, 1);
                }
            } else {
                updatedCartItems.splice(existingItemIndex, 1);
            }
            setCartItems(updatedCartItems);
        }
    };

    const getCartTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.precio * item.cantidad,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, getCartTotal }}
        >
            {children}
        </CartContext.Provider>
    );
};
