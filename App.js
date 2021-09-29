import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import State from "./stack/Zaka";
import App1 from "./stack/App1"
import Korzina from "./stack/Korzina"


const Tab = createMaterialBottomTabNavigator();

function App() {
    return (
      <PaperProvider>
      <NavigationContainer>
          <Tab.Navigator
            shifting={true}
            labeled={true}>
            <Tab.Screen options={{title: `Главная`, tabBarColor:`rgba(13, 138, 124, 0.88)` , tabBarIcon: `home`, }} name={`App1`} component={App1}/>
            <Tab.Screen options={{title: `Страна`, tabBarColor: `rgba(13, 138, 124, 0.88)`, tabBarIcon: `flag`}}  name={`State`} component={State}/>
            <Tab.Screen options={{title: `Корзина`, tabBarColor: `rgba(13, 138, 124, 0.88)`,tabBarIcon: `cart`}}  name={`Korzina`} component={Korzina}/>
          </Tab.Navigator>
      </NavigationContainer>
      </PaperProvider>

    )
}
export default App;
