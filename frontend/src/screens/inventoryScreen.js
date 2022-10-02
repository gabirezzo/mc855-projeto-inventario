import * as React from 'react';
import { Button, View, Text } from 'react-native';

const room_list = ['sala do bem', 'sala do mal', 'sala ok', 'sala ruim', 'sala legal', 'sala fofinha', 'sala 5', 'sala 13 pt']

create_room_list = (navigation) => {
    rooms = []
    for (let i = 0; i < room_list.length; i++) {
        rooms.push(
            <Button
                title={room_list[i] + i}
                onPress={() => navigation.navigate(
                    'Room',
                    {
                        room_num: i,
                        room_name: room_list[i]
                    }
                    )}
                key={i}
            />
        )
    }
    return rooms
}

export default function InventoryScreen ({ route, navigation }) {

    const { inventory_num, inventory_name } = route.params

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>Inventário {inventory_num} - {inventory_name}</Text>
            {this.create_room_list( navigation )}
        </View>
    );
}