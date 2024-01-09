import { Ingredient } from "./Ingredient"

export type Recipe = {
    id: string,
    name: string,
    pictureUrl: string,
    ingredients: Ingredient[]
}