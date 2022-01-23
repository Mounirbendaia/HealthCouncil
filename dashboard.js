
import React, { Component } from 'react';
import { SafeAreaView,StyleSheet, Image,View, Text, Button } from 'react-native';
import firebase from '../database/firebase';
import { createDrawerNavigator,DrawerItemList, DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Meditations from './Meditations';
import Tips from './Tips';
import Medi from './medi';
import informations from './informations';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
const Drawer = createDrawerNavigator();

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <SafeAreaView style={{flex: 1}}>
      <NavigationContainer independent={true}>
      {/*Top Large Image */}
 
      <Drawer.Navigator
        initialRouteName="Meditations"
        drawerPosition='left'
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor='#00000090'
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
          
        <Drawer.Screen
          name="Meditations"
          component={Meditations}
          options={{
            title: 'Home',
           
            
          }}
        />
        <Drawer.Screen
          name="Medi"
          component={Medi}
          options={{
            title: 'Meditation',
           
            
          }}
        />
          <Drawer.Screen
          name="Tips"
          component={Tips}
          options={{
            title: 'Tips',
           
            
          }}
        />
          <Drawer.Screen
          name="informations"
          component={informations}
          options={{
            title: 'Informations',
           
            
          }}

        />
         
      </Drawer.Navigator>
    </NavigationContainer>
 
    </SafeAreaView>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});