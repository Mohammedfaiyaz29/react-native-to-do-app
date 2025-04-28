import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  StatusBar,
  Platform,
  Text,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {getFormattedDateTime} from '../utils/date';
import {useTasks} from '../context/TaskContext';
import ReusableButton from '../components/ReusableButton';

const AddScreen = ({navigation}) => {
  const {addTask} = useTasks();
  const [task, setTask] = useState('');

  const handleAddTask = async () => {
    const {date, time} = getFormattedDateTime();
    if (task.trim() === '') {
      Alert.alert('Please enter a task');
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      date: date,
      time: time,
      title: task,
      status: false,
    };
    await addTask(newTask);
    Alert.alert("Task Added successfully")
    setTask('');
    navigation.navigate("ListScreen")
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: responsiveHeight(18),
          height: responsiveHeight(40),
          marginTop:responsiveHeight(10)
        }}>
        <Text style={styles.title}> Add a Task</Text>
        <TextInput
          placeholder="Enter your task"
          value={task}
          placeholderTextColor="#ccc"
          onChangeText={setTask}
          style={styles.input}
        />
       
        <ReusableButton onPress={handleAddTask} text={'Add Task'} style={styles.button}  />
        <ReusableButton onPress={() => navigation.navigate('ListScreen')} text={'Back'} style={styles.button}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
    flex: 1,
    backgroundColor: '#F0F6FF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: responsiveWidth(8),
    
  },
  title: {
    textAlign: 'center',
    fontSize: responsiveFontSize(4),
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color:'black'
  },
  button: {
    marginBottom: 10,
    borderWidth: 1,
    height: responsiveHeight(5.3),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6ECFF',
  },
});

export default AddScreen;
