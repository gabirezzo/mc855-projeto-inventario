import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import { Button, StyleSheet, View, Text, TouchableHighlight, FlatList,  Dimensions, Image, Pressable} from 'react-native';

import { getData } from '../api/functions';

// orientation must fixed
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height; 


export default function RoomScreen ({ route, navigation }) {
    // const [data, setData] = useState([]) // lista com objetos de patrimonios dessa sala
    const [itemsList, setItemsList] = useState([]) // lista com os ids dos patrimonios dessa sala

    const { roomName } = route.params

    const tempList = []

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            createItemsList(result['data'])
        }
        fetchData()
    }, [])

    // const getRoomItems = (objList) => {
    //     const tempData = []
    //     for(let i = 0; i < objList.length; i++) {
    //         if(objList[i]['sala'] == roomName) {
    //             tempData.push(objList[i])
    //         }
    //     }
    //     setData(tempData)
    //     console.log('data room items: ', tempData)
    //     console.log('data 2: ', data)
    // }

    const extractItem = (itemObj) => {
        if(itemObj['sala'] == roomName) {
            tempList.push(itemObj['_id'])
    }
}

    const createItemsList = (objList) => {
        objList.forEach(extractItem)
        setItemsList(tempList)
    }

    const onPressItem = (item) => {
        navigation.navigate("Item", {
            itemId: item
        });
    };

    const renderItems = ({ item }) => (
        <TouchableHighlight underlayColor="grey" onPress={() => onPressItem(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={AppIcon.images.classroom} />
            <Text style={styles.title}>{item}</Text>
          </View>
        </TouchableHighlight>
      );

    return (
        <View>
            <Text style={{ color: 'black' }}>Sala {roomName}</Text>
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={itemsList} renderItem={renderItems} keyExtractor={(item) => `${item.recipeId}`} />
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
