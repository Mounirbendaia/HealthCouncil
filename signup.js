import React, { Component } from 'react';
import {   Keyboard,ToastAndroid,SafeAreaView,ScrollView, StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator,Image } from 'react-native';
import firebase from '../database/firebase';
import { Container, Header, Content, Item, Input, Label,Form } from 'native-base';
import moment from 'moment';

import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';

var hobbies = [
  {label: "Male", value: "Male"},
  {label: "Female", value: "Female"},
];

export default class Signup extends Component {
  state = {
    checked: 'first',
  };
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      Phonenumber: '',
      selectedLanguage :'',
      setSelectedLanguage:'',
      show: false,
      value: '',
      mode: 'date',
      displayFormat: 'DD/MM/YYYY',
      label: 'Date',
      isLoading: false
    }
  }

  setSelectedLanguage= (value) =>{
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  showDateTimePicker = () => {
    // alert('showDateTimePicker');
     this.setState({ show: true });
     Keyboard.dismiss();
   };
 
   hideDateTimePicker = () => {
     this.setState({ show: false });
   };
 
   handleDatePicked = value => {
     this.setState({ value: value });
     setTimeout(() => {
       this.hideDateTimePicker();
     }, 250);
   };
 
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    
    state = {user: ''}
    updateUser = (user) => {
       this.setState({ user: user })
    }

    const options = [
      "Option 1",
      "Option 2"
    ];
   
    function setSelectedOption(selectedOption){
      this.setState({
        selectedOption
      });
    }
    const { checked } = this.state;

    const {label, value, show, mode, displayFormat} = this.state;
    return (
      <SafeAreaView styles={styles.container}>
      <ScrollView styles={styles.scrollView}>
      <View style={styles.container}>  

        
       <Image style={styles.header}
        source={require('../Image/Logo.png')}
        style={{width: '100%', resizeMode: 'contain', }}
      />
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
         <TextInput
          style={styles.inputStyle}
          placeholder="Phone number"
          value={this.state.Phonenumber}
          onChangeText={(val) => this.updateInputVal(val, 'Phonenumber')}
          maxLength={15}
        />  
            <RadioForm  style={styles.inputStyle}
          radio_props={hobbies}
          initial={2}
          onPress={(value) => {ToastAndroid.show(value.toString(), ToastAndroid.SHORT)}}
          buttonSize={20}
          buttonOuterSize={20}
          selectedButtonColor={'#3740FE'}
          selectedLabelColor={'#3740FE'}
          disabled={false}
          formHorizontal={false}
          marginTop={90}
        />
        
        <Content  style={{width: 200}}  padder>
        <Form onPress={this.showDateTimePicker}>
          <Item floatingLabel onKeyPress={this.showDateTimePicker}>   
            <Input caretHidden   value={value ? moment(value).format(displayFormat) : ''} onFocus={this.showDateTimePicker} />
          <Label>date of birth</Label>
          </Item>
          <DateTimePicker
            date={value ? new Date(value) : new Date()}
            isVisible={show}
            mode={mode}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
          </Form>
        </Content>
        <View style={styles.fixToText}>
        <Button 
          color="#3740FE"
          title="Create an account"
          onPress={() => this.registerUser()}
        />
</View>
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>       
      
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
  header: {

    textAlign: 'center',
 marginTop: 0,
    },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },  
  fixToText:{
    marginTop: 25,
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});