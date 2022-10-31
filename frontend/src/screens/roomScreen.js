import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import { Button, View, Text, StyleSheet} from 'react-native';

export default function RoomScreen ({ route, navigation }) {

    const { room_num, room_name } = route.params

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>Sala {room_num} - {room_name}</Text>
            <Button
                title="Escanear"
                style={styles.btnClickContain}
                onPress={() => navigation.navigate('Item')}
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