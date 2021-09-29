import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Country from "../screen/Country"
import Sostav from "../screen/Sostav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function State (){


    return (
      <>
        <Stack.Navigator>
          <Stack.Screen  options={{title: `Страны`}} name={`Country`} component={Country}/>
          <Stack.Screen options={{title: `Страна`}} name={`Sostav`} component={Sostav}/>
        </Stack.Navigator>
      </>
    )
}

export default State;
