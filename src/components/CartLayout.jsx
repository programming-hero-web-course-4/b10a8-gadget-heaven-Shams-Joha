import { TbSortAscendingShapes } from "react-icons/tb";
import { getPrevItems } from "../utils";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const CartLayout = () => {
    const cartData = getPrevItems();
    const [data, setData] = useState(cartData);
    let totalPrice = 0;
    for (const each of cartData) {
        totalPrice += each.price;
    }
    const handleSort = () => {
        const sortedData = [...cartData].sort((a, b) => b.price - a.price)
        setData(sortedData);
    }

    return (
        <div className="container my-10 mx-auto">
            <div className="flex justify-between items-center mb-5">
                <div><h2 className="font-bold text-lg">Cart</h2></div>
                <div className="flex gap-5 items-center">
                    <p className="font-bold text-lg">Total Cost: {totalPrice}</p>
                    <button onClick={handleSort} className="font-bold border border-violet-500 text-violet-500 rounded-full btn">Sort by Price <TbSortAscendingShapes size={20} /></button>
                    {/* Show Modal On Click */}
                    <button className="btn rounded-full text-white bg-violet-500 font-bold">Purchase</button>
                </div>

            </div>
            {/* Cart Products */}
            <div>
                {
                    data.map(item => <CartItem product={item} key={item.product_id}></CartItem>)
                }
            </div>
        </div>
    );
};

export default CartLayout;