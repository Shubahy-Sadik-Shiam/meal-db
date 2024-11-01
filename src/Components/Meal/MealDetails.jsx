import { Link, useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
  const details = useLoaderData();
  const { meals } = details;
  const navigate = useNavigate()
  const handleBack=()=>{
    navigate(-1)
  }
  return (
    <div>
      {meals.map((detail) => (
        <div key={detail.idMeal}>
          <div className="mt-10 w-9/12 mx-auto flex flex-col justify-center items-center gap-3 border-2 border-gray-400 p-5 rounded-xl">
            <h1 className="text-4xl font-bold">{detail.strMeal}</h1>
            <img className="w-72 rounded-xl" src={detail.strMealThumb} alt="" />
            <p>Category: {detail.strCategory}</p>
            <p>Origin: {detail.strArea}</p>
            <p>Recipe: {detail.strInstructions}</p>
            <a href={detail.strYoutube}>Recipe Link: <span className="text-violet-800">{detail.strYoutube||"N/A"}</span></a>
            {
                <Link>
                 <button onClick={handleBack} className="border-2 hover:bg-slate-300 w-36 border-gray-400 rounded-xl p-3 bg-gray-200 font-bold">Back</button>
                </Link>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealDetails;
