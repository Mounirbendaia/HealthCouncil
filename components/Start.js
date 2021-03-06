import React from 'react';
import {  StyleSheet,    View, Text, ScrollView,  Image, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';

const Start = ({navigation}) => {

    const handleSubmitPress = () => {
           
            navigation.navigate('Signup');
          
    };

    const handleSubmitPress2 = () => {
           
        navigation.navigate('Login');
      
};
  return (
    <View style={styles.mainBody}>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Image/Logo.png')}
                style={{
                  width: '50%',
                  height: 250,
                  resizeMode: 'contain',
                
                }}
              />
            </View>
    
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Get Started </Text>
            </TouchableOpacity>
            <Text 
          style={styles.loginText}
          onPress={handleSubmitPress2}>
          Already Have an existing account? Click here to login
        </Text>     
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default Start;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#3d6fac',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#307ecc',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
});
