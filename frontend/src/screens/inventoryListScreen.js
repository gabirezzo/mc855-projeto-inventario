import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import { Button, Pressable, ScrollView, StyleSheet, View, Text } from 'react-native';
import {Configuration} from '../Configuration';


let inventory_list = ['Inventário 1']

create_list = (navigation) => {
    inventories = []
    for (let i = 0; i < inventory_list.length; i++) {
        inventories.push(
            <Button
                title={inventory_list[i]}
                style={styles.btnClickContain}
                onPress={() => navigation.navigate(
                    'Inventory',
                    {
                        inventory_num: i,
                        inventory_name: inventory_list[i]
                    })}
                key={i}
            />
        )
    }
    return inventories
}

export default function InventoryListScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView style={styles.container}>
            <Text style={{color: 'black'}}>Inventário</Text>
                 {this.create_list(navigation)}
            </ScrollView>
            <Pressable
                style={styles.loginContainer}
                onPress={() => navigation.navigate('Home')}>
            </Pressable>
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
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: Configuration.home.listing_item.offset,
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: 'bold',
        color: AppStyles.color.blue,
        marginTop: 20,
        marginBottom: 20,
    }
});