import { Button, Input } from '@rneui/base';
import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from "axios";

const IngredientAddPage = ({navigation, route}) => {

  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<number>();

  const {onAddIngredient} = route.params;

  return (
    <View style={styles.container}>
        <Input style={styles.input} placeholder="Ingredient Name" onChangeText={value => setName(value)} />
        <Input placeholder="Price" onChangeText={value => setPrice(parseFloat(value))} />
        <Button title="Add Ingredient" onPress={() => {onAddIngredient(name, price); navigation.navigate("Ingredients")}} />
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