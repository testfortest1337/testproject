import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllPeople from '../screens/AllPeople/AllPeople';
import NewPeople from '../screens/NewPeople/NewPeople';
import {
  All_PEOPLE,
  NEW_PEOPLE,
  INACTIVE_COLOR,
  ACTIVE_COLOR,
} from '../config/main';
import IMAGES from '../assets/imagesIndex';
import TabIcon from '../components/TabIcon/TabIcon';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={All_PEOPLE}
      tabBarOptions={{
        activeTintColor: ACTIVE_COLOR,
        inactiveTintColor: INACTIVE_COLOR,
        labelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name={All_PEOPLE}
        component={AllPeople}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon source={IMAGES.allPeopleIcon} isActive={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={NEW_PEOPLE}
        component={NewPeople}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon source={IMAGES.newPeopleIcon} isActive={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
