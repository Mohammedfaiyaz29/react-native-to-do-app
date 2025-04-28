import React from 'react'
import {  View } from 'react-native'
import AppNavigator from './src/navigation/AppNavigator'
import { TaskProvider } from './src/context/TaskContext'

const App = () =>  {
    return (
      <View style={{flex:1}}>
        <TaskProvider>
        <AppNavigator />
        </TaskProvider>
        
      </View>
    )
  
}

export default App
