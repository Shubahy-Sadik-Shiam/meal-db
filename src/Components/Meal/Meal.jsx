import { NavLink, useParams } from "react-router-dom";

const Meal = ({meal}) => {
    const {strMeal, strMealThumb, idMeal} = meal
    const params = useParams()
    const{category} = params;
    return (
        <div className="mt-5 border-2 flex flex-col border-gray-300 p-3 rounded-lg">
                        <div>
                <img className="w-60 rounded-lg" src={strMealThumb} alt="" />
            </div>
            <h1 className="text-2xl font-bold mb-2 flex-grow">{strMeal}</h1>
            {
                <NavLink to={`/${category}/${idMeal}`}><button className="border border-gray-300 p-2 rounded-lg mt-3 hover:bg-slate-300 font-bold">See Details</button></NavLink>
            }
        </div>
    );
};

export default Meal;