import React, { useDebugValue } from 'react';
import { Pressable ,Alert} from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CONTACT_DETAILS } from '../../../route-constant';
import { addContactAction } from '../../store/actions/contacts';
const alertTitle = "Invalid"
const errorMessage1="First name cannot be left blank"
const errorMessage2="Last name cannot be left blank"
const errorMessage3="Mobile number should consist of 10 digits"

export default ({navigation }) => {
    let {contact} = useSelector(state=>state)
    let dispatch = useDispatch()
    return (<Pressable onPress={async() => {
        if (contact.firstName==undefined||!contact.firstName.trim().length) {
                        Alert.alert(
                            alertTitle,
                            errorMessage1,
                            [
                                {
                                    text: "OK",
                                    onPress: () => {
                                        return
                                    },
                                    style: "cancel"
                                }
                            ]
                        );
                        return
                    }
                    if (contact.lastName==undefined||!contact.lastName.trim().length) {
                        Alert.alert(
                            alertTitle,
                            errorMessage2,
                            [
                                {
                                    text: "OK",
                                    onPress: () => {
                                        return
                                    },
                                    style: "cancel"
                                }
                            ]
                        );
                        return
                    }
                    if (contact.mobile==undefined||String(contact.mobile).length < 10) {
                        Alert.alert(
                            alertTitle,
                            errorMessage3,
                            [
                                {
                                    text: "OK",
                                    onPress: () => {
                                        return
                                    },
                                    style: "cancel"
                                }
                            ]
                        );
                        return
                    }
        await addContactAction(dispatch,contact)
        navigation.navigate(CONTACT_DETAILS)
      }}><Text style={{ ...styles.primaryText, ...styles.actionFS, ...{ marginRight: 8 } }}>Save</Text>
      </Pressable>)
}
const styles = StyleSheet.create({
    primaryText: {
        color: '#4d90fe'
    },
    actionFS: {
        fontSize: 16
    }
});