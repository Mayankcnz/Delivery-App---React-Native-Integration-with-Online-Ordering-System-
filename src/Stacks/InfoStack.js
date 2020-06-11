import * as React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

export const InfoStack =({navigation})=> {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Orders">
            
        </Stack.Navigator>
    );
  }
  