// import { NavLink } from "react-router-dom";

// const Categories = ({ categoryData }) => {
//     return (
//         <div role="tablist" className="flex flex-col space-y-2">
//             {categoryData.map(category => (
//                 <NavLink
//                     key={category.id}
//                     to={`/category/${category.category}`}
//                     role="tab"
//                     className={({ isActive }) =>
//                         `text-2xl font-thin text-gray-700 border border-gray-300 rounded-md px-4 py-2 text-center transition-colors
//                         ${isActive ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-gray-100 hover:text-gray-900'}`
//                     }
//                 >
//                     {category.category}
//                 </NavLink>
//             ))}
//         </div>
//     );
// };

// export default Categories;


import { NavLink } from "react-router-dom";

const Categories = ({ categoryData }) => {
    return (
        <div className="bg-white p-5 rounded-2xl ">
            <div role="tablist" className="flex flex-col  space-y-4 items-center">
                {
                    categoryData.map(category =>
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


