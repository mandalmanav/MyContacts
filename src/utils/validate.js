import React from 'react';
import { Alert} from 'react-native';
const alertTitle = "Invalid"
const errorMessage1="First name cannot be left blank"
const errorMessage2="Last name cannot be left blank"
const errorMessage3="Mobile number should consist of 10 digits"

export const validateContact = (contact)=>{
    if (contact.firstName==undefined||!contact.firstName.trim().length) {
        Alert.alert(
            alertTitle,
            errorMessage1,
            [
                {
                    text: "OK",
                    onPress: () => {
                        return false
                    },
                    style: "cancel"
                }
            ]
        );
        return false
    }
    else if (contact.lastName==undefined||!contact.lastName.trim().length) {
        Alert.alert(
            alertTitle,
            errorMessage2,
            [
                {
                    text: "OK",
                    onPress: () => {
                        return false
                    },
                    style: "cancel"
                }
            ]
        );
        return false
    }
    else if (contact.mobile==undefined||String(contact.mobile).length < 10) {
        Alert.alert(
            alertTitle,
            errorMessage3,
            [
                {
                    text: "OK",
                    onPress: () => {
                        return false
                    },
                    style: "cancel"
                }
            ]
        );
        return false
    }
    else{
        return true
    }
    
}