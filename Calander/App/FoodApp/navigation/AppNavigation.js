import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import FoodDetails from '../Pages/FoodDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Filter from '../Pages/Filter';
import Map from '../Pages/Map';
import SingleFoodDetails from '../Pages/SingleFoodDetails';
import Basket from '../Pages/Basket';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          initialRouteName: 'Home',
        }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            // headerShown: false,
          }}
          name="FoodDetails"
          component={FoodDetails}
        />
        <Stack.Screen
          options={{
            // headerShown: false,
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
            presentation: 'modal',
          }}
          name="Filter"
          component={Filter}
        />
        <Stack.Screen
          options={{
            // headerShown: false,
            headerTitle: 'Search Location',
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },

            presentation: 'fullScreenModal',
          }}
          name="Map"
          component={Map}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
             presentation: 'modal',
          }}
          name="SingleFoodDetails"
          component={SingleFoodDetails}
        />
        <Stack.Screen
          options={
            {
              // headerShown: false,
            }
          }
          name="Basket"
          component={Basket}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
