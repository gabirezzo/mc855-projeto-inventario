
import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import { Button, StyleSheet, View, Text, TouchableHighlight, FlatList,  Dimensions, Image} from 'react-native';

// orientation must fixed
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const room_list = [1,2,3,4,5,6,7,8,9]


export default function InventoryScreen({ route, navigation }) {

    const onPressRoom = (item) => {
        navigation.navigate("Room", { item });
    };

    const { inventory_num, inventory_name } = route.params

    const renderRoom = ({ item }) => (
        <TouchableHighlight underlayColor="grey" onPress={() => onPressRoom(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={AppIcon.images.classroom} />
            <Text style={styles.title}>Sala 303</Text>
          </View>
        </TouchableHighlight>
      );

    return (

        <View>
            <Text style={{ color: 'black' }}>Inventário {inventory_num} - {inventory_name}</Text>
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={room_list} renderItem={renderRoom} keyExtractor={(item) => `${item.recipeId}`} />
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
