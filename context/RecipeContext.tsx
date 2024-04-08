import { createContext, useState } from "react";
import { Recipe } from "../types/Recipe";
import Toast from "react-native-toast-message";
import axios, { AxiosResponse } from "axios";
import { Ingredient } from "../types/Ingredient";
import { RecipeIngredient } from "../types/RecipeIngredient";


type RecipeContextType = {
    recipes: Recipe[];
    getRecipes: () => Promise<void>;
    addRecipe: (name: string, description: string, ingredients: RecipeIngredient[], newIngredients: RecipeIngredient[], pictureURL: string) => void;
    deleteRecipe: (id: string) => Promise<void>;
}

export const RecipeContext = createContext<RecipeContextType>({
    recipes: [],
    getRecipes: async () => {},
    addRecipe: (name: string, description: string, ingredients: RecipeIngredient[], newIngredients: RecipeIngredient[], pictureURL: string) => {},
    deleteRecipe: async (id: string) => {}
  });

  export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const showToast = (message: string, type: 'success' | 'error') => {
        Toast.show({
          type: type,
          text1: message,
          position: 'bottom',
        });
      };

      const getRecipes = async() => {
        const response = await axios.get("https://recipeapp2.fly.dev/Recipe");
        setRecipes(response.data)
      }

      const addRecipe = async (name: string, description: string, ingredients: RecipeIngredient[], newIngredients: RecipeIngredient[], pictureURL: string) => {
            const formattedIngredients = ingredients.map(({ id, amount }) => ({ id, amount }))
            console.log(name, description, formattedIngredients, newIngredients, pictureURL)
            try {
                const response : AxiosResponse = await axios.post('https://recipeapp2.fly.dev/Recipe/add_recipe_with_new_ingredients',
                {
                  description: description,
                  ingredients: formattedIngredients,
                  name: name,
                  newIngredients: newIngredients,
                  pictureUrl: pictureURL
                },)
                showToast("succesfully added recipe with name: " + name, "success")
                getRecipes();
            }
            catch {
                showToast("Failed to add Recipe with name " + name, "error");
                throw new Error("Failed to add recipe");
            }
        }

        const deleteRecipe = async (id: string) => {
            await axios.delete("https://recipeapp2.fly.dev/Recipe?id=" + id)
            getRecipes();
          }


      return (
        <RecipeContext.Provider value={{ recipes, getRecipes, addRecipe, deleteRecipe }}>
          {children}
          <Toast />
        </RecipeContext.Provider>
      );
  }