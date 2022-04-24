import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View,Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native';

 function LoginScreen({navigation}) {
  
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
            <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          keyboardType='email-address'
          placeholder="E-mail "
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={"grey"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={"grey"}
          underlineColorAndroid="transparent"
        />
      </View>
      <Button
        
        style={styles.loginText}
        onPress={() => onPressLogin()}
        title="Log in"
        >
      </Button>

      <Text>Don't Have An Account?</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('RegisterScreen')}>
       <Text style={styles.registerText}>REGISTER HERE</Text>
       </TouchableOpacity>
      
      
    </View>
 </TouchableWithoutFeedback>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 66,
    
  },
  or: {
    color: 'black',
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#ff5a66",
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'center',
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: 20,
    color: "#696969",
  },
  loginContainer: {
    width: "70%",
    backgroundColor: "#ff5a66",
    borderRadius: 25,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: "white",
  },
  registerText:{
    color: '#4ecdc4',
  },
  placeholder: {
    color: 'red',
  },
  InputContainer: {
    width: "80%",
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "grey",
    borderRadius: 25,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#696969",
  },

});

export default LoginScreen;
