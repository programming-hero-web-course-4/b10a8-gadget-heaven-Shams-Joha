import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";


const Home = () => {
    const categoryData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-2xl font-bold mb-8 text-center">Explore Cutting-Edge Gadgets</h2>

            <div className="container">
                <div className="flex">
                    {/* Category Column */}
                    <div className="w-1/4">
                        <div role="tablist" className="tabs flex flex-col">
                            {
                                categoryData.map(category => <NavLink key={category.id} to={`/category/${category.category}`} role="tab" className={({ isActive }) =>
                                    `tab text-2xl font-thin ${isActive ? 'tab-active' : ''}`
                                } >{category.category}</NavLink>)
                            }
                        </div>

                    </div>

                    {/* Products Column */}
                    <div className="w-3/4">
                        <div>
                            <Outlet></Outlet>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;