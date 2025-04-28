import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ReusableButton = ({ onPress, text, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={ style}>
      <Text style={ textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};



export default ReusableButton;