import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import { GoogleSigninButton } from 'react-native-google-signin';
import { Text } from '@rneui/base';

WebBrowser.maybeCompleteAuthSession();

const GoogleLoginButton = () => {
  const [userInfo, setUserInfo] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: '1049251486525-5nbueurfenans14bdmbl5sikronflq9s.apps.googleusercontent.com', // IOS
    //clientId: '1049251486525-n8hsqf2sll4j24f2o3pnmsolf8q2eta8.apps.googleusercontent.com', // WEB
    scopes: ['profile', 'email'],
  });

  useEffect(() => {
    if (response?.type === 'success') {
      console.log(response.params)
      const { id_token } = response.params;

      // Send id_token to your backend for verification
      fetch('http://localhost:5106/auth/google/callback', {
      //fetch('https://recipeapp2.fly.dev/auth/google/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ Token: id_token }),
      })
        .then((response) => response.json())
        .then((data) => {
          setUserInfo(data);
          // Handle the response from your backend
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text>
        userinfo: {userInfo}
        </Text>
      <Button
        disabled={!request}
        title="Sign in with Google"
        onPress={() => promptAsync()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GoogleLoginButton;
