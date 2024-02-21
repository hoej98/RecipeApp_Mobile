import { RecipeIngredient } from "./RecipeIngredient"

export type Recipe = {
    id: string,
    name: string,
    pictureUrl: string,
    description: string,
    recipeIngredients: RecipeIngredient[]
}