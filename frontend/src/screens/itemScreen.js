import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {getData} from '../api/functions';

import EventEmitter from './EventEmitter';

import DialogInput from 'react-native-dialog-input';

export default function ItemScreen({route, navigation}) {
  const [item, setItem] = useState({});

  const [isDialogVisible, showDialog] = useState(false);

  const {itemId, roomId} = route.params;

  let tempItem = {};

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      createItem(result.data);
    };
    fetchData();
  }, []);

  const createItem = objList => {
    objList.forEach(extractItem);
    setItem(tempItem);
  };

  const extractItem = itemObj => {
    if (itemObj._id == itemId) {
      tempItem = itemObj;
    }
  };

  const handleConfirmItem = () => {
    EventEmitter.notify('OnItemConfirm', itemId);
    navigation.goBack();
  };

  const handleRedBtn = () => {
    showDialog(true);
  };

  const handleMoveItem = roomInput => {
    EventEmitter.notify('OnItemMove', itemId, roomId, roomInput);
    showDialog(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.IconContainer}>
        <Text style={AppStyles.fonts}>PATRIMÔNIO ID: {item._id}</Text>
        <Text style={AppStyles.fonts}>Descrição: {item.descricao}</Text>
        {/* <Text style={AppStyles.fonts}>Sala: {item.sala}</Text>
        <Text style={AppStyles.fonts}>Prédio: {item.predio}</Text> */}
        <View style={styles.btnContainer}>
          <Pressable
            style={styles.loginContainer}
            onPress={() => handleConfirmItem()}>
            <Image source={AppIcon.images.confirma} style={styles.btnIcon} />
          </Pressable>
          <Pressable
            style={styles.loginContainer}
            onPress={() => handleRedBtn()}>
            <Image source={AppIcon.images.fecha} style={styles.btnIcon} />
          </Pressable>
        </View>
      </View>

      <DialogInput
        isDialogVisible={isDialogVisible}
        title={'Mover patrimônio'}
        message={'Digite a sala para mover o patrimônoio'}
        hintInput={'Sala 30'}
        submitInput={inputText => handleMoveItem(inputText)}
        closeDialog={() => {
          showDialog(false);
        }}
        style={styles.title}
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
    marginBottom: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppStyles.color.white,
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
    width: 100,
    padding: 10,
    marginTop: 70,
    margin: 30,
  },
  IconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnIcon: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  iconText: {
    color: AppStyles.color.subtitle,
    textAlign: 'center',
  },
});
