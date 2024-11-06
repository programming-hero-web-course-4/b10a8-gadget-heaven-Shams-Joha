import { Link, NavLink, useLocation } from 'react-router-dom';
import love from '../assets/like.png';
import { useCart } from '../../context/HandleContext';
import { Helmet } from 'react-helmet-async';

const Navbar = () => {
    const location = useLocation();

    // Background and Text Color and page title
    let pageTitle
    let bgColor;
    let textColor;
    switch (location.pathname) {
        case '/dashboard':
            bgColor = 'bg-white';
            textColor = 'text-black';
            pageTitle = 'Dashboard - Gadget Heaven';
            break;
        case '/statistics':
            bgColor = 'bg-white';
            textColor = 'text-black';
            pageTitle = 'Statistics - Gadget Heaven';
            break;
        case '/':
            bgColor = 'bg-transparent';
            textColor = 'text-white';
            pageTitle = 'Home - Gadget Heaven';
            break;
        case '/category/MacBook':
            bgColor = 'bg-transparent';
            textColor = 'text-white';
            pageTitle = 'Home - Gadget Heaven';
            break;
        case '/category/Accessories':
            bgColor = 'bg-transparent';
            textColor = 'text-white';
            pageTitle = 'Home - Gadget Heaven';
            break;
        case '/category/Laptops':
            bgColor = 'bg-transparent';
            textColor = 'text-white';
            pageTitle = 'Home - Gadget Heaven';
            break;
        case '/category/Phones':
            bgColor = 'bg-transparent';
            textColor = 'text-white';
            pageTitle = 'Home - Gadget Heaven';
            break;
        case '/category/All%20Product':
            bgColor = 'bg-transparent';
            textColor = 'text-white';
            pageTitle = 'Home - Gadget Heaven';
            break;
        case '/category/Iphone':
            bgColor = 'bg-transparent';
            textColor = 'text-white';
            pageTitle = 'Home - Gadget Heaven';
            break;
        case '/category/Smart%20Watches':
            bgColor = 'bg-transparent';
            textColor = 'text-white';
            pageTitle = 'Home - Gadget Heaven';
            break;
        case '/onsale':
            bgColor = 'bg-white';
            textColor = 'text-black';
            pageTitle = 'On Sale - Gadget Heaven';
            break;
        default:
            pageTitle = 'Gadget Heaven';
            bgColor = 'bg-white';
            textColor = 'text-black';
    }

    const { cartAmount, wishListAmount } = useCart();

    return (
        <div className='mt-10'>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={`You are in ${pageTitle}`} />
            </Helmet>
            {/* Navbar */}
            <div className={`navbar ${bgColor} ${location.pathname === '/' ? 'container mx-auto' : 'w-full'} px-20 flex justify-between relative z-10 items-center`}>
                <div>
                    <Link className={`text-xl font-bold ${textColor}`} to='/'>Gadget Heaven</Link>
                </div>
                <div>
                    <ul className='flex gap-6 text-base'>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? `${textColor} font-bold underline` : textColor}`
                            }
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? `${textColor} font-bold underline` : textColor}`
                            }
                            to='/statistics'
                        >
                            Statistics
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? `${textColor} font-bold underline` : textColor}`
                            }
                            to='/dashboard'
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? `${textColor} font-bold underline` : textColor}`
                            }
                            to='/onsale'
                        >
                            On Sale
                        </NavLink>
                    </ul>
                </div>
                {/* Cart & Wishlist Icon */}
                <div className="flex gap-4">
                    {/* Cart Icon */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white border border-gray-300">
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
                                <span className="badge badge-sm indicator-item">{cartAmount}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">{cartAmount} Items</span>
                                <span className="text-info"></span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* WishList Icon */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white border border-gray-300">
                            {/* Number */}
                            <div className="indicator">
                                <img className='w-4' src={love} alt="Wishlist Icon" />
                                <span className="badge badge-sm indicator-item">{wishListAmount}</span>
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
        </div>
    );
};

export default Navbar;
