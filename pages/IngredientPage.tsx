import { Button, ListItem, Tab } from '@rneui/base';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native'; 
import {Ingredient} from "../types/Ingredient"
import IngredientItem from '../components/IngredientItemComponent';
import { colors } from '../assets/theme';

const IngredientPage = ({navigation}) => {

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  const handleRefresh = async() => {
    setIsRefreshing(true);
    await getIngredients();
    setIsRefreshing(false);
  }

  useEffect(() => {
    getIngredients();
  }, [])

  return (
    <View style={styles.globalAppContainer}>
    <View style={styles.container}>
      <Button style={styles.button} buttonStyle={{borderRadius: 8}} title="Add new ingredient" titleStyle={{color: colors.ELEMENTS_SECONDARY}} color={colors.ELEMENTS_PRIMARY} onPress={() => {navigation.navigate('AddIngredient', {onAddIngredient: handleAddIngredient})}}/> 
      {/* <View style={styles.list}>
        {ingredients?.map((ingredient) => {
          return( 
          <ListItem style={styles.listitem}>
            <Text style={styles.text}> {ingredient.name} - {ingredient.price}kr</Text>
            <Button title="X" onPress={() => handleDeleteIngredient(ingredient.id)} />
          </ListItem>
          )
        })}
      </View> */}
      <ScrollView 
      style={{width: 360}}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}/>
      }>
      {ingredients.sort((a, b) => a.name.localeCompare(b.name))?.map((ingredient) => {
        return (
          <IngredientItem ingredient={ingredient} handleDeleteIngredient={handleDeleteIngredient} key="1"/>
        )
      })}
      </ScrollView>
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
    marginBottom: 10,
    shadowColor: colors.ELEMENTS_SECONDARY,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
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
  globalAppContainer: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_PRIMARY
  }
});

export default IngredientPage;