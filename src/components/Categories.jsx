import { NavLink } from "react-router-dom";

const Categories = ({ categoryData }) => {
    return (
        <div role="tablist" className="tabs flex flex-col">
            {
                categoryData.map(category => <NavLink key={category.id} to={`/category/${category.category}`} role="tab" className={({ isActive }) =>
                    `tab text-2xl font-thin ${isActive ? 'tab-active' : ''}`
                } >{category.category}</NavLink>)
            }
        </div>
    );
};

export default Categories;