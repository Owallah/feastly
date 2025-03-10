import { useEffect } from "react";
import "../assets/styles/HomePage.css";
import MealList from "../components/MealList";
import useMealsStore from "../context/useMealsStore";
import CategoryFilter from "../components/CategoryFilter";


const HomePage = () => {
    const { fetchCategories } = useMealsStore();

    useEffect(() => {
      fetchCategories();
    }, [fetchCategories])
  
  return <section className="home container">
    <h1>HomePage</h1>
    <CategoryFilter />
    <MealList query="" />
  </section>;
};

export default HomePage;
