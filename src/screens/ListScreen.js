import {
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {useTasks} from '../context/TaskContext';
import CheckBox from 'react-native-check-box';
import useList from '../hooks/useList';
const ListScreen = () => {
  const navigation = useNavigation();
  const {deleteTask, loadTasks, tasks, toggleTask} = useTasks();
  const {date, day} = useList();

  useEffect(() => {
    loadTasks();
  }, []);

  const renderItem = ({item}) => {
    const isComp = item.status == true;
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 'auto',
          width: responsiveWidth(100),
          marginBottom: 20,
          opacity: isComp ? 0.3 : 1,
        }}>
        <View>
          <Text style={{marginLeft: 5, marginRight: 20}}>{item.date}</Text>
          <Text style={{marginLeft: 5, marginRight: 20}}>{item.time}</Text>
          <CheckBox
            style={{width: 44, height: 44}}
            isChecked={item.status}
            onClick={() => toggleTask(item.id)}
            checkedCheckBoxColor="#107bc7"
            uncheckedCheckBoxColor="#A8D0F0"
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            width: '65%',
            height: 'auto',
            paddingLeft: 5,
            justifyContent: 'space-between',
            paddingBottom: 10,
            backgroundColor: '#FFFAF0',
          }}>
          <Text style={{fontSize: responsiveFontSize(4)}}>{item.title}</Text>
          
          <TouchableOpacity
            onPress={() => deleteTask(item.id)}
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
              width: 115,
              height: 25,
              backgroundColor: '#FFD6D6',
            }}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F0F6FF',
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(4),
        width: responsiveWidth(100),
      }}>
      <View
        style={{
          width: '100%',
          height: responsiveHeight(18),
          borderColor: '#ccc',
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}>
        <View
          style={{
            width: '100%',
            height: responsiveHeight(8),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 5,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
              width: responsiveWidth(40),
              height: responsiveHeight(5),
              backgroundColor: '#D6ECFF',
            }}
            onPress={() => navigation.navigate('AddScreen')}>
            <Text>Add Task</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '55%',
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(5),
                borderWidth: 0,
                width: responsiveWidth(14),
              }}>
              {day}
            </Text>
            <Text style={{fontSize: responsiveFontSize(5)}}>{date}</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: responsiveHeight(6),
            marginTop: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderBottomWidth: 1,
            borderColor: '#9999',
            paddingBottom: 10,
            marginBottom: 20,
          }}>
          <Text style={{fontSize: responsiveFontSize(5), width: '50%'}}>
            Task List
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
              width: 115,
              height: 25,
              backgroundColor: '#D6ECFF',
            }}>
            <Text>Filter</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: responsiveHeight(70),
            width: responsiveWidth(100),
            marginTop: 0,
          }}>
      {!tasks || tasks.length === 0 ? (
  <Text style={{textAlign:'center'}}>No Task added</Text>
) : (
  <FlatList
    data={tasks.sort((a, b) => a.status - b.status)}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderItem}
    contentContainerStyle={{ marginTop: 5, paddingBottom: 50 }}
  />
)}
        </View>
      </View>
    </View>
  );
};

export default ListScreen;
