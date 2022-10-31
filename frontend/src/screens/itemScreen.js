import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import { Button, StyleSheet, View, Text } from 'react-native';

export default function ItemScreen ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: 'black'}}>Item</Text>
            <Button
                title="OK"
                style={styles.btnClickContain}
                onPress={() => {}}
            />
            <Button
                title="Não consta"
                style={styles.btnClickContain}
                onPress={() => {}}
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
    }
  });