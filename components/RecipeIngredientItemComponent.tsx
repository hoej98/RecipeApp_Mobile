import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableWithoutFeedback, Button } from 'react-native';
import { colors } from '../assets/theme';
import { RecipeIngredient } from '../types/RecipeIngredient';
import { Dialog } from '@rneui/base';

type props = {
    recipeIngredient: RecipeIngredient,
    setFinalIngredients: Dispatch<SetStateAction<RecipeIngredient[]>>,
}

const RecipeIngredientItem = ({ recipeIngredient, setFinalIngredients } : props) => {

    const [amount, setAmount] = useState<string>(recipeIngredient.amount);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
      setFinalIngredients(prev => prev.filter(ingredient => ingredient.id != recipeIngredient.id))
      setIsDeleting(false);
    }

return(
  <TouchableWithoutFeedback onLongPress={() => {setIsDeleting(true)}}>
<View style={styles.ingredientListContainer}>
<Image source={{ uri: recipeIngredient.ingredientPictureUrl }} style={styles.image} />
<View style={styles.content}>
<Text style={styles.name}>{recipeIngredient.ingredientName}</Text>
<TextInput
  style={styles.amountInput}
  placeholder="Enter text"
  value={amount}
  onChangeText={(value) => {setAmount(value); recipeIngredient.amount = value}}
/>
</View>
<Dialog
      isVisible={isDeleting}
      onBackdropPress={() => {setIsDeleting(false)}}
      overlayStyle={{backgroundColor: "white"}}
    >
      <Dialog.Title title={"Delete ingredient with name " + recipeIngredient.ingredientName + "?"}/>
      <Button title='Delete' onPress={handleDelete} />
    </Dialog>
</View>
</TouchableWithoutFeedback>
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