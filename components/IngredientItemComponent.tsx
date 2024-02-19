import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Ingredient } from '../types/Ingredient';
import { Button, Dialog, Icon } from '@rneui/base';
import { colors } from '../assets/theme';

type props = {
    ingredient: Ingredient,
    handleDeleteIngredient : (id) => void
}

const IngredientItem = ({ ingredient, handleDeleteIngredient } : props) => {
  const { name, price, pictureUrl, id } = ingredient;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    handleDeleteIngredient(ingredient.id);
    setIsDeleting(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.editButton} onPress={() => console.log('Edit pressed')}>
      <Icon
        name='mode-edit'
        color={colors.ELEMENTS_SECONDARY} />
      </TouchableOpacity>

      <Image source={{ uri: pictureUrl }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>kr. {price}</Text>
      </View>

      <TouchableOpacity style={styles.removeButton} onPress={() => {setIsDeleting(true)}}>
      <Icon
        name='delete'
        color={colors.ELEMENTS_SECONDARY} />
      </TouchableOpacity>
      <Dialog
      isVisible={isDeleting}
      onBackdropPress={() => {setIsDeleting(false)}}
      overlayStyle={{backgroundColor: "white"}}
    >
      <Dialog.Title title={"Delete ingredient with name " + ingredient.name + "?"}/>
      <Button title="delete" onPress={handleDelete} />
    </Dialog>
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
