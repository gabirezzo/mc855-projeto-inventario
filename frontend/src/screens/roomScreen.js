import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import { Button, StyleSheet, View, Text, TouchableHighlight, FlatList,  Dimensions, Image, Pressable} from 'react-native';

import { getData } from '../api/functions';

import EventEmitter from './EventEmitter';

// orientation must fixed
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height; 


export default function RoomScreen ({ route, navigation }) {
    
    const [dummy, setDummy] = useState(0)
    
    const { items, roomName, roomList } = route.params

    const [roomItems, setRoomItems] = useState(items)

    useEffect(() => {
        const updateConfirmedItems = (itemId) => {
            setDummy(dummy+1)
            let tempConfirmedItems = roomItems['confirmedItems']
            tempConfirmedItems.push(itemId)

            const index = roomItems['unconfirmedItems'].indexOf(itemId)
            let tempUnconfirmedItems = roomItems['unconfirmedItems']

            if(index != -1){
                tempUnconfirmedItems.splice(index, 1);
            }

            setRoomItems({
                confirmedItems: tempConfirmedItems,
                unconfirmedItems: tempUnconfirmedItems
            })
        }

        const updateItemMoved = (itemId, prevRoomId, newRoomId) => {
            if(!newRoomId.startsWith('SALA')) {
                newRoomId = 'SALA - ' + newRoomId
            }

            if(roomList.includes(newRoomId)) {
                let tempConfirmedItems = roomItems['confirmedItems']
            
                const index = items['unconfirmedItems'].indexOf(itemId)
                let tempUnconfirmedItems = items['unconfirmedItems']

                if(index != -1){
                    tempUnconfirmedItems.splice(index, 1);
                }

                setRoomItems({
                    confirmedItems: tempConfirmedItems,
                    unconfirmedItems: tempUnconfirmedItems
                })

                EventEmitter.notify('OnInventoryItemMove', itemId, prevRoomId, newRoomId)
            }
            else {
                console.log('Essa sala não existe')
            }

            
        }

        EventEmitter.addListener("OnItemConfirm", updateConfirmedItems)
        EventEmitter.addListener("OnItemMove", updateItemMoved)

        return () => {
            EventEmitter.removeListener("OnItemConfirm", updateConfirmedItems)
            EventEmitter.removeListener("OnItemMove", updateItemMoved)
        }
    })

    const onPressUnconfirmed = (item) => {
        setDummy(dummy+1)
        navigation.navigate("Item", {
            itemId: item,
            roomId: roomName
        });
    };

    const handleButton = (itemId) => {
        console.log(roomItems)
    }

    const renderUnconfirmedItems = ({ item }) => (
        <TouchableHighlight underlayColor="grey" onPress={() => onPressUnconfirmed(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={AppIcon.images.classroom} />
            <Text style={styles.title}>{item}</Text>
          </View>
        </TouchableHighlight>
      );

      const renderConfirmedItems = ({ item }) => (
        <TouchableHighlight underlayColor="green" onPress={() => {}}>
          <View style={styles.container}>
            <Image style={styles.photo} source={AppIcon.images.classroom} />
            <Text style={styles.title}>{item}</Text>
          </View>
        </TouchableHighlight>
      );

    return (
        <View>
            <Button
                title='teste'
                onPress={() => handleButton('790988')}
            />
            <Text style={{ color: 'black' }}>Sala {roomName}</Text>
            <Text style={{ color: 'black' }}>Não confirmados</Text>
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={items['unconfirmedItems']} renderItem={renderUnconfirmedItems} keyExtractor={(item) => item} />
            <Text style={{ color: 'black' }}>Confirmados</Text>
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={items['confirmedItems']} renderItem={renderConfirmedItems} keyExtractor={(item) => item} />
        </View>
        

    );
}

const numColums = 2;
// item size
const ITEM_HEIGHT = 180;
const ITEM_MARGIN = 20;

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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: ITEM_MARGIN,
        marginTop: 20,
        width: (SCREEN_WIDTH - (numColums + 1) * ITEM_MARGIN) / numColums,
        height: ITEM_HEIGHT + 75,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 15
      },
      photo: {
        width: (SCREEN_WIDTH - (numColums + 1) * ITEM_MARGIN) / numColums,
        height: ITEM_HEIGHT,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      title: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
      },
      category: {
        marginTop: 5,
        marginBottom: 5
      }
  });
