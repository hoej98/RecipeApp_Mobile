import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { colors } from '../assets/theme';
import { RecipeIngredient } from '../types/RecipeIngredient';

type props = {
    recipeIngredient: RecipeIngredient,
}

const RecipeIngredientItem = ({ recipeIngredient } : props) => {

    const [amount, setAmount] = useState<string>(recipeIngredient.amount);

return(
<View style={styles.ingredientListContainer}>
<Image source={{ uri: recipeIngredient.pictureUrl }} style={styles.image} />
<View style={styles.content}>
<Text style={styles.name}>{recipeIngredient.name}</Text>
<TextInput
  style={styles.amountInput}
  placeholder="Enter text"
  value={amount}
  onChangeText={(value) => {setAmount(value); recipeIngredient.amount = value}}
/>
</View>
</View>
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
  amountInput:
  {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default RecipeIngredientItem;