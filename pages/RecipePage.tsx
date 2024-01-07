import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RecipeCardComponent from '../components/RecipeCardComponent';

const RecipePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recipe Page</Text>
      <RecipeCardComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecipePage;