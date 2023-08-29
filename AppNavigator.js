import React, {useContext, useReducer} from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyProducts from "./MyProducts";
import MyCart from "./redux/MyCart";





const Stack = createNativeStackNavigator()

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyProducts" component={MyProducts} options={{headerShown: false}}/>
        <Stack.Screen name="MyCart" component={MyCart} options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}