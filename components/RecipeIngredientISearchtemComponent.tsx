import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../assets/theme';
import { RecipeIngredient } from '../types/RecipeIngredient';
import { Ingredient } from '../types/Ingredient';

type props = {
    ingredient: Ingredient,
    setSearchTerm: Dispatch<SetStateAction<string>>,
    setFinalIngredients: Dispatch<SetStateAction<RecipeIngredient[]>>,
}

const RecipeIngredientSearchItem = ({ ingredient, setSearchTerm, setFinalIngredients } : props) => {

    const [amount, setAmount] = useState<string>();

return(
<TouchableOpacity onPress={() => {setSearchTerm(""); setFinalIngredients(prev => [...prev, {ingredientName: ingredient.name, ingredientPrice: ingredient.price, ingredientPictureUrl: ingredient.pictureUrl, id: ingredient.id}]) }}>
<View style={styles.ingredientListContainer}>
<Image source={{ uri: ingredient.pictureUrl }} style={styles.image} />
<View style={styles.content}>
<Text style={styles.name}>{ingredient.name}</Text>
</View>
</View>
</TouchableOpacity>
)}

const styles = StyleSheet.create({image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
  },
  ingredientListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    width: 340,
    borderWidth: 1,
    borderColor: colors.ELEMENTS_PRIMARY,
    marginBottom: 4,
    backgroundColor: "lightgrey"
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default RecipeIngredientSearchItem;