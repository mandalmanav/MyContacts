import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Pressable } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ContactsList from './src/screens/ContactList'
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import appstore from './src/store'
import AddContact from './src/screens/AddContact'
import ContactDetails from './src/screens/ContactDetails'
import RightActionButton from './src/screens/AddContact/RightActionButton';
import { SET_SELECTED } from './src/store/constants';
import { ADD_CONTACT, CONTACT_DETAILS, CONTACT_LIST, EDIT_CONTACT } from './route-constant'; 
import { HeaderBackButton } from '@react-navigation/stack'
import RightActionButtonEdit from './src/screens/UpdateContact/RightActionButtonEdit';
import CancelButtonEdit from './src/screens/UpdateContact/CancelButtonEdit';
import UpdateContact from './src/screens/UpdateContact';

const store = createStore(appstore);
const Stack = createStackNavigator();
export const AddAction = ({ navigation }) => {
  let dispatch = useDispatch()
  return (<Pressable onPress={() => {
    dispatch({
      type: SET_SELECTED,
      payload: {}
    })
    navigation.navigate(ADD_CONTACT)
  }}>
    <Text style={styles.addIcon}>+</Text>
  </Pressable>)
}
const App = () => {
  return (<Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={CONTACT_LIST} options={({ navigation, route }) => ({
          title: 'Contacts',
          headerRight: () => (
            <AddAction navigation={navigation} />
          )
        })}
        >
          {
            (props) => {
              return <ContactsList {...props} />
            }
          }
        </Stack.Screen>
        <Stack.Screen name={ADD_CONTACT}
          options={({ navigation, route }) => ({
            title: 'Add',
            headerLeft: () => (
              <Pressable onPress={() => {
                navigation.navigate(CONTACT_LIST)
              }} ><Text style={{ ...styles.primaryText, ...styles.actionFS, ...{ marginLeft: 8 } }}>Cancel</Text></Pressable>
            ),
            headerRight: () => (
              <RightActionButton navigation={navigation} />
            )
          })} >
          {props => <AddContact {...props} />}
        </Stack.Screen>
        <Stack.Screen name={CONTACT_DETAILS} options={({ navigation, route }) => ({
          title: 'Details',
          headerRight: () => (
            <Pressable onPress={() => {
              navigation.navigate(EDIT_CONTACT)
            }}>
              <Text style={styles.addIcon} style={{ ...styles.primaryText, ...styles.actionFS, ...{ marginRight: 8 } }}>Edit</Text>
            </Pressable>
          ),
          headerLeft: () => (
            <HeaderBackButton label='Contacts' title='Contacts' onPress={() => {
              navigation.navigate(CONTACT_LIST)
            }} />
          ),
        })
        }  >{props => <ContactDetails  {...props} />}
        </Stack.Screen>
        <Stack.Screen name={EDIT_CONTACT}
          options={({ navigation, route }) => ({
            title: 'Edit',
            headerLeft: () => (
              <CancelButtonEdit navigation={navigation} />
            ),
            headerRight: () => (
              <RightActionButtonEdit navigation={navigation} />
            )
          })} >
          {props => <UpdateContact {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer></Provider>)
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: 28,
    color: '#4d90fe',
    marginRight: 8
  },
  primaryText: {
    color: '#4d90fe'
  },
  actionFS: {
    fontSize: 16
  }
});
