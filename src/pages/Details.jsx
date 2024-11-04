import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import { useEffect, useState } from "react";


const Details = () => {
    const { id } = useParams();
    const data = useLoaderData();
    

    const [product, setProduct] = useState({}); //Each Product is an object

    useEffect(() => {
        const singleProduct = data.find(each => parseInt(each.product_id) === parseInt(id));
        setProduct(singleProduct);
    }, [data, id])

    return (
        <div>
            <div>
                <div className="bg-[#9538E2] pb-28 mb-[500px]">
                    <Header title={'Product Details'} description={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} className={'text-2xl font-bold text-center text-white relative'}></Header>
                </div>

                <ProductDetails product={product}></ProductDetails>
            </div>
        </div>
    );
};

export default Details;