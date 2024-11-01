import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
  const { strCategory, idCategory } = category;
  return (
    <div>
      <NavLink
        to={`/${strCategory}`}
        className={({ isActive }) =>
          isActive
            ? "bg-slate-500 p-3 rounded-lg text-white"
            : "bg-slate-300 font-bold p-3 rounded-lg text-black hover:bg-slate-500"
        }
      >
        <button>{strCategory}</button>
      </NavLink>
    </div>
  );
};

export default Category;
