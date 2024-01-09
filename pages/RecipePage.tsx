import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RecipeCardComponent from '../components/RecipeCardComponent';
import { Recipe } from '../types/Recipe';

const recipeList: Recipe[] = [{name: "boller i karry", id: "1234567", ingredients: [{name: "Boller", price: 12, id: "123"}, {name: "Karry", price: 20, id: "321"}], pictureUrl: "https://cdn.bloggersdelight.dk/wp-content/blogs.dir/248198/files/2020/03/kvdrcover.jpg"},
{name: "Lasagne", id: "7654321", ingredients: [{name: "Lasa", price: 8, id: "2531"}, {name: "ga", price: 11, id: "9184336"}], pictureUrl: "https://mambeno.dk/wp-content/uploads/2017/11/Lasagne-med-oestershatte.jpg"}
]

const RecipePage = ({navigation}) => {
  const RecipeCard = ({recipe} : {recipe: Recipe}) => {
    return <View><RecipeCardComponent navigation={navigation} recipe={recipe} /></View>
  }

  return (
    <View style={styles.container}>
          <View style={styles.app}>
          <FlatList
            data={recipeList}
            numColumns={2}
            renderItem={({item}) => <RecipeCard recipe={item}/>}
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