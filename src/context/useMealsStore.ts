import { create } from "zustand";
import { Area, Category, Meal, MealResponse } from "../types/Meal";
import axios from "axios";

interface MealState {
  meals: Meal[];
  categories: Category[];
  areas: Area[];
  randomMeal: Meal[]
  loading: boolean;
  error: string | null;
  selectedCategory: string | null;
  selectedArea: string | null;
  fetchMeals: (query: string) => Promise<void>;
  fetchCategories: () => Promise<void>;
  fetchArea: () => Promise<void>;
  fetchRandomMeal: () => Promise<void>;
  setSelectedCategory: (category: string | null) => void;
  setSelectedArea: (area: string | null) => void;
}

const useMealsStore = create<MealState>((set) => ({
  meals: [],
  categories: [],
  areas: [],
  randomMeal: [],
  loading: false,
  error: null,
  selectedCategory: null,
  selectedArea: null,

  fetchMeals: async (query: string) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<MealResponse>(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      set({ meals: response.data.meals || [], loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Error fetching meals",
        loading: false,
      });
    }
  },

  fetchRandomMeal: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<MealResponse>(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      set({ randomMeal: response.data.meals || [], loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Error fetching meals",
        loading: false,
      });
    }
  },

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<{ categories: Category[] }>(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      set({ categories: response.data.categories, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },

  setSelectedCategory: (category: string | null) => {
    set({ selectedCategory: category });
  },

  fetchArea: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<{ meals: Area[] }>(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      console.log(response.data.meals);
      
      set({ areas: response.data.meals, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },

  setSelectedArea: (area: string | null) => {
    set({ selectedArea: area });
  },
}));

export default useMealsStore;
