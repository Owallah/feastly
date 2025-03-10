import { create } from "zustand";
import { Category, Meal, MealResponse } from "../types/Meal";
import axios from "axios";

interface MealState {
  meals: Meal[];
  categories: Category[];
  randomMeal: Meal[]
  loading: boolean;
  error: string | null;
  selectedCategory: string | null;
  fetchMeals: (query: string) => Promise<void>;
  fetchCategories: () => Promise<void>;
  fetchRandomMeal: () => Promise<void>;
  setSelectedCategory: (category: string | null) => void;
}

const useMealsStore = create<MealState>((set) => ({
  meals: [],
  categories: [],
  randomMeal: [],
  loading: false,
  error: null,
  selectedCategory: null,

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
}));

export default useMealsStore;
