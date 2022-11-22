import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';

import EventEmitter from './EventEmitter';

import {getData, findBylocalN2} from '../api/functions';

// orientation must fixed
const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

export default function InventoryScreen({route, navigation}) {
  const [roomList, setRoomList] = useState([]);
  const [missingRooms, setMissingRooms] = useState([]);

  const [items, setItems] = useState({});

  const [isFirstLoad, setFirstLoad] = useState(true);

  const [itemMoves, setItemMoves] = useState([]);

  const [dummy, setDummy] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getData();

      let tempRoomList = createRoomList(allData.data);

      let tempItems = items;

      for (let i = 0; i < tempRoomList.length; i++) {
        const roomData = await findBylocalN2(tempRoomList[i]);

        const roomUnconfirmedItems = extractItems(roomData.data);

        const tempRoomName = tempRoomList[i];

        tempItems[tempRoomName] = {
          confirmedItems: [],
          unconfirmedItems: roomUnconfirmedItems,
        };
      }

      setItems(tempItems);
    };

    const moveItemInventory = (itemId, prevRoomId, newRoomId) => {
      let tempItems = items;
      if (!tempItems[newRoomId].confirmedItems.includes(itemId)) {
        tempItems[newRoomId].confirmedItems.push(itemId);
        setItems(tempItems);
      }

      let tempMoves = itemMoves;
      if (!tempMoves.includes(prevRoomId)) {
        tempMoves.push({
          itemId: itemId,
          prevRoom: prevRoomId,
          newRoom: newRoomId,
        });
        setItemMoves(tempMoves);
      }
    };

    // EventEmitter.addListener("OnInventoryItemConfirm", updateInventoryConfirmedItems)
    EventEmitter.addListener('OnInventoryItemMove', moveItemInventory);

    if (isFirstLoad) {
      fetchData();
      setFirstLoad(false);
    }

    return () => {
      // EventEmitter.removeListener("OnInventoryItemConfirm", updateInventoryConfirmedItems)
      EventEmitter.removeListener('OnInventoryItemMove', moveItemInventory);
    };
  }, []);

  // Cria listas de salas
  const createRoomList = objList => {
    let tempRoomList = [];
    for (let i = 0; i < objList.length; i++) {
      tempRoomList.push(objList[i].localN2);
    }
    tempRoomList = tempRoomList
      .filter(onlyUnique)
      .filter(room => room.startsWith('SALA'))
      .sort();
    setRoomList(tempRoomList);
    setMissingRooms(tempRoomList);

    return tempRoomList;
  };

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  // Cria listas de item por sala
  const extractItems = objList => {
    let itemList = [];
    for (let i = 0; i < objList.length; i++) {
      itemList.push(objList[i]._id);
    }
    return itemList;
  };

  // Clica no botão
  const onPressRoom = item => {
    setDummy(dummy + 1);
    navigation.navigate('Room', {
      items: items[item],
      roomName: item,
      roomList: roomList,
    });
  };

  const handleButton = () => {
    console.log(handleGerarRelatorio());
  };

  const handleGerarRelatorio = () => {
    let msg = 'Movimentações realizadas:\n';
    for (let i = 0; i < itemMoves.length; i++) {
      msg += '\t##########\n';
      msg += '\tId patrimônio: ' + itemMoves[i].itemId + '\n';
      msg += '\tSala antiga: ' + itemMoves[i].prevRoom + '\n';
      msg += '\tSala Nova: ' + itemMoves[i].newRoom + '\n';
    }

    msg += '\nPatrimônios não encontrados:\n';

    for (const sala in items) {
      msg += 'Sala: ' + sala + '\n';
      for (let i = 0; i < items[sala].unconfirmedItems.length; i++) {
        msg += '\t' + items[sala].unconfirmedItems[i] + '\n';
      }

      msg += '\n';
    }

    return msg;
  };

  const {inventory_num, inventory_name} = route.params;

  const renderRoom = ({item}) => (
    <TouchableHighlight onPress={() => onPressRoom(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={AppIcon.images.classroom} />
        <Text style={styles.title}>{item}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.btnContainer}>
      <Text style={AppStyles.fonts}>{inventory_name}</Text>
      <Pressable style={AppIcon.button} onPress={() => handleButton()}>
        <Text style={[AppStyles.buttonText]}>Gerar Relatório</Text>
      </Pressable>
      <FlatList
        style={styles.flatList}
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={roomList}
        renderItem={renderRoom}
        keyExtractor={item => item}
      />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.color.white,
  },
  flatList: {
    marginTop: 10,
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
    borderRadius: 15,
    backgroundColor: '#DCDCDC',
  },
  photo: {
    width: (SCREEN_WIDTH - (numColums + 1) * ITEM_MARGIN) / numColums,
    height: ITEM_HEIGHT,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
    marginBottom: 5,
  },
});
