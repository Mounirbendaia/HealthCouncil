
import React, { Component } from 'react';
import {ScrollView, SafeAreaView,TouchableOpacity,StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';
import { useNavigation } from '@react-navigation/native';

import { createStackNavigator } from 'react-navigation';



export default class Dashboard extends Component {
 
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }



 

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    

    return (
      <SafeAreaView styles={styles.container}>
      <ScrollView styles={styles.scrollView}>
      <View style={styles.container}>
      <Text style = {styles.textStyle}>
        Hi {this.state.displayName}
      </Text>
      <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('Tips')}>
              <Text style={styles.buttonTextStyle}>Tips</Text>
            </TouchableOpacity>
     
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('Medi')}>
              <Text style={styles.buttonTextStyle}>Meditations</Text>
            </TouchableOpacity>
     
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('informations')}>
              <Text style={styles.buttonTextStyle}>Informations</Text>
            </TouchableOpacity>
  
      
    </View>
    </ScrollView>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    },
    scrollView: {
      
    },
  textStyle: {
    marginTop: 15,
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
  color: '#3740FE'
  },
  buttonStyle: {
    backgroundColor: '#3740FE',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 170,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 5,
    marginBottom: 25,
  },
  buttonTextStyle: {

    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});