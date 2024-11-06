import CartItem from "../components/CartItem";
import { getPrevList } from "../utils";


const WishLayout = () => {
    const data = getPrevList();
    return (
        <div className="container my-10 mx-auto">
            <div className="flex justify-start items-center mb-5">
                <div><h2 className="font-bold text-lg">WishList</h2></div>
            </div>
            {/* Cart Products */}

            <div>
                {
                    data.length > 0 && data.map(item => <CartItem product={item} key={item.product_id} showButton={true}></CartItem>)
                }
            </div>
        </div>
    );
};

export default WishLayout;