import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

const TimeDate = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const dateAndTime = moment()
      .utcOffset('+02:00')
      .format('DD MMM YY - HH:mm');

    setCurrentDate(dateAndTime);
  }, []);

  return (
    <View>
      <Text style={{fontSize: 20, color: 'white'}}>{currentDate}</Text>
    </View>
  );
};

export default TimeDate;
