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
    const [items, setItems] = useState({
        confirmedItems: [],
        unconfirmedItems: []
    })

    const [loadItems, setLoadItems] = useState(true)
    
    const [dummy, setDummy] = useState(0)

    const { roomName } = route.params

    let tempList = []

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            createItemsList(result['data'])
        }

        const updateConfirmedItems = (itemId) => {
            setDummy(dummy+1)
            let confirmedItems = items['confirmedItems']
            confirmedItems.push(itemId)

            const index = items['unconfirmedItems'].indexOf(itemId)
            let unconfirmedItems = items['unconfirmedItems']

            unconfirmedItems.splice(index, 1);

            setItems({
                confirmedItems: confirmedItems,
                unconfirmedItems: unconfirmedItems
            })
        }

        if(loadItems) {
            fetchData()
            setLoadItems(false)
        }

        EventEmitter.addListener("OnItemConfirm", updateConfirmedItems)

        return () => {
            EventEmitter.removeListener("OnItemConfirm", updateConfirmedItems)
        }
    }, [dummy])

    const extractItem = (itemObj) => {
        if(itemObj['localN2'] == roomName) {
            tempList.push(itemObj['_id'])
        }
    }

    const createItemsList = (objList) => {
        objList.forEach(extractItem)
        setItems({
            confirmedItems: items['confirmedItems'],
            unconfirmedItems: tempList
        })
    }

    const onPressItem = (item) => {
        setDummy(dummy+1)
        navigation.navigate("Item", {
            itemId: item,
            roomId: roomName
        });
    };

    const handleButton = (itemId) => {
        setDummy(dummy+1)
    }

    const renderItems = ({ item }) => (
        <TouchableHighlight underlayColor="grey" onPress={() => onPressItem(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={AppIcon.images.classroom} />
            <Text style={styles.title}>{item}</Text>
          </View>
        </TouchableHighlight>
      );

      const renderItemsConfirmed = ({ item }) => (
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
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={items['unconfirmedItems']} renderItem={renderItems} keyExtractor={(item) => `${item.recipeId}`} />
            <Text style={{ color: 'black' }}>Confirmados</Text>
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={items['confirmedItems']} renderItem={renderItemsConfirmed} keyExtractor={(item) => `${item.recipeId}`} />
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
