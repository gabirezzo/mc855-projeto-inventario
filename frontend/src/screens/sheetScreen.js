import * as React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

let a = 45

export default function SheetScreen ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="planilha"
                onPress={() => {}}
            />
            <Text style={{color: 'black'}}>ultima visualização: {a}</Text>
            <Button
                title="Upload"
                style={styles.btnClickContain}
                onPress={() => {}}
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