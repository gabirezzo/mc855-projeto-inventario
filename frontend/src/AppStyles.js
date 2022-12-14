import {Platform, StyleSheet, Dimensions} from 'react-native';
import {Configuration} from './Configuration';

const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const AppStyles = {
  color: {
    main: '#5ea23a',
    text: '#696969',
    title: '#464646',
    subtitle: '#545454',
    categoryTitle: '#161616',
    tint: '#ff5a66',
    description: '#bbbbbb',
    filterTitle: '#8a8a8a',
    starRating: '#2bdf85',
    location: '#a9a9a9',
    white: 'white',
    facebook: '#4267b2',
    grey: 'grey',
    greenBlue: '#00aea8',
    placeholder: '#a0a0a0',
    background: 'white',
    blue: '#3293fe',
  },
  fontSize: {
    title: 30,
    content: 20,
    normal: 16,
  },
  fonts: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  buttonWidth: {
    main: '70%',
  },
  textInputWidth: {
    main: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  borderRadius: {
    main: 25,
    small: 5,
  },
};

export const AppIcon = {
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    marginRight: 10,
  },
  style: {
    tintColor: AppStyles.color.tint,
    width: 25,
    height: 25,
  },
  images: {
    // home: require("../assets/icons/home.png"),
    // defaultUser: require("../assets/icons/default_user.jpg"),
    // logout: require("../assets/icons/shutdown.png"),
    // menu: require("../assets/icons/menu.png")
    planilha: require('../src/assets/icons/sheets.png'),
    logo: require('../src/assets/icons/logo.png'),
    inventario: require('../src/assets/icons/inventory.png'),
    sala: require('../src/assets/icons/room.png'),
    classroom: require('../src/assets/icons/classroom.png'),
    confirma: require('../src/assets/icons/checked.png'),
    fecha: require('../src/assets/icons/close.png'),
    pergunta: require('../src/assets/icons/problem.png'),
    scanner: require('../src/assets/icons/scanner.png'),
    monitor: require('../src/assets/icons/monitor.png'),
    cadeira: require('../src/assets/icons/desk-chair.png'),
  },
  button: {
    width: 200,
    backgroundColor: AppStyles.color.blue,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
};

export const HeaderButtonStyle = StyleSheet.create({
  multi: {
    flexDirection: 'row',
  },
  container: {
    padding: 10,
  },
  image: {
    justifyContent: 'center',
    width: 35,
    height: 35,
    margin: 6,
  },
  rightButton: {
    color: AppStyles.color.tint,
    marginRight: 10,
    fontWeight: 'normal',
  },
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: AppStyles.color.subtitle,
    fontWeight: 'bold',
  },
  subtitleView: {
    minHeight: 55,
    flexDirection: 'row',
    paddingTop: 5,
    marginLeft: 10,
  },
  leftSubtitle: {
    flex: 2,
  },
  avatarStyle: {
    height: 80,
    width: 80,
  },
});
