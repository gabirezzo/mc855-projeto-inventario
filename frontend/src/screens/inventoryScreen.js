
import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import { Button, StyleSheet, View, Text, TouchableHighlight, FlatList,  Dimensions, Image} from 'react-native';

import EventEmitter from './EventEmitter';

import { getData } from '../api/functions';

// orientation must fixed
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height; 

export default function InventoryScreen({ route, navigation }) {
    const [roomList, setRoomList] = useState([])

    const [items, setItems] = useState({
        inventoryConfirmedItems: [],
        inventoryUnconfirmedItems: []
    })

    const [loadItems, setLoadItems] = useState(true)

    const [dummy, setDummy] = useState(0)

    let tempList = []


    useEffect(() => {
        const fetchData = async () => {
            
            const result = await getData();
            createRoomList(result['data'])
            createItemsList(result['data'])

        }

        const updateInventoryConfirmedItems = (itemId) => {
            setDummy(dummy+1)

            let inventoryConfirmedItems = items['inventoryConfirmedItems']
            inventoryConfirmedItems.push(itemId)

            const index = items['inventoryUnconfirmedItems'].indexOf(itemId)
            let inventoryUnconfirmedItems = items['inventoryUnconfirmedItems']

            inventoryUnconfirmedItems.splice(index, 1);

            console.log('inventoryUnconfirmedItems', inventoryUnconfirmedItems)

            setItems({
                inventoryConfirmedItems: inventoryConfirmedItems,
                inventoryUnconfirmedItems: inventoryUnconfirmedItems
            })  
            
            console.log(items)
        }

        EventEmitter.addListener("OnInventoryItemConfirm", updateInventoryConfirmedItems)

        if(loadItems) {
            fetchData()
            setLoadItems(false)
        }

        return () => {
            EventEmitter.removeListener("OnInventoryItemConfirm", updateInventoryConfirmedItems)
        }
    }, [])


    const createRoomList = (objList) => {
        objList.forEach(extractRooms)
        setRoomList(roomList.filter(onlyUnique))
    }

    const extractRooms = (roomObject) => {
        roomList.push(roomObject['localN2'])
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    const extractItem = (itemObj) => {
        tempList.push(itemObj['_id'])
    }

    const createItemsList = (objList) => {
        objList.forEach(extractItem)
        setItems({
            confirmedItems: items['inventoryConfirmedItems'],
            unconfirmedItems: tempList
        })
    }
    
    const onPressRoom = (item) => {
        setDummy(dummy+1)
        navigation.navigate("Room", {
            roomName: item
        });
    };

    const handleButton = () => {
        console.log(roomList)
    }

    const { inventory_num, inventory_name } = route.params

    const renderRoom = ({ item }) => (
        <TouchableHighlight underlayColor="grey" onPress={() => onPressRoom(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={AppIcon.images.classroom} />
            <Text style={styles.title}>{item}</Text>
          </View>
        </TouchableHighlight>
      );

    return (

        <View>
            <Text style={{ color: 'black' }}>{inventory_name}</Text>
            <Button
                title='teste'
                onPress={() => handleButton()}
            />
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={roomList} renderItem={renderRoom} keyExtractor={(item) => `${item.recipeId}`} />
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
