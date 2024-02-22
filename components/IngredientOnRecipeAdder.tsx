import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { colors } from '../assets/theme';
import { RecipeIngredient } from '../types/RecipeIngredient';
import { Ingredient } from '../types/Ingredient';
import Dialog from '@rneui/themed/dist/Dialog';
import { Button, Input } from '@rneui/base';

type props = {
    setSearchTerm: Dispatch<SetStateAction<string>>,
    setNewFinalIngredients: Dispatch<SetStateAction<RecipeIngredient[]>>,
}

const IngredientOnRecipeAdder = ({ setSearchTerm, setNewFinalIngredients } : props) => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState("");

    const handleAdd = () => {
        setNewFinalIngredients(prev => [...prev, {id: "-123", amount: amount, ingredientName: name, ingredientPrice: price, ingredientPictureUrl: "no image"}])
        setSearchTerm("");
        setIsDialogOpen(false);
    }

return(
<TouchableOpacity onPress={() => {setIsDialogOpen(true)}}>
<View style={styles.ingredientListContainer}>
<View style={styles.content}>
<Text style={styles.name}>Add new ingredient</Text>
</View>
<Dialog
      isVisible={isDialogOpen}
      onBackdropPress={() => {setIsDialogOpen(false)}}
      overlayStyle={{backgroundColor: "white"}}
    >
      <Dialog.Title title={"add new Ingredient"}/>
        <Input style={styles.input} placeholder='name' onChangeText={value => setName(value)}></Input>
        <Input style={styles.input} placeholder='price pr unit' onChangeText={value => setPrice(parseFloat(value))}></Input>
        <Input style={styles.input} placeholder='amount' onChangeText={value => setAmount(value)}></Input>
      <Button style={{padding: 6, width: 250}} buttonStyle={{backgroundColor: colors.ELEMENTS_PRIMARY}} titleStyle={{color: colors.ELEMENTS_SECONDARY, fontSize: 16}} onPress={handleAdd}>Add Ingredient</Button>
    </Dialog>
</View>
</TouchableOpacity>
)}

const styles = StyleSheet.create({
    image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.ELEMENTS_PRIMARY,
    borderRadius: 5,
    paddingHorizontal: 8,
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

export default IngredientOnRecipeAdder;