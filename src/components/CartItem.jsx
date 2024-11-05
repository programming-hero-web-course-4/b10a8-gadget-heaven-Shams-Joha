import { RiDeleteBin5Line } from "react-icons/ri";

const CartItem = ({ product, showButton }) => {
    const { product_title, description, price, product_image } = product;
    return (
        <div className="rounded-2xl p-10 grid grid-cols-6 items-center">
            <div className="col-span-1">
                <img className="w-44 h-36 rounded-2xl" src={product_image}></img>
            </div>

            <div className="flex-col space-y-4 col-span-4">
                <h1 className="text-2xl font-bold">{product_title}</h1>
                <p className='text-gray-600'>{description}</p>
                <p className="font-bold text-gray-600 text-lg">{`Price: $${price}`}</p>
                {
                    showButton && (<button className="btn rounded-full text-white bg-violet-500 font-bold py-2">Add to Cart</button>)
                }
            </div>
            <div className="col-span-1">
                <button><RiDeleteBin5Line size={30} color="red" /></button>
            </div>

        </div>);
};

export default CartItem;