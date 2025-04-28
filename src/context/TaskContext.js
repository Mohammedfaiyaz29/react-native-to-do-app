import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
      console.log(storedTasks);
      
    } catch (error) {
      console.error('Failed to load tasks:', error);
    }finally{
      setIsLoading(false)
    }
  };

  const addTask = async (task) => {
    try {
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
      await AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
      await AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
      await loadTasks()
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const toggleTask = async (id) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      );
      setTasks(updatedTasks);
      await AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
      await  loadTasks()
    } catch (error) {
      console.error('Failed to toggle task:', error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTask,
        loadTasks,
        isLoading
       
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
