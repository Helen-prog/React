import { getFilteredCategory } from "../../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../../components/preloader/Preloader";
import MealList from "../../components/MealList";

function Category() {
    const { name } = useParams;  // добавить ()
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name]);

    console.log("meals", meals);

    return (
        <div className="wrap">
            {
                !meals.length ? <Preloader /> : <MealList meals={meals} />
            }
        </div>
    )
}

export default Category;