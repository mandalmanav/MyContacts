import React from 'react';
import { Pressable } from 'react-native';
import { StyleSheet, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CONTACT_DETAILS } from '../../../route-constant';
import { updateContactAction } from '../../store/actions/contacts';
import { validateContact } from '../../utils/validate';

export default ({ navigation }) => {
    let { contact } = useSelector(state => state)
    let dispatch = useDispatch()
    return (<Pressable onPress={async () => {
        if (validateContact(contact)) {
            await updateContactAction(dispatch, { id: contact.id, contact })
            navigation.navigate(CONTACT_DETAILS)
        }
        else {
            return
        }


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