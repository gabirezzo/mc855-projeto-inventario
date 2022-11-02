import React, { useEffect, useState } from 'react';
import { AppStyles } from '../AppStyles';
import { AppIcon } from '../AppStyles';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';

create_roomList = (navigation, roomList) => {
    rooms = []
    for (let i = 0; i < roomList.length; i++) {
        rooms.push(
            <Button
                title={'sala 3' + (roomList[i] * 10).toString()}
                style={styles.btnClickContain}
                onPress={() => navigation.navigate(
                    'Room',
                    {
                        room_num: i,
                        room_name: roomList[i]
                    }
                )}
                key={i}
            />
        )
    }
    return rooms
}

export default function InventoryScreen({ route, navigation }) {

    const { inventory_num, inventory_name } = route.params

    const [roomList, setRoomList] = useState([])

    const updateRoomList = (newRoomList) => setRoomList(newRoomList)

    useEffect(() => {
        updateRoomList([1,2,3,4,5])
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput title="email" />
            <Text style={{ color: 'black' }}>Inventário {inventory_num} - {inventory_name}</Text>
            {this.create_roomList(navigation, roomList)}
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