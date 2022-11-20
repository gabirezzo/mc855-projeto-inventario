
import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import { Button, StyleSheet, View, Text, TouchableHighlight, FlatList,  Dimensions, Image} from 'react-native';

import EventEmitter from './EventEmitter';

import { getData, updatePatrimonio, findById } from '../api/functions';

// orientation must fixed
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height; 

export default function InventoryScreen({ route, navigation }) {
    const [roomList, setRoomList] = useState([])

    const [missingRooms, setMissingRooms] = useState([])

    const [items, setItems] = useState({
        inventoryConfirmedItems: {},
        inventoryUnconfirmedItems: {}
    })

    const [loadItems, setLoadItems] = useState(true)

    const [movedItems, setMovedItems] = useState([])

    const [dummy, setDummy] = useState(0)

    let tempList = []


    useEffect(() => {
        const fetchData = async () => {
            
            const result = await getData();
            createRoomList(result['data'])
            // createItemsList(result['data'])

        }

        const updateInventoryConfirmedItems = (room, confirmedItems, unconfirmedItems) => {
            setDummy(dummy+1)

            tempItems = items

            tempItems['inventoryConfirmedItems'][room] = confirmedItems
            tempItems['inventoryUnconfirmedItems'][room] = unconfirmedItems

            const index = missingRooms.indexOf(room)
            let tempMissingRooms = missingRooms

            tempMissingRooms.splice(index, 1);


            setItems(tempItems)  
            setMissingRooms(tempMissingRooms)
        }

        const updateMoveItems = (roomInput, itemId, roomId) => {

            let tempMovedItems = movedItems
            tempMovedItems.push({
                item: itemId,
                salaAntiga: roomId,
                salaNova: roomInput
            })

            setMovedItems(tempMovedItems)

            setDummy(dummy+1)
        }

        EventEmitter.addListener("OnInventoryItemConfirm", updateInventoryConfirmedItems)
        EventEmitter.addListener("OnInventoryItemMove", updateMoveItems)

        fetchData()

        return () => {
            EventEmitter.removeListener("OnInventoryItemConfirm", updateInventoryConfirmedItems)
            EventEmitter.removeListener("OnInventoryItemMove", updateMoveItems)
        }
    }, [])

    // Cria listas de salas
    const createRoomList = (objList) => {
        objList.forEach(extractRooms)
        setRoomList(roomList.filter(onlyUnique))
        setMissingRooms(roomList.filter(onlyUnique))
    }

    const extractRooms = (roomObject) => {
        roomList.push(roomObject['localN2'])
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    
    // Clica no botão
    const onPressRoom = (item) => {
        setDummy(dummy+1)
        const index = missingRooms.indexOf(item)
        const firstVisit = index != -1
        navigation.navigate("Room", {
            roomName: item, 
            firstVisit: firstVisit,
            confirmedItems: items['inventoryConfirmedItems'][item],
            unconfirmedItems: items['inventoryUnconfirmedItems'][item]
        });
    };



    const handleButton = () => {
        console.log(handleGerarRelatorio())
    }

    const handleGerarRelatorio = () => {
        let msg = "Movimentações realizadas:\n"
        for(let i = 0; i < movedItems.length; i++) {
            msg += "\tId patrimônio: " + movedItems[i]['item'] + "\n"
            msg += "\tSala antiga: " + movedItems[i]['salaAntiga'] + "\n"
            msg += "\tSala Nova: " + movedItems[i]['salaNova'] + "\n"
        }

        msg += "\nPatrimônios não encontrados:\n"

        for(const sala in items['inventoryUnconfirmedItems']) {

            msg += "Sala: "+ sala + "\n"
            for(let i = 0; i < items['inventoryUnconfirmedItems'][sala].length; i++) {
                msg += "\t" + items['inventoryUnconfirmedItems'][sala][i] + "\n"

            }

            msg += "\n"
        }

        return msg
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
