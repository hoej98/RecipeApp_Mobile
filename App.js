import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RecipePage from './pages/RecipePage';
import { AppRegistry } from 'react-native';
import IngredientPage from './pages/IngredientPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';

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

const App = () => {
  return (
<NavigationContainer>
  <Tab.Navigator>
      <Tab.Screen name="RecipesStack" options={{headerShown: false}} component={RecipeStack} />
      <Tab.Screen name="Ingredients" component={IngredientPage} />
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
