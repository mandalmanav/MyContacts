import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED, } from '../../store/constants';
export default () => {
    const { contact } = useSelector(state => state)
    const dispatch = useDispatch()

    const setContact = (property, value) => {
        let temp = { ...contact }
        temp[property] = value
        dispatch({
            type: SET_SELECTED,
            payload: temp
        })
    }

    return <View style={styles.container}>
        {

            <View><View style={styles.detailsContainer}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatarBox}>
                        {
                            contact.image != null ?
                                <Pressable onPress={() => {
                                    return
                                }}>
                                    <Image
                                        style={styles.avatar}
                                        source={{
                                            uri: contact.image,
                                        }}
                                    />
                                </Pressable> : <Pressable onPress={() => {
                                    return
                                }}>
                                    <Text testID="add-image-button" style={styles.centerText}>Add Image</Text>
                                </Pressable>
                        }
                    </View>
                </View>
                <View style={styles.details}>
                    <TextInput testID="first-name" value={contact.firstName} onChangeText={(value) => {
                        setContact('firstName', value)
                    }} placeholder={'Enter First Name'} style={styles.inputItem} />
                    <TextInput testID="last-name" value={contact.lastName} onChangeText={(value) => {
                        setContact('lastName', value)
                    }} placeholder={'Enter Last Name'} style={styles.inputItem} />
                </View>
            </View>
                <View style={styles.mobileContainer}>
                    <Text style={{ ...styles.actionFS, ...{ flex: 1, paddingLeft: 8 } }}>Mobile</Text>
                    <TextInput testID="mobile" onChangeText={(value) => {
                        setContact('mobile', value)
                    }} keyboardType="number-pad" value={contact.mobile} maxLength={10} style={{ ...styles.mobileInput, ...styles.inputItem }} placeholder="Add mobile"></TextInput>
                </View>
            </View>}
    </View>
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        padding: 8
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    primaryText: {
        color: '#4d90fe'
    },
    actionFS: {
        fontSize: 18
    },
    avatarContainer: {
        flex: 1
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        overflow: "hidden",
    },
    avatarBox: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsContainer: {
        flexDirection: 'row',
        paddingTop: 30
    },
    details: {
        paddingLeft: 20,
        flex: 3
    },
    inputItem: {
        borderBottomWidth: .5,
        borderBottomColor: '#e5e5e5',
        height: 40
    },
    mobileContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mobileInput: {
        flex: 3,
        marginLeft: 22
    },
    save: {
        borderWidth: 1,
        alignItems: 'center',
        width: 50,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 6,
        paddingRight: 6
    },
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-around'
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    centerText: {
        textAlign: 'center'
    }
})
