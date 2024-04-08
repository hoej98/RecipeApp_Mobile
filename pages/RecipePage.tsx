import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions, Text, ScrollView } from 'react-native';
import { Button } from '@rneui/base/dist/Button';
import { colors } from '../assets/theme';
import { useFocusEffect } from '@react-navigation/native';
import RecipeCardNew from '../components/RecipeCardNew';
import { RecipeContext } from '../context/RecipeContext';

const { width } = Dimensions.get('window');

const RecipePage = ({navigation}) => {

  const col = 2;

  const {recipes, getRecipes} = useContext(RecipeContext);

  useFocusEffect(
    useCallback(() => {
      getRecipes();
    }, [])
  )

  useEffect(() => {
    getRecipes();
  }, [])

  return (
    <View style={styles.container}>
          <View style={styles.app}>
            <Button style={styles.button} buttonStyle={{borderRadius: 8, backgroundColor: colors.ELEMENTS_PRIMARY}} titleStyle={{color: colors.ELEMENTS_SECONDARY}} title="Add new Recipe" onPress={() => {navigation.navigate('AddRecipe')}}/> 
            <ScrollView contentContainerStyle={styles.listContainer}>
            {recipes.map((recipe) => {
              return <View style={{width: "50%", padding: 20}}>
                <RecipeCardNew recipe={recipe} navigation={navigation} />
              </View>
            })}
            </ScrollView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: "auto",
    margin: 10,
    backgroundColor: colors.BACKGROUND_PRIMARY,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  app: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    alignItems: 'center',
  },
  button: {
    width: 300,
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: width
  }
});

export default RecipePage;