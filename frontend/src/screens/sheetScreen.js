import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function SheetScreen ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Upload"
                onPress={() => {}}
            />
        </View>
    );
}