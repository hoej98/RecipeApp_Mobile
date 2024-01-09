import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { Card, Icon } from '@rneui/themed';
import { StackNavigationProp } from '@react-navigation/stack';

type props = {
  navigation: StackNavigationProp<{}>;
}

const RecipeCardComponent: React.FC<props> = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Card>
        <View style={styles.icon_container}>
            <Icon
              style={styles.icon}
              raised
              name='open-outline'
              type='ionicon'
              color='#f50'
              onPress={() => { navigation.navigate('RecipeDetails') }} />
              </View>
            <Card.Title>Boller i Karry</Card.Title>
            <View>
                <Image style={styles.image} source={{uri: 'https://cdn.bloggersdelight.dk/wp-content/blogs.dir/248198/files/2020/03/kvdrcover.jpg'}} />
            </View>
        </Card>
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
  image: {
    width: 132,
    height: 100
  },
  icon_container: {
    flex: 1,
    justifyContent: 'flex-end', // Move the element to the right
    alignItems: 'flex-end', // Align the element to the right
  },
  icon: {
    marginTop: 0
  }
});

export default RecipeCardComponent;