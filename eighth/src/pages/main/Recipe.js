import './Recipe.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { geetMealById } from '../../api';
import Preloader from '../../components/preloader/Preloader';

function Recipe(){
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        geetMealById(id).then((data) => setRecipe(data.meals[0]))
    }, [id]);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div className="wrap">
            {
                !recipe.idMeal ? <Preloader /> : 
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <div>Category: <h5>{recipe.strCategory}</h5></div>
                    {recipe.strArea ? <div>Area: <h5>{recipe.strArea}</h5></div> : null}
                    <p>{recipe.strInstructions}</p>

                    <table className="table">
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                        {
                            Object.keys(recipe).map(key => {
                                if(key.includes('Ingredient') && recipe[key]){
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{
                                                recipe[`strMeasure${key.slice(13)}`]
                                                }</td>
                                        </tr>
                                    )                                    
                                }
                                return null;
                            })
                        }
                    </table>

                    {
                        recipe.strYoutube ? (<div>
                            <h4>Video Recipe</h4>
                            <div className="video-wrap">
                                <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title="YouTube video player" allowfullscreen></iframe>
                            </div>
                        </div>) : null
                    }
                </div>
            }
            <button className='btn' onClick={goBack}>Go Back</button>
        </div>
    )
}

export default Recipe;