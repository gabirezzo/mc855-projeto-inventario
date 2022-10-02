import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function RoomScreen ({ route, navigation }) {

    const { room_num, room_name } = route.params

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>Sala {room_num} - {room_name}</Text>
            <Button
                title="Escanear"
                onPress={() => navigation.navigate('Item')}
            />
        </View>
    );
}