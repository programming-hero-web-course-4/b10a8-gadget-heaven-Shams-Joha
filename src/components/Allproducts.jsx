import { useLoaderData, useParams } from "react-router-dom";
import Products from "./Products";


const AllProducts = () => {
    const { category } = useParams();
    const data = useLoaderData();


    return (
        <div className="grid grid-cols-3 gap-5">
            {
                data.map(product => <Products key={product.product_id} data={product}></Products>)
            }

        </div>
    );
};

export default AllProducts;