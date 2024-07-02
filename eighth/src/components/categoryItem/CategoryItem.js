import './CategoryItem.css';
import { Link } from 'react-router-dom';

function CategoryItem({strCategory, strCategoryThumb, strCategoryDescription}){
    return (
        <div className='card'>
            <img src={strCategoryThumb} alt={strCategory} />
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription.slice(0, 80)}</p>

            <div className="card-action">
                <Link to={`/category/${strCategory}`}>Watch category</Link>
            </div>
        </div>        
    )
}

export default CategoryItem;