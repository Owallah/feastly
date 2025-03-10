import { create } from "zustand"
import { Meal, MealResponse } from "../types/Meal"
import axios from "axios"


interface MealState {
    meals: Meal[]
    loading: boolean
    error: string | null
    fetchMeals: (query: string) => Promise<void>

}

const useMealsStore = create<MealState>((set) => ({
    meals: [],
    loading: false,
    error: null,

    fetchMeals: async (query: string) => {
        set({ loading: true, error: null})
        try {
            const response = await axios.get<MealResponse>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            set({ meals: response.data.meals || [], loading: false})
        } catch (error) {
            set({ error: error instanceof Error ? error.message : "Error fetching meals", loading: false})
        }
    }
}))

export default useMealsStore