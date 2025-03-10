import { Meal } from "../types/Meal"
import "../assets/styles/MealCard.css"


const MealCard: React.FC<Meal> = ({strMeal,
    strCategory,
    strArea,
    strMealThumb}) => {
  return (
    <div className="meal-card">
        <h2>{strMeal}</h2>
        <img src={strMealThumb} alt={strMeal} />
        <div className="meal-card-category">
            <p>{strArea}</p>
            <p>{strCategory}</p>
        </div>
    </div>
  )
}

export default MealCard