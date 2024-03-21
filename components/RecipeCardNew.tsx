import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Recipe } from '../types/Recipe';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { colors } from '../assets/theme';

type props = {
    navigation: StackNavigationProp<{}>;
    recipe : Recipe
}

const RecipeCardNew = ({ recipe, navigation } : props) => {
    return (
        <TouchableOpacity onPress={() => {navigation.navigate('RecipeDetails', recipe)}}>
        <View style={styles.container}>
          <Image source={{uri: recipe.pictureUrl}} style={styles.backgroundImage} />
          <View style={styles.overlay} />
          <Text style={styles.title}>{recipe.name}</Text>
          <View style={styles.bottomContainer}>
            <View style={styles.circle1}>
              <Text style={styles.circleText}>45kr</Text>
            </View>
            <View style={styles.circle2}>
              <Text style={styles.circleText}>45m</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        width: '100%',
        aspectRatio: 1, // This ensures the container remains a square
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 20,
      },
      backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
      },
      overlay: {
        backgroundColor: colors.ELEMENTS_PRIMARY + 90,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '25%',
        zIndex: 1,
        borderRadius: 15,
      },
      bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: '5%',
        width: '100%',
        zIndex: 2,
      },
      circle1: {
        alignItems: 'center',
        bottom: "30%",
        right: "50%",
        backgroundColor: colors.ELEMENTS_PRIMARY + 100,
        borderRadius: 999, // A large number for a circle
        padding: 10,
      },
      circle2: {
        alignItems: 'center',
        bottom: "30%",
        right: "200%",
        backgroundColor: colors.ELEMENTS_PRIMARY + 100,
        borderRadius: 999, // A large number for a circle
        padding: 10,
      },
      circleText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
      },
      circleLabel: {
        color: 'white',
        fontSize: 12,
      },
      title: {
        position: 'absolute',
        bottom: '10%',
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        zIndex: 2,
      },
    });

export default RecipeCardNew;
