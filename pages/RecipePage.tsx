import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RecipeCardComponent from '../components/RecipeCardComponent';

const recipeList = [1, 2, 3, 4]

const RecipePage = ({navigation}) => {
  const RecipeCard = () => {
    return <View><RecipeCardComponent navigation={navigation} /></View>
  }

  return (
    <View style={styles.container}>
          <View style={styles.app}>
          <FlatList
            data={recipeList}
            numColumns={2}
            renderItem={RecipeCard}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    marginHorizontal: "auto",
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
  }
});

export default RecipePage;