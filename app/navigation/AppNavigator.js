import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabs from './MainTabs';
import {PROJECT_NAME} from '../config/main';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={PROJECT_NAME} component={MainTabs} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
