import { Button, Input } from '@rneui/base';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IngredientAddPage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Input style={styles.input} placeholder="Ingredient Name" />
        <Input placeholder="Price" />
        <Button title="Add Ingredient" onPress={() => {navigation.navigate('Ingredients')}} />
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
  }
});

export default IngredientAddPage;