import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import RecipePage from './pages/RecipePage';
import { AppRegistry } from 'react-native';
import IngredientPage from './pages/IngredientPage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
<NavigationContainer>
  <Tab.Navigator>
      <Tab.Screen name="Recipes" component={RecipePage} />
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
