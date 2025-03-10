import { useEffect } from "react";
import "../assets/styles/HomePage.css";
import MealList from "../components/MealList";
import useMealsStore from "../context/useMealsStore";
import CategoryFilter from "../components/CategoryFilter";
import MealCard from "../components/MealCard";


const HomePage = () => {
    const { fetchCategories, fetchRandomMeal, randomMeal } = useMealsStore();

    useEffect(() => {
      fetchCategories();
    }, [fetchCategories])

    useEffect(() => {
        fetchRandomMeal();
      }, [fetchRandomMeal])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       fetchRandomMeal();
    //     }, 10000); // 10 seconds in milliseconds
      
    //     // Cleanup the timer if the component unmounts
    //     return () => clearTimeout(timer);
    //   }, [fetchRandomMeal]);
  
  return <section className="home container">
    <h1>HomePage</h1>
    <CategoryFilter />
    
    {/* // random meal goes here */}
    {randomMeal.length > 0 && (
        <div className="random-meal">
          <h2>Random Meal</h2>
          <MealCard {...randomMeal[0]} />
        </div>
      )}

    <MealList query="" />
  </section>;
};

export default HomePage;
