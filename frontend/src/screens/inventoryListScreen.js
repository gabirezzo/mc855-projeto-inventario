import * as React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

let inventory_list = ['1', '2', '3','inventario', 'top', 'oloco']

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
            <Text style={{color: 'black'}}>Inventário</Text>
            {this.create_list(navigation)}
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
    }
  });