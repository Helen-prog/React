import { Link } from "react-router-dom";

function Meal({strMeal, strMealThumb, idMeal}){
    return(
        <div className="card">
            <img src={strMealThumb} alt={strMeal} />
            <h2>{strMeal}</h2>

            <div className="card-action">
                <Link to={`/meal/${idMeal}`}>Watch recipe</Link>
            </div>
        </div>
    )
}

export default Meal;