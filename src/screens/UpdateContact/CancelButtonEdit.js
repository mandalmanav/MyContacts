import React from 'react';
import { Pressable } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CONTACT_DETAILS } from '../../../route-constant';
import { SET_SELECTED } from '../../store/constants';
export default ({ navigation }) => {
    let { contact, contacts } = useSelector(state => state)
    let dispatch = useDispatch()
    return (<Pressable onPress={async () => {
        let oldContact = contacts.filter(c => c.id == contact.id)[0]
        dispatch({
            type: SET_SELECTED,
            payload: oldContact
        })
        navigation.navigate(CONTACT_DETAILS)
    }}><Text style={{ ...styles.primaryText, ...styles.actionFS, ...styles.ml8 }}>Cancel</Text>
    </Pressable>)
}
const styles = StyleSheet.create({
    primaryText: {
        color: '#4d90fe'
    },
    actionFS: {
        fontSize: 16
    },
    ml8:{
        marginLeft:8
    }
});