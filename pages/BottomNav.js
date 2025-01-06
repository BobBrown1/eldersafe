import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import {styles} from '../styles/Styles'
import { StatusBar } from 'expo-status-bar';

export const BottomNav = ({currentPage, onChangePage}) => {
    return (
      <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.bottomNavItem} onPress={() => onChangePage('home')} >
            <FontAwesome name="home" size={30} color={currentPage == "home" ? "black" : "grey"} />
            <Text style={{color: `${currentPage == 'home' ? 'black' : 'grey'}`}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem} onPress={() => onChangePage('rooms')}>
            <FontAwesome name="bed" size={30} color={currentPage == "rooms" ? "black" : "grey"} />
            <Text style={{color: `${currentPage == 'rooms' ? 'black' : 'grey'}`}}>Rooms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem} onPress={() => onChangePage('tips')}>
            <FontAwesome name="lightbulb-o" size={30} color={currentPage == "tips" ? "black" : "grey"} />
            <Text style={{color: `${currentPage == 'tips' ? 'black' : 'grey'}`}}>Tips</Text>
          </TouchableOpacity>
        </View>
    )
  };