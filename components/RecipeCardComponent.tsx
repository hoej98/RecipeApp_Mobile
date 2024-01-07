import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from '@rneui/themed';

const RecipePage = () => {
  return (
    <View style={styles.container}>
        <Card>
            <Card.Title>Boller i Karry</Card.Title>
            <Card.Divider />
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
    width: 100,
    height: 100
  }
});

export default RecipePage;