import { Ingredient } from "./Ingredient"
import { RecipeIngredient } from "./RecipeIngredient"

export type Recipe = {
    id: string,
    name: string,
    pictureUrl: string,
    recipeIngredients: RecipeIngredient[]
}