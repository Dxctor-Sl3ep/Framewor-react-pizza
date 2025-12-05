import { createContext, useState, useEffect, useContext } from 'react';
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    // 1. Initialiser le panier depuis le LocalStorage 
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('mon_panier_pizza');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('mon_panier_pizza', JSON.stringify(cart));
    }, [cart]);

    // Ajouter une pizza (ou augmenter la quantité)
    const addToCart = (pizza) => {
        setCart((prevCart) => {
            const existingPizza = prevCart.find((item) => item.id === pizza.id);
            if (existingPizza) {
                return prevCart.map((item) =>
                    item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...pizza, quantity: 1 }];
        });
    };

    // Diminuer la quantité ou retirer
    const removeFromCart = (pizzaId) => {
        setCart((prevCart) => {
            const existingPizza = prevCart.find((item) => item.id === pizzaId);
            if (existingPizza.quantity === 1) {
                return prevCart.filter((item) => item.id !== pizzaId);
            }
            return prevCart.map((item) =>
                item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    // Vider le panier
    const emptyCart = () => {
        setCart([]);
    };

    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, emptyCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};