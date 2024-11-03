

const Products = ({ data }) => {
    // "product_id": "1",
    //         "product_title": "Acer Aspire 5",
    //         "product_image": "https://i.ibb.co.com/NLhLzmP/DALL-E-2024-11-04-03-49-12-Acer-Aspire-5-laptop-on-a-minimal-background-with-sleek-silver-design-ope.webp",
    //         "category": "laptop",
    //         "price": 549,
    //         "description": "Powerful and portable laptop with AMD Ryzen processor.",
    //         "Specification": [
    //             "15.6 inch Full HD",
    //             "8GB RAM",
    //             "256GB SSD",
    //             "AMD Ryzen 5"
    //         ],
    //         "availability": true,
    //         "rating": 4.5
    const { product_id, product_title, product_image, price } = data || {}


    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={product_image}
                    alt="Product Image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;