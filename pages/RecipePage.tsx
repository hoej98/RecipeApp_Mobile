import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RecipeCardComponent from '../components/RecipeCardComponent';
import { Recipe } from '../types/Recipe';
import axios from 'axios';
import { Button } from '@rneui/base/dist/Button';
import { Ingredient } from '../types/Ingredient';
import { colors } from '../assets/theme';

const RecipePage = ({navigation}) => {

  const [recipes, setRecipes] = useState<Recipe[]>();

  const getRecipes = async() => {
    const response = await axios.get("https://recipeapp2.fly.dev/Recipe");
    setRecipes(response.data)
  }

  useEffect(() => {
    getRecipes();
  }, [])

  const RecipeCard = ({recipe} : {recipe: Recipe}) => {
    return <View><RecipeCardComponent navigation={navigation} recipe={recipe} /></View>
  }

  const handleAddRecipe = async (name: string, description: string, ingredients: string[],  ) => {
    var ingredients_formatted = ""
    ingredients.forEach((ingredient) => {ingredients_formatted = ingredients_formatted.concat(ingredients_formatted, "&ingredientIds", ingredient)})

    await axios.post("https://recipeapp2.fly.dev/Recipe?name=" + name + ingredients_formatted + "&pictureUrl=test" + "&description=" + description)
    await getRecipes();
    navigation.navigate('Recipes')
  }

  return (
    <View style={styles.container}>
          <View style={styles.app}>
            <Button style={styles.button} buttonStyle={{borderRadius: 8, backgroundColor: colors.ELEMENTS_PRIMARY}} titleStyle={{color: colors.ELEMENTS_SECONDARY}} title="Add new Recipe" onPress={() => {navigation.navigate('AddRecipe', {onAddRecipe: handleAddRecipe})}}/> 
          <FlatList
            data={recipes}
            numColumns={2}
            renderItem={({item}) => <RecipeCard recipe={item}/>}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    marginHorizontal: "auto",
    margin: 10,
    backgroundColor: colors.BACKGROUND_PRIMARY
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
    alignItems: 'center',
  },
  button: {
    width: 300,
  },
});

export default RecipePage;