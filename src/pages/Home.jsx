import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import Categories from "../components/Categories";


const Home = () => {
    const categoryData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-2xl font-bold mb-8 text-center">Explore Cutting-Edge Gadgets</h2>

            <div className="container mx-auto">
                <div className="grid grid-cols-5 gap-5">
                    {/* Category Column */}
                    <div className="col-span-1 px-5">
                        <Categories categoryData={categoryData}></Categories>
                    </div>

                    {/* Products Column */}
                    <div className="col-span-4">

                        <Outlet></Outlet>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;