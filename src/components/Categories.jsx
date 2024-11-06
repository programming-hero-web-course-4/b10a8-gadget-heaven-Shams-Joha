
import { NavLink } from "react-router-dom";

const Categories = ({ categoryData }) => {

    return (
        <div className="bg-white p-5 rounded-2xl ">

            <div role="tablist" className="flex flex-col  space-y-4 items-center">
                {
                    categoryData.length > 0 && categoryData.map(category =>
                    (<NavLink key={category.id}
                        to={`/category/${category.category}`}
                        role="tab"
                        className={({ isActive }) =>
                            `pl-5 text-xl rounded-full p-2 w-52 ${isActive ? `tab-active font-bold bg-purple-500 text-white` : 'bg-gray-100'}`
                        } >{category.category}
                    </NavLink>))
                }
            </div>
        </div>

    );
};

export default Categories;


