import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllPeople from '../screens/AllPeople/AllPeople';
import NewPeople from '../screens/NewPeople/NewPeople';
import {
  ALL_PEOPLE,
  NEW_PEOPLE,
  INACTIVE_COLOR,
  ACTIVE_COLOR,
} from '../config/main';
import IMAGES from '../assets/imagesIndex';
import TabIcon from '../components/TabIcon/TabIcon';

const tabs = [
  {name: ALL_PEOPLE, component: AllPeople, image: IMAGES.allPeopleIcon},
  {name: NEW_PEOPLE, component: NewPeople, image: IMAGES.newPeopleIcon},
];
const tabBarOptions = {
  activeTintColor: ACTIVE_COLOR,
  inactiveTintColor: INACTIVE_COLOR,
  labelStyle: {
    fontSize: 14,
    fontWeight: '600',
  },
};
const Tab = createBottomTabNavigator();

const renderItem = (item) => (
  <Tab.Screen
    key={item.name}
    name={item.name}
    component={item.component}
    options={{
      tabBarIcon: ({focused}) => (
        <TabIcon source={item.image} isActive={focused} />
      ),
    }}
  />
);

const MainTabs = () => {
  return (
    <Tab.Navigator initialRouteName={ALL_PEOPLE} tabBarOptions={tabBarOptions}>
      {tabs.map(renderItem)}
    </Tab.Navigator>
  );
};

export default MainTabs;
