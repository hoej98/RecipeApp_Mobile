import { Button, Input } from '@rneui/base';
import React, {useEffect, useRef, useState} from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import axios from "axios";
import { Ingredient } from '../types/Ingredient';
import { MultiSelect } from 'react-native-element-dropdown';
import Stepper from 'react-native-stepper-view';
import { colors } from '../assets/theme';
import IngredientItem from '../components/IngredientItemComponent';
import { RecipeIngredient } from '../types/RecipeIngredient';
import RecipeIngredientItem from '../components/RecipeIngredientItemComponent';
import RecipeIngredientSearchItem from '../components/RecipeIngredientISearchtemComponent';

const RecipeAddPage = ({navigation, route}) => {

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [selected, setSelected] = useState([]);
  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>([{id: "1", name: "Tomato", price: 2, pictureUrl: "https://billiggro.dk/1724-thickbox_default/fro-fra-alf-og-kats-tomat.jpg", amount: "2g"}, {id: "2", name: "Banana", price: 5, pictureUrl: "https://frugt.dk/24455-large_default/banan.jpg", amount: "1 stk"}]);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [finalIngredients, setFinalIngredients] = useState<RecipeIngredient[]>([]);

    const getAllIngredients = async() => {
    const response = await axios.get("https://recipeapp2.fly.dev/Ingredient");
    setIngredientsList(response.data)
    }

    useEffect(() => {
        getAllIngredients();
    })

    const getSelectedIngredients = () => {
        const selectedIngredients : string[] = [];
        selected.forEach(async (item) => {
            const temp : Ingredient | undefined = ingredientsList.find((ingredient : Ingredient) => ingredient.name === item)
            if (temp !== null)
            {
                await selectedIngredients.push(temp.id)
            }
        })
        return selectedIngredients;
    }

  const {onAddRecipe} = route.params;

  const renderButtons = () => {
    return (
      <View style={styles.buttonContainer}>
        {activeStep > 0 && <Button style={{padding: 6, width: 120}} buttonStyle={{backgroundColor: colors.ELEMENTS_PRIMARY}} titleStyle={{color: colors.ELEMENTS_SECONDARY}} onPress={() => {setActiveStep(prev => prev - 1)}}>Previous</Button>}
        {activeStep != 1 && <Button style={{padding: 6, width: 120}} buttonStyle={{backgroundColor: colors.ELEMENTS_PRIMARY}} titleStyle={{color: colors.ELEMENTS_SECONDARY}} onPress={() => {setActiveStep(prev => prev + 1)}}>Next</Button>}
      </View>
    )
  }

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      axios.post("https://recipeapp2.fly.dev/Ingredient/search?searchTerm=" + searchTerm).then(response => setIngredients(response.data)).catch(error => console.log(error))
    }, 400)

    console.log(finalIngredients)
    
    return () => clearTimeout(timeoutRef.current);

  }, [searchTerm])

  return (
    <View style={styles.container}>
          <Stepper
      onSubmit={() => {}}
      onPrevStep={() => {}}
      onNextStep={() => {}}
      numberOfSteps={2}
      showButtons={false}
      activeStep={activeStep}
      stepProps={{activeStepNumColor: colors.ELEMENTS_SECONDARY, activeLabelColor: colors.ELEMENTS_SECONDARY, activeStepIconBorderColor: colors.ELEMENTS_PRIMARY, completedLabelColor: colors.ELEMENTS_SECONDARY, completedCheckColor: colors.ELEMENTS_SECONDARY, completedStepIconBgColor: colors.ELEMENTS_PRIMARY, completedProgressBarBgColor: colors.ELEMENTS_PRIMARY}}
    >
      <Stepper.Step label="information">
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: -200, width: 340 }}>
        <Input style={styles.input} placeholder="Recipe Name" onChangeText={value => setName(value)} />
        <Input style={styles.input} inputStyle={{height: 100}} multiline placeholder="Description" onChangeText={value => setDescription(value)} />
        {renderButtons()}
        </View>
      </Stepper.Step>
      <Stepper.Step label="ingredients">
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: 340, marginTop: 40 }}>
          <Input style={styles.input} placeholder="ingredient name..." value={searchTerm} onChangeText={(value) => {setSearchTerm(value)}}/>
          <FlatList
            data={ingredients}
            numColumns={1}
            renderItem={({item}) => <RecipeIngredientSearchItem recipeIngredient={item} setSearchTerm={setSearchTerm} setIngredients={setIngredients} setFinalIngredients={setFinalIngredients} /> }
          />
          <FlatList
            data={finalIngredients}
            numColumns={1}
            renderItem={({item}) => <RecipeIngredientItem recipeIngredient={item}/> }
          />
          {renderButtons()}
        {/* <Button title="Add Recipe" onPress={() => {onAddRecipe(name, description, getSelectedIngredients())}} /> */}
        </View>
      </Stepper.Step>
    </Stepper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.ELEMENTS_PRIMARY,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 380
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20
  },
});

export default RecipeAddPage;