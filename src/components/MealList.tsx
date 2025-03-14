import { useEffect } from "react";
import useMealsStore from "../context/useMealsStore";
import MealCard from "./MealCard";
import "../assets/styles/MealList.css"

interface MealListProps {
  query: string;
}

const MealList: React.FC<MealListProps> = ({ query }) => {
  const { meals, loading, error, fetchMeals, selectedCategory, selectedArea } = useMealsStore();

  useEffect(() => {
    fetchMeals(query);
  }, [query, fetchMeals]);

  // Now we filter meals by selected category
  const filteredMeals = meals.filter((meal) => {
    const matchesCategory = selectedCategory ? meal.strCategory === selectedCategory : true
    const matchesArea = selectedArea ? meal.strArea === selectedArea : true
    return matchesCategory && matchesArea
  })

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <section>
      <h1>Meals</h1>
      <ul className="meals-list">
        {filteredMeals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            {...meal}
          />
        ))}
      </ul>
    </section>
  );
};

export default MealList;
