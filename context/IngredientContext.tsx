
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Ingredient } from '../types/Ingredient';
import Toast from 'react-native-toast-message';

type IngredientContextType = {
    ingredients: Ingredient[];
    getIngredients: () => Promise<void>;
    addIngredient: (name: string, price: number) => Promise<void>;
    deleteIngredient: (id: string) => Promise<void>;
}

export const IngredientContext = createContext<IngredientContextType>({
    ingredients: [],
    getIngredients: async () => {},
    addIngredient: async (name, price) => {},
    deleteIngredient: async (id) => {}
  });

export const IngredientProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const showToast = (message: string, type: 'success' | 'error') => {
    Toast.show({
      type: type,
      text1: message,
      position: 'bottom',
    });
  };

  const getIngredients = async() => {
    const temp_ingredients = await axios.get("https://recipeapp2.fly.dev/Ingredient")
    setIngredients(temp_ingredients.data)
  }

  const addIngredient = async(name: string, price: number) => {
    try {
      await axios.post("https://recipeapp2.fly.dev/Ingredient?name=" + name + "&price=" + price)
      await getIngredients();
      showToast("succesfully added ingredient", "success");
    }
    catch {
      showToast("failed to add ingredient", "error");
    }
  }

  const deleteIngredient = async(id: string) => {
    try {
      await axios.delete("https://recipeapp2.fly.dev/Ingredient?id=" + id)
      await getIngredients();
      showToast("succesfully deleted ingredient", "success");
    }
    catch{
      showToast("failed to delete ingredient", "error");
    }
  }

  return (
    <IngredientContext.Provider value={{ ingredients, getIngredients, addIngredient, deleteIngredient }}>
      {children}
      <Toast />
    </IngredientContext.Provider>
  );
};