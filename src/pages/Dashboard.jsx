import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <div>
            <div>
                <div className="bg-[#9538E2] pb-10 ">
                    <Header title={'Dashboard'} description={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} className={'text-2xl font-bold text-center text-white'}></Header>
                    <div className="flex gap-4 items-center justify-center">
                        <NavLink
                            to={'cart'}
                            role="tab"
                            className={({ isActive }) =>
                                `btn rounded-full bg-transparent  w-28 ${isActive ? `tab-active font-bold bg-white text-[#9538E2]` : 'text-white'}`
                            } >Cart
                        </NavLink>
                        <NavLink
                            to={'wishlist'}
                            role="tab"
                            className={({ isActive }) =>
                                `btn rounded-full bg-transparent  w-28 ${isActive ? `tab-active font-bold bg-white text-[#9538E2] ` : 'text-white'}`
                            } >Wishlist
                        </NavLink>

                    </div>

                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;



