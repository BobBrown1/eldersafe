import { StyleSheet, Text, View, TouchableOpacity, Button, Dimensions, FlatList, TextInput, Alert, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {styles} from '../styles/Styles'
import {wstyles} from '../styles/WelcomeStyles'
import { ExpoStatusBar } from 'expo-status-bar';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesome } from '@expo/vector-icons'; 
import React, { useState, useEffect } from 'react';
import { verticalScale, horizontalScale, moderateScale } from '../styles/Styles';
import {fetchRooms, addRoom, deleteRoomData} from '../scripting/rooms';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FirstLoad({navigation}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'I walk without an aid', value: 'none'},
        {label: 'I use a cane', value: 'cane'},
        {label: 'I use a walker', value: 'walker'},
        {label: 'I use a wheelchair', value: 'wheelchair'},
        ]);

    const [age, setAge] = useState(0);
    const [vision, setVision] = useState(false);
    const [hearing, setHearing] = useState(false);

    const [ageError, setAgeError] = useState(null);
    const [mobilityError, setMobilityError] = useState(null);

    useEffect(() => {

        removeNav = navigation.addListener('focus', (e) => {
            navigation.getParent()?.setOptions({
                tabBarStyle: {
                  display: 'none',
                }
              });
              return () => navigation.getParent()?.setOptions({
                tabBarStyle: undefined
              });
            });

        addNav = navigation.addListener('beforeRemove', (e) => {
            navigation.getParent()?.setOptions({
                tabBarStyle: {
                    backgroundColor: '#121212',
                    display: 'block',
                    borderTopWidth: 0,
                    elevation: 0,
                }
            });
            return () => navigation.getParent()?.setOptions({
                tabBarStyle: undefined
            });
        });
    })


    return (
        <SafeAreaView style={styles.container}>
            {Platform.OS === 'android' && <StatusBar backgroundColor="#121212" barStyle="light-content" />}
            <ScrollView nestedScrollEnabled={true}
            style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10 }}
            >
                <Text style={styles.header}>Let's Get Started</Text>
                <Text style={styles.subheader}>Tell us a bit about you</Text>
                <View style={wstyles.ageContainer}>
                    <Text style={wstyles.ageLabel}>Age</Text>
                    <TextInput 
                    style={wstyles.ageInput} 
                    placeholder="Enter your age" 
                    placeholderTextColor={'white'}
                    keyboardType="numeric"
                    onChangeText={(text) => {setAge(text)}}
                    />
                    {!!ageError && (
                        <Text style={{ color: "red" }}>{ageError}</Text>
                    )}   
                </View>
                <View style={wstyles.mobilityContainer}>
                    <Text style={wstyles.ageLabel}>Mobility</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        zIndex={5000}
                        style={{
                            backgroundColor: "#121212",
                            borderColor: "white",
                            color: "white",
                        }}
                        textStyle={{
                            color: "white",
                        }}
                        dropDownContainerStyle={{
                            backgroundColor: "#121212",
                            borderColor: "white",
                            color: "white",
                        }}
                        listMode='SCROLLVIEW'
                        
                    />
                    {!!mobilityError && (
                        <Text style={{ color: "red" }}>{mobilityError}</Text>
                    )}    
                </View>
                <View style={wstyles.visionContainer}>
                    <Text style={wstyles.ageLabel}>Vision</Text>
                    <TouchableOpacity style={{alignItems: 'center', flexDirection: 'row'}} onPress={() => {setVision(!vision)}}>
                        <Checkbox
                            style={wstyles.checkbox}
                            value={vision}
                            onValueChange={(newValue) => {setVision(newValue)}}
                        />
                        <Text style={wstyles.checkboxLabel}>I have trouble seeing</Text>
                    </TouchableOpacity>
                </View>
                <View style={wstyles.hearingContainer}>
                    <Text style={wstyles.ageLabel}>Hearing</Text>
                    <TouchableOpacity style={{alignItems: 'center', flexDirection: 'row'}} onPress={() => {setHearing(!hearing)}}>
                        <Checkbox
                            style={wstyles.checkbox}
                            value={hearing}
                            onValueChange={(newValue) => {setHearing(newValue)}}
                        />
                        <Text style={wstyles.checkboxLabel}>I have trouble hearing</Text>
                    </TouchableOpacity>
                </View>
                <View style={wstyles.submitContainer}>
                    <TouchableOpacity style={wstyles.submitButton} onPress={() => {
                        if (age == '' || age == null || age == undefined || age.trim() == '') {
                            setAgeError("Please enter a valid age");
                        }
                        if (value == '' || value == null || value == undefined) {
                            setMobilityError("Please select a mobility option");
                        }
                        if (age != '' && age != null && age != undefined && age.trim() != '' && value != '' && value != null && value != undefined) {
                            setAgeError(null);
                            setMobilityError(null);
                            AsyncStorage.setItem('firstLoad', 'false');
                            const personalInfo = {age: age , mobility: value, vision: vision, hearing: hearing};
                            AsyncStorage.setItem('personalInfo', JSON.stringify(personalInfo));
                            navigation.navigate("Home")
                            navigation.navigate('RoomScreens');
                        }
                    }}>
                        <Text style={wstyles.submitText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <StatusBar style="light" translucent={false} />
        </SafeAreaView>
    )
}