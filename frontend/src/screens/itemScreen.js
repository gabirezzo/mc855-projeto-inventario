import React, {useEffect, useState} from 'react';
import {AppStyles} from '../AppStyles';
import {AppIcon} from '../AppStyles';
import {StyleSheet, View, Text , Pressable, Image } from 'react-native';

export default function ItemScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.IconContainer}>
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
          fontSize: AppStyles.fontSize.title,
          fontWeight: 'bold',
          color: AppStyles.color.blue,
          marginTop: 20,
          marginBottom: 20,
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