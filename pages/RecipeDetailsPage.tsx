
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import IngredientItem from '../components/IngredientItemComponent';
import RecipeIngredientSearchItem from '../components/RecipeIngredientISearchtemComponent';
import RecipeDetailsIngredientItem from '../components/RecipeDetailsIngredientItemComponent';
import { Recipe } from '../types/Recipe';
import { Button, Dialog } from '@rneui/base';
import { colors } from '../assets/theme';
import axios from 'axios';

const RecipeDetailsPage = ({route, navigation}) => {

  const recipe : Recipe = route.params;

  const [isDeleting, setIsDeleting] = useState(false);

  const deleteRecipe = async (id: string) => {
    await axios.delete("https://recipeapp2.fly.dev/Recipe?id=" + id)
    navigation.navigate("Recipes")
  }

  const handleDelete = () => {
    setIsDeleting(false);
    deleteRecipe(recipe.id);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Image
        source={{ uri: recipe.pictureUrl }}
        style={styles.image}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{recipe.description}</Text>
      </View>
      <ScrollView style={styles.ingredientsContainer}>
        {recipe.recipeIngredients.map((ingredient) => {
          return (
            <RecipeDetailsIngredientItem recipeIngredient={ingredient} />
          )
        })}
        
      </ScrollView>
      <View style={styles.buttonContainer}>
    <Button style={{padding: 6, width: 120}} buttonStyle={{backgroundColor: colors.ELEMENTS_PRIMARY}} titleStyle={{color: colors.ELEMENTS_SECONDARY, fontSize: 12}}>Edit Recipe</Button>
    <Button style={{padding: 6, width: 120}} buttonStyle={{backgroundColor: colors.ELEMENTS_PRIMARY}} titleStyle={{color: colors.ELEMENTS_SECONDARY, fontSize: 12}} onPress={() => {setIsDeleting(true)}}>Delete Recipe</Button>
      </View>
      <Dialog
      isVisible={isDeleting}
      onBackdropPress={() => {setIsDeleting(false)}}
      overlayStyle={{backgroundColor: "white"}}
    >
      <Dialog.Title title={"Delete recipe with name " + recipe.name + "?"}/>
      <Button title='Delete' onPress={handleDelete} />
    </Dialog>
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20
  },
});

export default RecipeDetailsPage;