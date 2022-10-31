import React, {useEffect, useState} from 'react';
import {Pressable,Image, View, StyleSheet, Text, TextInput,Alert,ActivityIndicator} from 'react-native';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';


export default function LoginScreen ({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    return (
      <View style={styles.container}>
        <Image source={AppIcon.images.logo}style={styles.btnIcon} />
        <Text style={[styles.title, styles.leftTitle]}>Login</Text>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            secureTextEntry={true}
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <Pressable
          style={styles.loginContainer}
          onPress={() => navigation.navigate('Home')}>
          <Text style={[styles.loginText]}>Log In</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    btnClickContain: {
      flexDirection: 'row',
      padding: 5,
      marginTop: 5,
      marginBottom: 5,
    },
    textBox: {
      fontSize: 16,
      marginTop: 2,
      backgroundColor: 'white'
    },
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: AppStyles.fontSize.title,
      fontWeight: 'bold',
      color: AppStyles.color.blue,
      marginTop: 20,
      marginBottom: 20,
    },
    leftTitle: {
      alignSelf: 'stretch',
      textAlign: 'left',
      marginLeft: 20,
    },
    content: {
      paddingLeft: 50,
      paddingRight: 50,
      textAlign: 'center',
      fontSize: AppStyles.fontSize.content,
      color: AppStyles.color.text,
    },
    loginContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.blue,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30,
    },
    loginText: {
      color: AppStyles.color.white,
      textAlign: 'center'
    },
    placeholder: {
      color: 'blue',
    },
    InputContainer: {
      width: AppStyles.textInputWidth.main,
      marginTop: 30,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: AppStyles.color.grey,
      borderRadius: AppStyles.borderRadius.main,
      backgroundColor: 'white'
    },
    btnIcon: {
        height: 150,
        width: 150,
    },
    body: {
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,
      color: AppStyles.color.text,
    }
  });