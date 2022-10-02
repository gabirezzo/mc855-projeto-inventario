
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/homeScreen';
import LoginScreen from './src/screens/loginScreen';
import SheetScreen from './src/screens/sheetScreen';
import InventoryListScreen from './src/screens/inventoryListScreen';
import InventoryScreen from './src/screens/inventoryScreen';
import RoomScreen from './src/screens/roomScreen';
import ItemScreen from './src/screens/itemScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name="Sheet"
                    component={SheetScreen}
                    options={{ title: 'Planilha' }}
                />
                <Stack.Screen
                    name="InventoryList"
                    component={InventoryListScreen}
                    options={{ title: 'Lista de Inventários' }}
                />
                <Stack.Screen
                    name="Inventory"
                    component={InventoryScreen}
                    options={{ title: 'Inventário' }}
                />
                <Stack.Screen
                    name="Room"
                    component={RoomScreen}
                    options={{ title: 'Sala' }}
                />
                <Stack.Screen
                    name="Item"
                    component={ItemScreen}
                    options={{ title: 'Item' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;