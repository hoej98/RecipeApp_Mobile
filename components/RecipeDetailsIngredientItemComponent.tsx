import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RecipeIngredient } from '../types/RecipeIngredient';
import { colors } from '../assets/theme';

type props = {
  recipeIngredient : RecipeIngredient}

const RecipeDetailsIngredientItem = ({ recipeIngredient } : props) => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: recipeIngredient.pictureUrl }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{recipeIngredient.name}</Text>
        <Text style={styles.amount}>{recipeIngredient.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Take up full width of parent container
    marginBottom: 10,
    backgroundColor: colors.ELEMENTS_PRIMARY,
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: colors.ELEMENTS_SECONDARY,
    shadowOffset: {width: 0, height: 4}
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between', // Distribute space evenly between name and amount
  },
  name: {
    flex: 1,
  },
  amount: {
    marginLeft: 10,
    fontWeight: 'bold',
  }
});

export default RecipeDetailsIngredientItem;