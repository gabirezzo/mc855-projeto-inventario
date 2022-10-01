import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function ItemScreen ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="ok"
                onPress={() => {}}
            />
            <Button
                title="not ok"
                onPress={() => {}}
            />
        </View>
    );
}