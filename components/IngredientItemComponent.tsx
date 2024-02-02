import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ingredient } from '../types/Ingredient';
import { Icon } from '@rneui/base';
import { colors } from '../assets/theme';

type props = {
    ingredient: Ingredient,
    handleDeleteIngredient : (id) => void
}

const IngredientItem = ({ ingredient, handleDeleteIngredient } : props) => {
  const { name, price, imageUrl, id } = ingredient;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.editButton} onPress={() => console.log('Edit pressed')}>
      <Icon
        name='mode-edit'
        color={colors.ELEMENTS_SECONDARY} />
      </TouchableOpacity>

      <Image source={{ uri: "https://www.shutterstock.com/image-photo/tomato-isolated-on-white-background-260nw-2180957565.jpg" }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>kr. {price}</Text>
      </View>

      <TouchableOpacity style={styles.removeButton} onPress={() => {handleDeleteIngredient(id)}}>
      <Icon
        name='delete'
        color={colors.ELEMENTS_SECONDARY} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.ELEMENTS_PRIMARY,
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: colors.ELEMENTS_SECONDARY,
    shadowOffset: {width: 0, height: 4}
  },
  editButton: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    marginLeft: 10,
  },
});

export default IngredientItem;
