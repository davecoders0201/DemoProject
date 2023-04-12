import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import CollegeTeacherGandhinagar from './components/college/collegeTeacherGandhinagar';
import CollegeTeacherAhemdabad from './components/college/collegeTeacherAhemdabad';
import CollegeScreen from './components/college/College';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Create a Reference of the Stack which will display in the screen stack wise
const Stack = createNativeStackNavigator();

// This is the Class Which extends the React Components
// and Render function is the Compulsary in the React.Components class
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="college" component={CollegeScreen} />
          <Stack.Screen
            name="collegeTeacher"
            component={CollegeTeacherGandhinagar}
          />
          <Stack.Screen
            name="collegeTeacherAhemdabad"
            component={CollegeTeacherAhemdabad}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
