import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";


const Meals = () => {
    const khabar = useLoaderData()
    const {meals}= khabar
    return (
        <div>
            <div className="grid grid-cols-5 gap-3 mt-5">
            {
                meals.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)
            }
            </div>
        </div>
    );
};

export default Meals;