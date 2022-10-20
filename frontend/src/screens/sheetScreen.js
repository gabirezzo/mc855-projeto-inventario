import * as React from 'react';
import { Button, View, Text } from 'react-native';

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
                onPress={() => {}}
            />
        </View>
    );
}