import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

const room_list = [1,2,3,4,5,6,7,8,9]

create_room_list = (navigation) => {
    rooms = []
    for (let i = 0; i < room_list.length; i++) {
        rooms.push(
            <Button
                title={room_list[i].toString() + i}
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
            <TextInput title="email"/>
            <Text style={{ color: 'black' }}>Inventário {inventory_num} - {inventory_name}</Text>
            {this.create_room_list( navigation )}
        </View>
    );
}