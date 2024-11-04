
const getPrevItems = () => {
    const all = localStorage.getItem('cart');
    if (all) {
        const convert = JSON.parse(all);
        return convert;
    } else {
        return [];
    }
}



const addToCart = (product) => {
    const cart = getPrevItems();
    const isExist = cart.find(each => each.product_id == product.product_id);
    if (isExist) {
        return toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    // Toast
}

export { addToCart, getPrevItems };