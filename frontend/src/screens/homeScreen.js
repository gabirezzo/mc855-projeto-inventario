import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Planilha"
                onPress={() => navigation.navigate('Sheet')}
            />
            <Button
                title="Inventarios"
                onPress={() => navigation.navigate('InventoryList')}
            />
        </View>
    );
}