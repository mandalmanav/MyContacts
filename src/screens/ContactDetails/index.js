import React from 'react'
import { View, Text, StyleSheet, Pressable, Image, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { CONTACT_LIST } from '../../../route-constant';
import { deleteContactAction } from '../../store/actions/contacts'
const alertTitle = "Delete";
const alertMessage = "Are you sure you want to delete this contact ?"
const cancelText = "Cancel"
const confirmText = "Yes, Delete"

export default ({navigation }) => {
    const { contact } = useSelector(state => state)
    const dispatch = useDispatch()
    const deleteContact = (contact) => {
        Alert.alert(
            alertTitle,
            alertMessage,
            [
                {
                    text: cancelText,
                    onPress: () => {
                        return
                    },
                    style: "cancel"
                },
                {
                    text: confirmText, onPress: async () => {
                        try {
                            await deleteContactAction(dispatch, contact.id)
                            navigation.navigate(CONTACT_LIST)
                        }
                        catch (e) {
                            alert(e)
                        }
                    }
                }
            ]
        );
    }
    return <View style={styles.container}>
        <View style={styles.head}>
            <View style={styles.avatarBar}>
                <View style={styles.avatarBox}>
                    <Image
                        testID="image"
                        style={styles.avatar}
                        source={{
                            uri: contact.image,
                        }}
                    />
                </View>
            </View>
            <View style={styles.nameView}>
                <Text testID="full-name" style={styles.label}>{contact.firstName} {contact.lastName}</Text>
            </View>
        </View>
        <View style={styles.content}>
            <View style={styles.formItem} >
                <Text testID="mobile-label" style={styles.formLabel}>Mobile</Text>
                <Text testID="mobile" style={styles.formValue}>{contact.countryCode} {contact.mobile}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-around' }}>
                <View style={{
                    alignItems: 'flex-start',
                    marginLeft: 20
                }}>
                    <Pressable testID="delete-button" onPress={() => deleteContact(contact)}>
                        <Text style={{
                            padding: 8,
                            backgroundColor: 'red',
                            fontWeight: 'bold',
                            color: '#fff'
                        }}>Delete Contact</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    head: {
        padding: 8,
        paddingBottom: 78
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    edit: {
        fontSize: 18,
        color: '#4d90fe'
    },
    avatarBar: {
        flexDirection: 'row',
        justifyContent: 'center'
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
    nameView: {
        padding: 4,
        alignItems: 'center'
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 4
    },
    actionBar: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    content: {
        backgroundColor: '#fff',
        flex: 3
    },
    formItem: {
        backgroundColor: '#fff',
        padding: 8,
        paddingBottom: 0,
    },
    formLabel: {
        fontSize: 18
    },
    formValue: {
        fontSize: 26,
        color: '#4d90fe',
        paddingTop: 6,
        paddingBottom: 6,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: .5
    }
})