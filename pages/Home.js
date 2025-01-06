import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView, SafeAreaView, StatusBar, Share, Platform} from 'react-native';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import {horizontalScale, styles, verticalScale} from '../styles/Styles'
import algo from '../scripting/algorithm';
import {fetchRooms, fetchPersonalInfo} from '../scripting/rooms';
import {questions, important, products, roomQuestionNumbers, exclusions} from '../scripting/algorithm';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as NavigationBar from "expo-navigation-bar";
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({navigation}) {

    const [score, setScore] = useState(0);
    const [numRooms, setNumRooms] = useState(0);
    const [numHazards, setNumHazards] = useState(0);
    const [numPrecautions, setNumPrecautions] = useState(0);

    React.useEffect(() => {
    
        const loadScore = navigation.addListener('focus', () => {
            AsyncStorage.getItem('firstLoad').then((value) => {
                if (value == 'true') {
                    navigation.navigate('FirstLoad');
                }
            });

            AsyncStorage.multiGet(['personalInfo', 'myRooms']).then((items) => {
                const roomList = JSON.parse(items[1][1]);
                if (roomList == null || roomList == undefined || roomList == [] || roomList == '[]' || roomList.length == 0) {
                    setScore(-1);
                    setNumRooms(0);
                    setNumPrecautions(0);
                    setNumHazards(0);
                } else {
                    setNumRooms(roomList.length);
                        const personalInfo = JSON.parse(items[0][1]);
                        let basicScore = 0;
                        let basicPossible = 0;
                        let importantScore = 0;
                        let importantPossible = 0;
                        let precautions = 0;
                        let hazards = 0;
                        let numExclusions = 0;

                        roomList.forEach(room => {
                            const roomProducts = JSON.parse(JSON.stringify(products[room.type]));
                            const notAnswered = questions[room.type].length - room.answers.length;
                            const roomQuestions = JSON.parse(JSON.stringify(roomQuestionNumbers[room.type]));

                            roomQuestions.forEach(question => {
                                const answerIndex = room.answers.indexOf(question);
                                const exclusion = exclusions.find(e => e.id == question && e.room == room.type);
                                const isExcluded = exclusion && !(personalInfo[exclusion.exclusion] == "true" || personalInfo[exclusion.exclusion] == true || personalInfo[exclusion.exclusion] == "walker" || personalInfo[exclusion.exclusion] == "cane" || personalInfo[exclusion.exclusion] == "wheelchair");

                                if (room.answers.includes(question)) {
                                    if (isExcluded) {
                                        if ((personalInfo.mobility == 'cane' || personalInfo.mobility == 'walker' || personalInfo.mobility == 'wheelchair') && important['Mobility'].includes(questions[room.type][question].question)) {
                                            importantScore += 1;
                                            importantPossible += 1;
                                        } else if (personalInfo.vision && important['Vision'].some(e => e.id == question)) {
                                            importantScore += 1;
                                            importantPossible += 1;
                                        } else if (personalInfo.hearing && important['Hearing'].some(e => e.id == question)) {
                                            importantScore += 1;
                                            importantPossible += 1;
                                        } else if (room.primary == true || room.primary == 'true') {
                                            importantScore += 1;
                                            importantPossible += 1;
                                        } else {
                                            basicScore += 1;
                                            basicPossible += 1;
                                        }
                                    } else {
                                        if ((personalInfo.mobility == 'cane' || personalInfo.mobility == 'walker' || personalInfo.mobility == 'wheelchair') && important['Mobility'].includes(questions[room.type][question].question)) {
                                            importantScore += 1;
                                            importantPossible += 1;
                                        } else if (personalInfo.vision && important['Vision'].some(e => e.id == question)) {
                                            importantScore += 1;
                                            importantPossible += 1;
                                        } else if (personalInfo.hearing && important['Hearing'].some(e => e.id == question)) {
                                            importantScore += 1;
                                            importantPossible += 1;
                                        } else if (room.primary == true || room.primary == 'true') {
                                            importantScore += 1;
                                            importantPossible += 1;
                                        } else {
                                            basicScore += 1;
                                            basicPossible += 1;
                                        }
                                    }
                                } else {
                                    if (isExcluded) {
                                        numExclusions += 1;
                                    } else {
                                        if ((personalInfo.mobility == 'cane' || personalInfo.mobility == 'walker' || personalInfo.mobility == 'wheelchair') && important['Mobility'].includes(questions[room.type][question].question)) {
                                            importantPossible += 1;
                                        } else if (personalInfo.vision && important['Vision'].some(e => e.id == question)) {
                                            importantPossible += 1;
                                        } else if (personalInfo.hearing && important['Hearing'].some(e => e.id == question)) {
                                            importantPossible += 1;
                                        } else if (room.primary == true || room.primary == 'true') {
                                            importantPossible += 1;
                                        } else {
                                            basicPossible += 1;
                                        }
                                    }
                                }

                                if (roomProducts.some(e => e.hazardID == question) && room.answers.includes(question)) {
                                    const index = roomProducts.findIndex(e => e.hazardID == question);
                                    roomProducts.splice(index, 1);
                                }
                            });

                            precautions += roomProducts.length;
                            hazards += questions[room.type].length - room.answers.length;
                        });
                        let finalScore = 0.0;

                        if (basicPossible === 0 && importantPossible === 0) {
                            finalScore = 0.0;
                          } else if (importantPossible === 0) {
                            finalScore = (basicScore / basicPossible) * 100;
                          } else if (basicPossible === 0) {
                            finalScore = (importantScore / importantPossible) * 100;
                          } else {
                            const basicWeighted = (basicScore / basicPossible) * 0.4;
                            const importantWeighted = (importantScore / importantPossible) * 0.6;
                            finalScore = (basicWeighted + importantWeighted) * 100;
                          }
                        
                        finalScore = Math.min(100, Math.max(0, finalScore));
                        finalScore = (finalScore / 2) / 10;

                        setNumPrecautions(precautions);
                        setNumHazards(hazards - numExclusions);
                        if (finalScore == 0 || finalScore == null || finalScore == undefined || isNaN(finalScore)) {
                            setScore(0);
                        } else {
                            setScore(Math.round(finalScore));
                        }
                    }
            });
        });
        return loadScore;
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            {Platform.OS === 'android' && <StatusBar backgroundColor="#1C1C1E" barStyle="light-content" />}

            <ScrollView contentContainerStyle={{
                backgroundColor: '#1C1C1E',
                alignItems: 'center',
                justifyContent: 'center',

            }}
            style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10 }}
            >
                <Text style={styles.header}>Hi there!</Text>
                {score >= 0 && <Text style={styles.subheader}>Your home is {score > 2 ? (score > 3 ? 'very' : 'somewhat') : 'not'} accessible.</Text>}
                {score < 0 && <Text style={styles.subheader}>Start adding rooms to calculate your score!</Text>}
                
                <View style={styles.outerRing}>
                    <LinearGradient
                        colors={score == -1 ? ['#7FBFFF', '#7FBFFF'] : (score > 2 ? (score > 3 ? ['#4CAF50', '#81C784'] : ['#FFA726', '#FFCC80']) : ['#E53935', '#FF8A80'])}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.gradientRing}
                    >
                        <View style={styles.scoreContainer}>
                        <Text style={styles.score}>{score == -1 ? "N/A" : score + "/5"}</Text>
                        </View>
                    </LinearGradient>
                </View>

                <TouchableOpacity style={styles.scoreLabel} onPress={async () => {
                    const result = await Share.share({
                        message: `My home safety score is ${score}/5! Download the ElderSafe app to improve the safety of your home!`,
                        url: 'https://www.eldersafe.app',
                      });
                }} >
                    <Text style={styles.scoreLabelText}>Your Current Home Safety Score</Text>
                    <Text style={styles.scoreLabelSubtext}>Tap to share</Text>
                </TouchableOpacity>
                <View style={styles.dashboard}>
                    <TouchableOpacity style={[styles.dashboardButton, {marginRight: 7.5}]} onPress={() => {
                        navigation.navigate('RoomScreens')
                    }}>
                        <Text style={styles.dashboardNumber}>{numRooms}</Text>
                        <Text style={styles.dashboardText}>Rooms</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.dashboardButton, {marginLeft: 7.5}]} onPress={() => navigation.navigate('Tips', {goTo: 0})}>
                        <Text style={styles.dashboardNumber}>{numHazards}</Text>
                        <Text style={styles.dashboardText}>Hazards</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.dashboard, {marginBottom: 50}]}>
                    <TouchableOpacity style={[styles.dashboardButton, {marginTop: -(verticalScale(40))}]} onPress={() => navigation.navigate('Tips', {goTo: 1})}>
                        <Text style={styles.dashboardNumber}>{numPrecautions}</Text>
                        <Text style={styles.dashboardText}>Suggested Home Safety Products</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ExpoStatusBar style="light" translucent={false} />
        </SafeAreaView>
    );
}