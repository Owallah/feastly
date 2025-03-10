import { useEffect } from "react";
import useMealsStore from "../context/useMealsStore";
import MealCard from "./MealCard";
import "../assets/styles/MealList.css"

interface MealListProps {
  query: string;
}

const MealList: React.FC<MealListProps> = ({ query }) => {
  const { meals, loading, error, fetchMeals } = useMealsStore();

  useEffect(() => {
    fetchMeals(query);
  }, [query, fetchMeals]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <section>
      <h1>Meals</h1>
      <ul className="meals-list">
        {meals.map((meal) => (
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
