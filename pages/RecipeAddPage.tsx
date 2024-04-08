import { Button, Divider, Input, color } from '@rneui/base';
import React, {useContext, useEffect, useRef, useState} from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from "axios";
import { Ingredient } from '../types/Ingredient';
import Stepper from 'react-native-stepper-view';
import { colors } from '../assets/theme';
import IngredientItem from '../components/IngredientItemComponent';
import { RecipeIngredient } from '../types/RecipeIngredient';
import RecipeIngredientItem from '../components/RecipeIngredientItemComponent';
import RecipeIngredientSearchItem from '../components/RecipeIngredientISearchtemComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import IngredientOnRecipeAdder from '../components/IngredientOnRecipeAdder';
import { RecipeContext } from '../context/RecipeContext';
import { IngredientContext } from '../context/IngredientContext';

const RecipeAddPage = ({navigation, route}) => {

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [matchingIngredients, setMatchingIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [finalIngredients, setFinalIngredients] = useState<RecipeIngredient[]>([]);
  const [newFinalIngredients, setNewFinalIngredients] = useState<RecipeIngredient[]>([]);
  const [pictureURL, setPictureURL] = useState<string>();

  const {addRecipe} = useContext(RecipeContext);
  const {ingredients} = useContext(IngredientContext);

  const handleAdd = async() => {
    try {    
      const response = await addRecipe(name, description, finalIngredients, newFinalIngredients, pictureURL);
      console.log(response)
      navigation.navigate("Recipes")
    }
    catch {
      console.log("ERROR CAUGHT");
    }
  }

    useEffect(() => {
      if (activeStep == 1)
      {
        axios.post("https://recipeapp2.fly.dev/Recipe/generate_image", null, {
          params: {description: description}
        })
        .then(
          //response => setDescription(response.data)
          response => setPictureURL(response.data)
        )
        .catch(err => console.log(err))
      }
    }, [activeStep])

  const renderButtons = () => {
    return (
      <View style={styles.buttonContainer}>
        {activeStep > 0 && <Button style={{padding: 6, width: 120}} buttonStyle={{backgroundColor: colors.ELEMENTS_PRIMARY}} titleStyle={{color: colors.ELEMENTS_SECONDARY, fontSize: 16}} onPress={() => {setActiveStep(prev => prev - 1)}}>Previous</Button>}
        {activeStep != 1 && <Button style={{padding: 6, width: 120}} buttonStyle={{backgroundColor: colors.ELEMENTS_PRIMARY}} titleStyle={{color: colors.ELEMENTS_SECONDARY, fontSize: 16}} onPress={() => {setActiveStep(prev => prev + 1)}}>Next</Button>}
        {activeStep == 1 && <Button style={{padding: 6, width: 120}} buttonStyle={{backgroundColor: colors.ELEMENTS_PRIMARY}} titleStyle={{color: colors.ELEMENTS_SECONDARY, fontSize: 16}} onPress={handleAdd}>Add Recipe</Button>}
      </View>
    )
  }

  useEffect(() => {
    if (searchTerm.length == 0)
    {
      setMatchingIngredients([])
    }
    else
      setMatchingIngredients(ingredients.filter(i => i.name?.toLowerCase().includes(searchTerm?.toLowerCase())))
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
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: -200, width: 340 }}>
        <Input value={name} style={styles.input} placeholder="Recipe Name" onChangeText={value => setName(value)} />
        <Input value={description} style={styles.input} inputStyle={{height: 100}} multiline placeholder="Description" onChangeText={value => setDescription(value)} />
        {renderButtons()}
        </View>
        </TouchableWithoutFeedback>
      </Stepper.Step>
      <Stepper.Step label="ingredients">
        <View style={{ flex: 1, width: 340, marginTop: 10, alignItems: "center", justifyContent: "center" }}>
        <Input autoCorrect={false} style={styles.input} placeholder="ingredient name..." value={searchTerm} onChangeText={(value) => {setSearchTerm(value)}}/>
          <View style={{marginBottom: 10, zIndex: 1, position: 'absolute',top: 50,bottom: 0,left: 0,right: 0, minHeight: 200}}>
            {matchingIngredients.length > 0 &&           
            <FlatList
            keyboardShouldPersistTaps
            data={matchingIngredients}
            numColumns={1}
            renderItem={({item}) => <RecipeIngredientSearchItem ingredient={item} setSearchTerm={setSearchTerm} setFinalIngredients={setFinalIngredients} /> }
            key={1}
          />}
            {matchingIngredients.length == 0 && searchTerm.length != 0 && 
            <IngredientOnRecipeAdder setSearchTerm={setSearchTerm} setNewFinalIngredients={setNewFinalIngredients} initialName={searchTerm}/>
            }
          </View>
          <FlatList
            data={finalIngredients.concat(newFinalIngredients)}
            numColumns={1}
            renderItem={({item}) => <RecipeIngredientItem recipeIngredient={item} setFinalIngredients={setFinalIngredients} /> }
            style={{zIndex: searchTerm == "" && 1}}
            key={2}
          />
          </View>
          <SafeAreaView style={{alignItems: 'center', justifyContent: 'center', width: 340 }}>
          {renderButtons()}
          </SafeAreaView>
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
    bottom: 20,
  },
});

export default RecipeAddPage;