import { Outlet, useLoaderData } from "react-router-dom";
import Category from "./Category/Category";

const Home = () => {
  const category = useLoaderData();
  const { categories } = category;
  return (
    <div>
      <h1 className="text-4xl font-bold">Meal Items: {categories.length}</h1>
      <div className="grid grid-cols-5 gap-7 mt-10">
        {categories.map((category) => (
          <Category key={category.idCategory} category={category}></Category>
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
