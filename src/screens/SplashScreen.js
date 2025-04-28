import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useTasks } from '../context/TaskContext';

export default function SplashScreen() {
  const navigation = useNavigation()
  const {loadTasks,
    isLoading}=useTasks()

 
    
useEffect(() => {
  const fetchData = async () => {
    await loadTasks();
    navigation.navigate("ListScreen");
  };

  fetchData();
}, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#F0F6FF', justifyContent: 'center', alignItems: "center", width: '100%' }}>
    <Text style={{ fontSize: responsiveFontSize(7), textAlign: 'center' }}>QuickList!</Text>
    <Text style={{fontFamily: 'System', fontSize: responsiveFontSize(1.5), textAlign: 'center' }}>A simplest way to make to-do list!</Text>
    {isLoading && <ActivityIndicator size={80} color="#9999" />
  }
  </View>
  
  )
}