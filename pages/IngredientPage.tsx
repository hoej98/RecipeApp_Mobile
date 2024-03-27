import { Button, ListItem, Tab } from '@rneui/base';
import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native'; 
import {Ingredient} from "../types/Ingredient"
import IngredientItem from '../components/IngredientItemComponent';
import { colors } from '../assets/theme';
import { IngredientContext } from '../context/IngredientContext';

const IngredientPage = ({navigation}) => {

  const [isRefreshing, setIsRefreshing] = useState(false);

const {ingredients, addIngredient, deleteIngredient, getIngredients } = useContext(IngredientContext);

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
      <Button style={styles.button} buttonStyle={{borderRadius: 8}} title="Add new ingredient" titleStyle={{color: colors.ELEMENTS_SECONDARY}} color={colors.ELEMENTS_PRIMARY} onPress={() => {navigation.navigate('AddIngredient', {onAddIngredient: addIngredient})}}/> 
      <ScrollView 
      style={{width: 360}}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}/>
      }>
      {ingredients.sort((a, b) => a.name.localeCompare(b.name))?.map((ingredient) => {
        return (
          <IngredientItem ingredient={ingredient} handleDeleteIngredient={deleteIngredient} key={ingredient.id}/>
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