import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PokedexHomeScreen from '../pages/PokedexHome';
import PokedexDetailsScreen from '../pages/PokedexDetails';

const PokedexStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <PokedexStack.Navigator initialRouteName="PokedexHome">
        <PokedexStack.Screen name="PokedexHome" component={PokedexHomeScreen} />
        <PokedexStack.Screen
          name="PokedexDetails"
          component={PokedexDetailsScreen}
        />
      </PokedexStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
