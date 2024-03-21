import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { Card, Icon } from '@rneui/themed';
import { StackNavigationProp } from '@react-navigation/stack';
import { Recipe } from '../types/Recipe';

type props = {
  navigation: StackNavigationProp<{}>;
  recipe: Recipe;
}

const RecipeCardComponent: React.FC<props> = ({navigation, recipe}) => {

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => {navigation.navigate('RecipeDetails', recipe)}}>
        {/* <Card containerStyle= {{width: "100%", margin: "2.5%"}}>
            <Card.Title style={{minWidth: "100%"}}>{recipe.name}</Card.Title>
            <View>
                <Image style={styles.image} source={{uri: recipe.pictureUrl}} />
            </View>
            <View style={styles.text_container}>
            <Text style={styles.text}>{recipe.recipeIngredients[0]?.ingredientPrice} Kr.</Text>
            </View>
        </Card> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    height: 100,
  },
  itemContainer: {
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text_container: {
    flex: 1,
    justifyContent: 'flex-end', // Move the element to the right
    alignItems: 'flex-end', // Align the element to the right
  },
  icon: {
    marginTop: 0
  }
});

export default RecipeCardComponent;