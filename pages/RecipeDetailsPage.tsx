import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeDetailsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recipe Details Page</Text>
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

export default RecipeDetailsPage;