function Meal({strMeal, strMealThumb, idMeal}){
    return(
        <div className="card">
            <img src={strMealThumb} alt={strMeal} />
            <h2>{strMeal}</h2>
        </div>
    )
}

export default Meal;