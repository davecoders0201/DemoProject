import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

// import the Course Api which is created in the API folder
import Courses from '../../data/college';

const CollegeScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Colleges</Text>
      <View style={styles.collegeContainer}>
        <Text style={styles.mainHeader}>Ahemdabad</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('collegeTeacherAhemdabad')}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.collegeContainer}>
        <Text style={styles.mainHeader}>Gandhinagar</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('collegeTeacher')}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// This is One type of css in the React Native File
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  collegeContainer: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    textAlign: 'center',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 10,
  },
  mainHeader: {
    fontSize: 22,
    color: '#344055',
    textTransform: 'uppercase',
    // fontWeight: 500,
    paddingBottom: 15,
    textAlign: 'center',
    fontFamily: 'Nunito_700Bold',
    marginTop: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5435',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 50,
    // width: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#eee',
    fontFamily: 'WorkSans_400Regular',
    textTransform: 'capitalize',
  },
});

export default CollegeScreen;
