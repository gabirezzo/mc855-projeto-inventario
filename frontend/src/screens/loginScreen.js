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
                style={styles.btnClickContain}
                onPress={() => navigation.navigate('Home')}
            />
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
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
    }
  });