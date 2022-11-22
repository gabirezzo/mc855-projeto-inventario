import React, {useEffect, useState} from 'react';
import {
  Pressable,
  Image,
  TextInput,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';

import FileBase64 from 'react-file-base64';
import {getData} from '../api/functions';

let a = '21/11/2022';

export default function SheetScreen({navigation}) {
  const [items, setItems] = useState({});
  const [obs, setObs] = useState('');

  const onclickHandler = async () => {
    // e.preventDefault();
    const result = await getData();
    // console.log(result['data'])
    console.log(result.data[0].sala);
    // console.log(result['data'][0]['sala'])
    // setItems(result);
    // console.log(JSON.stringify(items))
  };

  // useEffect(() => {
  //     const fetchData = async () => {
  //         console.log('ai mds q doido')
  //         const result = await getItems();
  //         console.log('fetch data;    m', result)
  //         setItems(result)
  //     }
  //     fetchData()
  // }, [])

  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Button
    //         title="planilha"
    //         onPress={() => {}}
    //     />
    //     <Button
    //         title="Upload"
    //         style={styles.btnClickContain}
    //         onPress={() => {}}
    //     />
    // </View>
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>SOBRE A PLANILHA</Text>
      <Image source={AppIcon.images.planilha} style={styles.btnIcon} />
      <Text style={AppStyles.fonts}>Ultima atualização: {a}</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          secureTextEntry={true}
          placeholder="Observação:"
          value={obs}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View>
        <Pressable style={AppIcon.button} onPress={() => onclickHandler()}>
          <Text style={AppStyles.buttonText}>Upload</Text>
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
    justifyContent: 'center',
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.blue,
    marginTop: 20,
    marginBottom: 20,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.blue,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  IconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
    backgroundColor: 'white',
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
});
