import { Button, ListItem, Tab } from '@rneui/base';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import {Ingredient} from "../types/Ingredient"

const IngredientPage = ({navigation}) => {

  const [ingredients, setIngredients] = useState<Ingredient[]>();

  const getIngredients = async() => {
    const temp_ingredients = await axios.get("https://recipeapp2.fly.dev/Ingredient")
    setIngredients(temp_ingredients.data)
  }

  const handleAddIngredient = async(name: string, price: number) => {
    await axios.post("https://recipeapp2.fly.dev/Ingredient?name=" + name + "&price=" + price)
    await getIngredients();
    navigation.navigate('Ingredients')
  }

  const handleDeleteIngredient = async(id: string) => {
    await axios.delete("https://recipeapp2.fly.dev/Ingredient?id=" + id)
    await getIngredients();
  }

  useEffect(() => {
    getIngredients();
  }, [])

  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Add new ingredient" onPress={() => {navigation.navigate('AddIngredient', {onAddIngredient: handleAddIngredient})}}/> 
      <View style={styles.list}>
        {ingredients?.map((ingredient) => {
          return( 
          <ListItem style={styles.listitem}>
            <Text style={styles.text}> {ingredient.name} - {ingredient.price}kr</Text>
            <Button title="X" onPress={() => handleDeleteIngredient(ingredient.id)} />
          </ListItem>
          )
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  button: {
    width: 300,
  },
  listitem: {
    // flex: 1,
    marginTop: 12,
    width: 300,
  },
  list: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IngredientPage;