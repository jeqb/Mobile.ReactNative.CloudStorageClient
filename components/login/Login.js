import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, View, Text,
  TextInput, ActivityIndicator, Alert } from 'react-native';

import axios from 'axios';

import Constants from '../../Constants';

axios.defaults.baseURL = Constants.serverBaseUrl;


// TODO: make some of the colors variables so you can do a 
// night theme. Consider using Appearance: https://reactnative.dev/docs/appearance
const style = StyleSheet.create({
  loginText: {
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    width: 200,
    padding: 5,
    margin: 2,
    borderColor: '#337aff',
    borderWidth: 1
  },
  button: {
    color: '#337aff'
  }
});


const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleError = async (error) => {
    console.log('Authentication error');

    console.log('http status: ', error.response.status);

    // TODO: think of a better way to do this. maybe do red underlines or something.
    Alert.alert("Unauthorized response. Retry credentials");

    setIsLoading(false);
  }

  const handleSuccess = async (error) => {
    console.log('Authentication success');

    setIsLoading(false);
  }

  const handleSubmit = async (e) => {
    console.log('Submit button clicked');

    var payload = {
      emailAddress: email,
      password: password,
    }

    setIsLoading(true);

    await axios.post('/login', payload)
                .then((response) => { handleSuccess(response) })
                .catch((error) => { handleError(error) });
  }

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    );
  };

  return (
    <View>
      <Text
        style={style.loginText}
      >
        Login
      </Text>
      <TextInput
        placeholder="Email"
        style={style.textInput}
        selectionColor={style.textInput.borderColor}
        onChange={ e => setEmail(e.target.value)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={style.textInput}
        selectionColor={style.textInput.borderColor}
        onChange={ e => setPassword(e.target.value)}
      />
      <Button
        title='Submit'
        color={style.button.color}
        onPress={ (e) => { handleSubmit(e) }}
      />
    </View>
  );
}

export default Login;
