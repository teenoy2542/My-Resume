import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeFormScreen from './screen/ResumeForm'
import ResumeDetail from './screen/ResumeDetail'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeForm" options={{title:"Resume Form"}} component={ResumeFormScreen} />
        <Stack.Screen name="ResumeDetail" options={{title:"Resume Detail"}} component={ResumeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;