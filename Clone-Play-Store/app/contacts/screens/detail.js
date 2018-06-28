/**
 * Sample React Native TodoDetail
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from "react-redux";



class TodoDetail extends Component{
  componentDidMount() {
    this.props.dispatch(getContacts(this.props.navigation.state.id))
  }
  handleDelete (id){
    this.props.dispatch(deleteContacts(this.props.navigation.state.id))
    this.props.navigation.goBack()
  }
  handleEdit (id){
    this.props.navigation.navigation("ContactsEdit",{
      id : this.props.contacts.result.id
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Nama : {this.props.contacts.result.name}
        </Text>
        <Text style={styles.instructions}>
         Alamat : {this.props.contacts.result.address}
        </Text>
        <TouchableHighlight onPress={this.handleDelete(this.props.navigation.state.id)}>
          <Text>
            delete
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handleEdit(this.props.navigation.state.id)}>
          <Text>
            Edit
          </Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer
  }
}

export default connect(mapStateToProps)(TodoDetail);