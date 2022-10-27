import * as React from 'react';
import { Button,StyleSheet, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: 'black'}}>Home Screen</Text>
            <View
                title="Planilha"
                style={styles.btnClickContain}
                onPress={() => navigation.navigate('Sheet')}
            />
            <View
                title="Inventarios"
                style={styles.btnClickContain}
                onPress={() => navigation.navigate('InventoryList')}
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