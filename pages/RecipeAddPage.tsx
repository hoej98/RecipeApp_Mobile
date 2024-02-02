import { Button, Input } from '@rneui/base';
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from "axios";
import { Ingredient } from '../types/Ingredient';
import { MultiSelect } from 'react-native-element-dropdown';

const RecipeAddPage = ({navigation, route}) => {

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [selected, setSelected] = useState([]);
  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([]);

    const getAllIngredients = async() => {
    const response = await axios.get("https://recipeapp2.fly.dev/Ingredient");
    setIngredientsList(response.data)
    }

    useEffect(() => {
        getAllIngredients();
    })

    const getSelectedIngredients = () => {
        const selectedIngredients : string[] = [];
        selected.forEach(async (item) => {
            const temp : Ingredient | undefined = ingredientsList.find((ingredient : Ingredient) => ingredient.name === item)
            if (temp !== null)
            {
                await selectedIngredients.push(temp.id)
            }
        })
        return selectedIngredients;
    }

  const {onAddRecipe} = route.params;

  return (
    <View style={styles.container}>
        <Input style={styles.input} placeholder="Recipe Name" onChangeText={value => setName(value)} />
        <Input placeholder="Description" onChangeText={value => setDescription(value)} />
        <MultiSelect 
        data={ingredientsList} 
        search 
        labelField="name" 
        valueField="name"
        onChange={(item) => {setSelected(item);}} 
        placeholder="Select Item" 
        searchPlaceholder="Search..." 
        style={styles.dropdown} 
        inputSearchStyle={styles.inputSearchStyle} 
        placeholderStyle={styles.placeholderStyle}
        value={selected}
        />
        <Button title="Add Recipe" onPress={() => {onAddRecipe(name, description, getSelectedIngredients())}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 380
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
});

export default RecipeAddPage;