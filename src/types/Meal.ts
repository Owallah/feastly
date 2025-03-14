export interface Meal {
    idMeal: number
    strMeal: string
    strCategory: string
    strArea: string
    strInstructions: string
    strMealThumb: string
}

export interface MealResponse {
    meals: Meal[] | null
}

export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  }

  export interface Area {
    strArea: string
  }