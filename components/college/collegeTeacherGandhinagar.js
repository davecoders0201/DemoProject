import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

// import the Course Api which is created in the API folder
import tutorApi from '../../data/tutorApi';

const CollegeTeacherGandhinagar = ({navigation}) => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [previousCard, setPreviousCard] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [previousCardTimer, setPreviousCardTimer] = useState(0);

  const courseCard = ({item}) => {
    const startTimer = () => {
      if (!isPlaying) {
        const id = setInterval(() => {
          setTimer(prevTimer => prevTimer + 1);
        }, 1000);
        setIntervalId(id);
        setIsPlaying(true);
        if (previousCard !== null) {
          tutorApi.find(course => course.id === previousCard).time =
            previousCardTimer;
        }
      }
    };

    const stopTimer = () => {
      if (isPlaying) {
        clearInterval(intervalId);
        setIsPlaying(false);
        setPreviousCardTimer(timer);
        setPreviousCard(currentCard);
      }
    };

    const resetTimer = () => {
      setTimer(0);
    };

    const storeTimer = () => {
      setTimer(previousCardTimer);
    };
    const formatTime = time => {
      const minutes = Math.floor(time / 60)
        .toString()
        .padStart(2, '0');
      const seconds = (time % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    };

    const handleCardClick = () => {
      setCurrentCard(item.id);
      if (currentCard !== null) {
        stopTimer();
      }
      if (previousCard !== item.id) {
        // The clicked card is not the same as the previous card
        console.log('Previous card is different');
        resetTimer();
      } else {
        // The clicked card is the same as the previous card
        console.log('Current card is the same as previous card');
        console.log('Current card:', currentCard);
        console.log('Previous card:', previousCard);
        storeTimer();
      }

      startTimer();
    };

    return (
      <View style={{margin: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: currentCard === item.id ? '#ff5435' : '#D9D9D9',
            padding: 10,
            borderRadius: 10,
          }}
          onPress={handleCardClick}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.title}</Text>
          <Text>{item.description}</Text>
          {currentCard === item.id && (
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={{marginRight: 10}}>{formatTime(timer)}</Text>
              <TouchableOpacity onPress={isPlaying ? stopTimer : startTimer}>
                <Image
                  source={
                    isPlaying
                      ? require('../../asset/paus.png')
                      : require('../../asset/play.png')
                  }
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    // Flatlist is a Prop which is use for the Scrolling the Items
    <FlatList
      keyExtractor={item => item.id}
      data={tutorApi}
      renderItem={courseCard}
    />
  );
};

// This is One type of css in the React Native File
const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
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
  },
  description: {
    textAlign: 'center',
    fontFamily: 'WorkSans_400Regular',
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: '#7d7d7d',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#ff5435',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#eee',
    fontFamily: 'WorkSans_400Regular',
    textTransform: 'capitalize',
  },
});

export default CollegeTeacherGandhinagar;
