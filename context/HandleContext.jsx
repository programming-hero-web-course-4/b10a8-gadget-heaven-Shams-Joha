import { createContext, useContext, useState } from "react";
import { getPrevItems, getPrevList } from "../src/utils"; 

const HandleContext = createContext();

export const useCart = () => useContext(HandleContext);

export const CartProvider = ({ children }) => {
    const [cartAmount, setCartAmount] = useState(getPrevItems().length);
    const [wishListAmount, setWishListAmount] = useState(getPrevList().length);

    const updateCartAmount = () => {
        setCartAmount(getPrevItems().length);
    };

    const updateWishListAmount = () => {
        setWishListAmount(getPrevList().length);
    };

    return (
        <HandleContext.Provider value={{ cartAmount, updateCartAmount, wishListAmount, updateWishListAmount }}>
            {children}
        </HandleContext.Provider>
    );
};
