
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import IngredientItem from '../components/IngredientItemComponent';
import RecipeIngredientSearchItem from '../components/RecipeIngredientISearchtemComponent';
import RecipeDetailsIngredientItem from '../components/RecipeDetailsIngredientItemComponent';

const RecipeDetailsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lasagna</Text>
      <Image
        source={{ uri: 'https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg' }}
        style={styles.image}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Italian style lasagna with mozzarella on top</Text>
      </View>
      <ScrollView style={styles.ingredientsContainer}>
        <RecipeDetailsIngredientItem recipeIngredient={{name: "tomatoes", id: "123", price: 2, amount: "2 cans", pictureUrl: "https://www.unlockfood.ca/getmedia/76e70483-8a75-485e-b74a-59e1d4a2449c/bigstock-Open-Tin-Of-Chopped-Tomatoes-119675888.jpg.aspx?width=830&height=553"}} />
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