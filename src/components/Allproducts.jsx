import { useLoaderData, useParams } from "react-router-dom";
import Products from "./Products";
import { useEffect, useState } from "react";


const AllProducts = () => {
    const { category } = useParams();
   
    const data = useLoaderData();
    

    const [products, setProducts] = useState([])

    useEffect(() => {
        if (category) {
            if (category === 'All Product') {
                setProducts(data);
            }
            else {
                const filterByCategory = [...data].filter(product => product.category === category)
                setProducts(filterByCategory)
            }
        }
        else {
            setProducts(data);
        }

    }, [category, data])




    return (
        <div className="grid grid-cols-3 gap-5 mb-8">
            {
                products.map(product => <Products key={product.product_id} data={product}></Products>)
            }

        </div>
    );
};

export default AllProducts;