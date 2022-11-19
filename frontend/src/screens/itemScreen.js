import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import {StyleSheet, View, Text , Pressable, Image } from 'react-native';
import { getData } from '../api/functions';


export default function ItemScreen ({ route, navigation }) {
    const [item, setItem] = useState({})

    const { itemId } = route.params

    let tempItem = {}

    useEffect(() => {
        const fetchData = async () => {
            console.log(itemId)
            const result = await getData();
            createItem(result['data'])
            console.log(item)
        }
        fetchData()
    }, [])

    const createItem = (objList) => {
        objList.forEach(extractItem)
        setItem(tempItem)
    }

    const extractItem = (itemObj) => {
        if(itemObj['_id'] == itemId) {
            tempItem = itemObj
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.IconContainer}>
                <Text style={styles.title}>Patrimônio id: {item['_id']}</Text>
                <Text style={styles.title}>Descrição: {item['descricao']}</Text>
                <Text style={styles.title}>sala: {item['sala']}</Text>
                <Text style={styles.title}>predio: {item['predio']}</Text>
                <Pressable
                style={styles.loginContainer}
                onPress={() => navigation.navigate('')}>
                <Image source={AppIcon.images.confirma}style={styles.btnIcon} />
                </Pressable>
            </View>

            <View style={styles.IconContainer}>
                <Pressable
                style={styles.loginContainer}
                onPress={() => navigation.navigate('')}>
                <Image source={AppIcon.images.fecha} style={styles.btnIcon} />
                </Pressable>
            </View>
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
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
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
      loginContainer: {
          width: AppStyles.buttonWidth.main,
          borderRadius: AppStyles.borderRadius.main,
          padding: 10,
          marginTop: 30,
      },
      IconContainer: {
          justifyContent: 'center',
          alignItems: 'center'
      },
      btnIcon: {
          height: 100,
          width: 100,
          marginTop: 10
      },
      iconText: {
          color: AppStyles.color.subtitle,
          textAlign: 'center'
      },
  });