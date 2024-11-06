
import '@smastrom/react-rating/style.css'
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { Rating, ThinStar } from '@smastrom/react-rating'
import { addToCart, addToWishList, getPrevList } from '../utils';
import { useCart } from '../../context/HandleContext';
import { useParams } from 'react-router-dom';



// Declare it outside your component so it doesn't get re-created
const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}




const ProductDetails = ({ product }) => {


    const { updateCartAmount, updateWishListAmount } = useCart();
    const [isAddedToList, setIsAddedToList] = useState(false);

    const { product_title, product_image, category, price, description, Specification = [], availability, rating } = product;
    const hold = parseInt(rating);
    const { id } = useParams();

    useEffect(() => {
        const wishData = getPrevList();
        const isExist = wishData.find(each => parseInt(each.product_id) === parseInt(product.id));
        if (isExist) {
            setIsAddedToList(true);
        }
    }, [getPrevList, id])


    const handleCart = (product) => {

        addToCart(product);
        updateCartAmount();


    };
    const handleWishList = (product) => {
        addToWishList(product);
        updateWishListAmount();
        setIsAddedToList(true);


    }

    return (
        <div className="bg-white rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-48 container">

            <div className="flex gap-10 p-5 justify-between">
                <div className="w-2/5">
                    <img
                        src={product_image}
                        className="w-full h-[500px] rounded-lg shadow-2xl"
                        alt={`${product_title} image`}
                    />
                </div>

                <div className="w-3/5 flex-col space-y-5">
                    <h1 className="text-2xl font-bold">{product_title}</h1>
                    <p className="font-bold text-gray-600 text-lg">{`Price: $${price}`}</p>
                    <div className="flex my-2">
                        <h3 className="text-center rounded-full py-1 px-2 bg-green-50 text-green-500 border border-green-500 text-sm">
                            {`${availability ? 'In Stock' : 'Out of Stock'}`}
                        </h3>
                    </div>
                    <p className='text-gray-600'>{description}</p>

                    <div className='py-2 space-y-2'>
                        <p className='font-bold'>Specification:</p>
                        <ul className="text-gray-500 text-sm">
                            {Specification.length > 0 && Specification.map((item, index) => (
                                <li key={index}>{`${index + 1}. ${item}`}</li>
                            ))}
                        </ul>
                    </div>

                    <p className='font-bold'>Rating:</p>
                    <div className="flex gap-3 items-center m-3">

                        {

                            <Rating style={{ maxWidth: 150 }} value={hold} itemStyles={myStyles} ></Rating>
                        }
                        <span className="p-1 bg-gray-100 rounded-2xl text-xs">{rating}</span>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={() => { handleCart(product) }} className="btn bg-[#9538E2] rounded-full text-white">
                            Add to Cart <IoCartOutline size={20} />
                        </button>
                        <button disabled={isAddedToList} onClick={() => { handleWishList(product) }} className=" btn p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-300">

                            <CiHeart size={20} />
                        </button>
                        <span></span>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default ProductDetails;
