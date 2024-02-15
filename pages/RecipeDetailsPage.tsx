
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import IngredientItem from '../components/IngredientItemComponent';
import RecipeIngredientSearchItem from '../components/RecipeIngredientISearchtemComponent';
import RecipeDetailsIngredientItem from '../components/RecipeDetailsIngredientItemComponent';
import { Recipe } from '../types/Recipe';

const RecipeDetailsPage = ({route}) => {

  const recipe : Recipe = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Image
        source={{ uri: recipe.pictureUrl }}
        style={styles.image}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Italian style lasagna with mozzarella on top</Text>
      </View>
      <ScrollView style={styles.ingredientsContainer}>
        {recipe.ingredients.map((ingredient) => {
          return (
            <RecipeDetailsIngredientItem recipeIngredient={ingredient} />
          )
        })}
        
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  descriptionContainer: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
  },
  ingredientsContainer: {
    width: '80%',
  },
});

export default RecipeDetailsPage;