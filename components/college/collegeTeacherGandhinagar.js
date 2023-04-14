import React, {useState, useRef} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import tutorApi from '../../data/tutorApi';

const CourseCard = ({course}) => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isPlaying) {
      const id = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
      setIsPlaying(true);
    }
  };

  const stopTimer = () => {
    if (isPlaying) {
      clearInterval(intervalId);
      setIsPlaying(false);
    }
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <View style={{margin: 10}}>
      <View
        style={{
          backgroundColor: '#ff5435',
          padding: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          {course.title}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 10, fontSize: 17}}>
            {formatTime(timer)}
          </Text>
          <TouchableOpacity onPress={isPlaying ? stopTimer : startTimer}>
            <Image
              source={
                isPlaying
                  ? require('../../asset/paus.png')
                  : require('../../asset/play.png')
              }
              style={{width: 20, height: 23}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const CollegeTeacherGandhinagar = () => {
  return (
    <View>
      {tutorApi.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </View>
  );
};

export default CollegeTeacherGandhinagar;
