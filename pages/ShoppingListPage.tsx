import React from 'react';
import ShoppingListItem from "../components/ShoppingListItemComponent";
import { View } from 'react-native';

const ShoppingListPage = ({navigation}) => {
    return(
        <View style={{backgroundColor: "green", flex: 1}}>
    <View style={{flex: 1, backgroundColor: "blue"}}>
    <ShoppingListItem />
    </View>
    <View style={{flex: 1, backgroundColor: "red"}}>
    <ShoppingListItem />
    </View>
    <View style={{flex: 1, backgroundColor: "yellow"}}>
    <ShoppingListItem />
    </View>
    </View>
    )
}

export default ShoppingListPage;