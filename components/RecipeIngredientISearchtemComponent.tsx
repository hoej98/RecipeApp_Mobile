import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../assets/theme';
import { RecipeIngredient } from '../types/RecipeIngredient';

type props = {
    recipeIngredient: RecipeIngredient,
    setSearchTerm: Dispatch<SetStateAction<string>>,
    setIngredients: Dispatch<SetStateAction<RecipeIngredient[]>>,
    setFinalIngredients: Dispatch<SetStateAction<RecipeIngredient[]>>,
}

const RecipeIngredientSearchItem = ({ recipeIngredient, setSearchTerm, setIngredients, setFinalIngredients } : props) => {

    const [amount, setAmount] = useState<string>(recipeIngredient.amount);

return(
<TouchableOpacity onPress={() => {setSearchTerm(""); setIngredients([]); setFinalIngredients(prev => [...prev, recipeIngredient]) }}>
<View style={styles.ingredientListContainer}>
<Image source={{ uri: recipeIngredient.pictureUrl }} style={styles.image} />
<View style={styles.content}>
<Text style={styles.name}>{recipeIngredient.name}</Text>
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
    marginBottom: 4
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default RecipeIngredientSearchItem;