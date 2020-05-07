import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const PokedexHomeScreen: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigation() {
    navigate('PokedexDetails');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Home</Text>
      <Button title="Pokemon Details" onPress={handleNavigation} />
    </View>
  );
};

export default PokedexHomeScreen;
