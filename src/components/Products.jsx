import { Link, useNavigate } from "react-router-dom";


const Products = ({ data }) => {
    
    const { product_id, product_title, product_image, price } = data || {}
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/product/${product_id}`)
    }

    return (
        <div className="card bg-base-100  shadow-xl p-5">
            <figure>
                <img className="w-80 h-60 rounded-2xl"
                    src={product_image}
                    alt="Product Image" />
            </figure>
            <div className="flex-col items-start justify-between pt-2 space-y-3">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price} $</p>
                <div className="card-actions justify-start">
                    <button onClick={handleDetails} className="btn border border-[#9538E2] rounded-full bg-white text-[#9538E2]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Products;