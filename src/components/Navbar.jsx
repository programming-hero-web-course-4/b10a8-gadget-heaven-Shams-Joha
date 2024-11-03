import { Link, NavLink } from 'react-router-dom';
import love from '../assets/like.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto mt-5 flex justify-between">
            <div>
                <Link className='text-xl font-bold' to='/'>Gadget Heaven</Link>
            </div>
            <div>
                <ul className='flex gap-6'>
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Statistics</NavLink></li>
                    <li><NavLink>Dashboard</NavLink></li>
                    <li><NavLink>On Sale</NavLink></li>
                </ul>
            </div>
            {/* Cart & Wishlist Icon */}
            <div className="flex-none">
                {/* Cart Icon */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        {/* Number */}
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* WishList Icon */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        {/* Number */}
                        <div className="indicator">
                            <img className='w-4' src={love}></img>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>

                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;