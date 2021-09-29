import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Backet from "../screen/Backet";
import BacketScreen from "../screen/BacketScreen";

const Stack = createNativeStackNavigator();

function Korzina (){
    return (
      <>
          <Stack.Navigator>
            <Stack.Screen options={{title:`Корзина`}} name={`Backet`} component={Backet}/>
            <Stack.Screen options={{title:`Заказ`}} name={`BacketScreen`} component={BacketScreen}/>
          </Stack.Navigator>
      </>
    )
}

export default Korzina;
