import React from 'react';
import {
} from 'react-native';

import Home from "../screen/Home";
import Products from "../screen/Products";
import Bella from "../screen/Bella";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

function App1 (){
    return (
      <>
            <Stack.Navigator>
              <Stack.Screen  options={{title: `Доставка еды` }} name={`As`} component={Home}/>
              <Stack.Screen  options={{title: `Продкуты`}} name={`Products`} component={Products}/>
              <Stack.Screen  options={{title: `Продкуты`}} name={`Bella`} component={Bella}/>
            </Stack.Navigator>
      </>
    )
}
export default App1;
