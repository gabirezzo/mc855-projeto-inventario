import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

export default function LoginScreen ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: 'black'}}>Login</Text>
            <Text style={{color: 'black'}}>email</Text>
            <TextInput title="email" style={{backgroundColor: 'white'}}></TextInput>
            <Text style={{color: 'black'}}>senha</Text>
            <TextInput title="senha" style={{backgroundColor: 'white'}}></TextInput>
            
            <Button
                title="Login"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}