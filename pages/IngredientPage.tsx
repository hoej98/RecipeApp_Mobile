import { Button, ListItem, Tab } from '@rneui/base';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IngredientPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Add new ingredient" onPress={() => {navigation.navigate('AddIngredient')}}/> 
      <View style={styles.list}>
        <ListItem style={styles.listitem}>
          <Text style={styles.text}>Tomat - 25kr</Text>
        </ListItem>
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
  },
  listitem: {
    flex: 1,
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
});

export default IngredientPage;