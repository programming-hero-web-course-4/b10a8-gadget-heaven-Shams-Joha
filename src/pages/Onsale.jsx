import '../pages/Onsale.css'
import Header from "../components/Header";
import AllProducts from '../components/AllProducts';
import { useLoaderData } from 'react-router-dom';
import Products from '../components/Products';

const Onsale = () => {
    const products = useLoaderData();
    const hold = products.slice(0, 6);
    return (
        <>
            <div className="p-10 mb-20 bg-party flex items-center justify-center">
                <Header title={'Big Holiday Sale'} description={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} className={'text-6xl font-bold text-center text-white'}></Header>

            </div>

            <div className='container mx-auto'>
                <div className='flex flex-col justify-center items-center mb-10 gap-6'>
                    <h3 className='text-5xl font-bold text-black'>Featured Products</h3>
                    <p className='text-xl font-bold text-black'>Black Friday SALE Goinng On</p>
                    <div className="join">
                        <div>
                            <div>
                                <input className="input input-bordered join-item" placeholder="Search" />
                            </div>
                        </div>
                        <select className="select select-bordered join-item">
                            <option disabled defaultValue={'Filter'}>Filter</option>
                            <option>Laptops</option>
                            <option>Phones</option>
                            <option>Drones</option>
                        </select>
                        <div className="indicator">
                            <span className="indicator-item badge badge-secondary">new</span>
                            <button className="btn join-item">Search</button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-5">
                    {
                        hold.map(product => <div key={product.product_id} className="indicator">
                            <span className=" text-xl p-2 indicator-item badge badge-primary">new</span>
                            <div className="bg-base-300 grid  place-items-center"><Products data={product}></Products></div>
                        </div>)
                    }

                </div>

            </div>
        </>



    );
};

export default Onsale;