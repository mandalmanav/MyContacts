import React, { useState } from 'react'
import Header from './Header'
import MainList from './MainList'
import { StyleSheet ,SafeAreaView } from 'react-native'
export default ({navigation,navigation:{navigate}}) => {
    return <SafeAreaView  style={styles.containerStyle}>
        <Header ></Header>
        <MainList navigation={navigation} navigate={navigate} ></MainList>
    </SafeAreaView >
}
const styles = StyleSheet.create({
    containerStyle: {
        flex:1,
        padding: 12,
        backgroundColor: 'white'
    }
})