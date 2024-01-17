import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RecipePage from './pages/RecipePage';
import { AppRegistry } from 'react-native';
import IngredientPage from './pages/IngredientPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import IngredientAddPage from './pages/IngredientAddPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RecipeStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Recipes" component={RecipePage} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetailsPage} />
    </Stack.Navigator>
  )
}

const IngredientStack = () => {
  return(
  <Stack.Navigator >
    <Stack.Screen name="Ingredients" component={IngredientPage} />
    <Stack.Screen name="AddIngredient" component={IngredientAddPage} />
  </Stack.Navigator>
  )
}

const App = () => {
  return (
<NavigationContainer>
  <Tab.Navigator>
      <Tab.Screen name="RecipesStack" options={{headerShown: false}} component={RecipeStack} />
      <Tab.Screen name="IngredientStack" options={{headerShown: false}} component={IngredientStack} />
  </Tab.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('RecipeApp', () => App);

export default App;
