import { Children, createContext, useContext, useState } from "react";
import { getPrevItems } from "../src/utils";

const HandleContext = createContext();

export const useCart = () => useContext(HandleContext);

export const CartProvider = ({ children }) => {
    const [cartAmount, setCartAmount] = useState(getPrevItems().length);

    const updateCartAmount = () => {
        setCartAmount(getPrevItems().length);
    };

    return (
        <HandleContext.Provider value={{ cartAmount, updateCartAmount }}>
            {children}
        </HandleContext.Provider>
    );
}

