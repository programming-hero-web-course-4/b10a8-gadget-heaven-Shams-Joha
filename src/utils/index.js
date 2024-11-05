import { ToastContainer } from "react-toastify";
import { toast, Bounce } from "react-toastify";
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
        return toast.warn('Product Already Exists')
    }
    else {
        toast.success('Product Added to Cart')
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }


}

export { addToCart, getPrevItems };