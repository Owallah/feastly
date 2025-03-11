import { useEffect, useState } from "react";
import "../assets/styles/HomePage.css";
import MealList from "../components/MealList";
import useMealsStore from "../context/useMealsStore";
import CategoryFilter from "../components/CategoryFilter";
import MealCard from "../components/MealCard";
import AreaFilter from "../components/AreaFilter";


const HomePage = () => {
    const { fetchCategories, fetchArea, fetchRandomMeal, randomMeal } = useMealsStore();
    const [ searchString, setSearchString] = useState("")

    useEffect(() => {
      fetchCategories();
    }, [fetchCategories])

    useEffect(() => {
        fetchRandomMeal();
      }, [fetchRandomMeal])

      //fetch area
      useEffect(() => {
        fetchArea();
      }, [fetchArea])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       fetchRandomMeal();
    //     }, 10000); // 10 seconds in milliseconds
      
    //     // Cleanup the timer if the component unmounts
    //     return () => clearTimeout(timer);
    //   }, [fetchRandomMeal]);
  
  return <section className="home container">
    <h1>HomePage</h1>
    <div className="flexCenter">
        <input type="text" className="search-box" name="search" placeholder="Search Here..." value={searchString} onChange={(e)=> setSearchString(e.target.value)} id="" />
        <CategoryFilter />
        <AreaFilter />
    </div>
    
    
    {/* // random meal goes here */}
    {randomMeal.length > 0 && (
        <div className="random-meal">
          <h2>Random Meal</h2>
          <MealCard {...randomMeal[0]} />
        </div>
      )}

    <MealList query={searchString} />
  </section>;
};

export default HomePage;
