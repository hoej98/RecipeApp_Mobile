import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RecipePage from './pages/RecipePage';
import { AppRegistry } from 'react-native';
import IngredientPage from './pages/IngredientPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import IngredientAddPage from './pages/IngredientAddPage';
import RecipeAddPage from './pages/RecipeAddPage';
import { colors } from './assets/theme';
import { IngredientProvider } from './context/IngredientContext';
import { RecipeProvider } from './context/RecipeContext';
import ShoppingListPage from './pages/ShoppingListPage';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RecipeStack = () => {
  return (
    <Stack.Navigator
     screenOptions={{
      headerStyle: {
        backgroundColor: colors.BACKGROUND_PRIMARY
      },
      headerTintColor: colors.ELEMENTS_SECONDARY
     }}
     >
      <Stack.Screen name="Recipes" component={RecipePage} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetailsPage} />
      <Stack.Screen name="AddRecipe" component={RecipeAddPage} />
    </Stack.Navigator>
  )
}

const IngredientStack = () => {
  return(
  <Stack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: colors.BACKGROUND_PRIMARY
    },
    headerTintColor: colors.ELEMENTS_SECONDARY
   }}
  >
    <Stack.Screen name="Ingredients" component={IngredientPage} />
    <Stack.Screen name="AddIngredient" component={IngredientAddPage} />
  </Stack.Navigator>
  )
}

const ShoppingListStack = () => {
  return (
    <Stack.Navigator  screenOptions={{
      headerStyle: {
        backgroundColor: colors.BACKGROUND_PRIMARY
      },
      headerTintColor: colors.ELEMENTS_SECONDARY
     }}>
      <Stack.Screen name="ShoppingList" component={ShoppingListPage} />
     </Stack.Navigator>
  )
}

const App = () => {
  return (
    <IngredientProvider>
      <RecipeProvider>
<NavigationContainer>
<Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: colors.BACKGROUND_PRIMARY, // Set background color for tab buttons
          },
          tabBarLabelStyle: {
            color: colors.ELEMENTS_SECONDARY, // Set text color for tab labels
          },
          tabBarInactiveTintColor: colors.ELEMENTS_SECONDARY,
          tabBarActiveTintColor: colors.ELEMENTS_PRIMARY
        }
        )}
      >
      <Tab.Screen name="RecipesStack" options={{headerShown: false}} component={RecipeStack}  />
      <Tab.Screen name="IngredientStack" options={{headerShown: false}} component={IngredientStack} />
      <Tab.Screen name="ShoppingListStack" options={{headerShown: false}} component={ShoppingListStack} />
  </Tab.Navigator>
</NavigationContainer>
</RecipeProvider>
</IngredientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab_container: {
    backgroundColor: colors.BACKGROUND_PRIMARY
  }
});

AppRegistry.registerComponent('RecipeApp', () => App);

export default App;
