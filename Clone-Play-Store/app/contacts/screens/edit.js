import React, { Component } from 'react'
import { Button, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import {
  Container,
  Text,
  Form,
  Item,
  Input
} from 'native-base'
import { connect } from 'react-redux'

class TodoEdit extends Component {
    state ={};
  handleEdit(){
    this.props.dispatch(putContacts(this.props.navigation.state.id , {
        name : this.state.name , 
        address : this.state.address 
    }))
    this.props.navigation.goBack()   
}

  render() {
    return (
      <Container style={styles.container} >
        <Form >
          <Item>
            <Input placeholder="Name"  onChangeText={(name) => this.setState({name})}
            value={this.state.name}/>
          </Item>
          <Item>
            <Input placeholder="Address"  onChangeText={(address) => this.setState({address})}
            value={this.state.address}/>
          </Item>
          <Button
            onPress={()=> this.handleEdit()}
            title="Edit" />
        </Form>
      </Container>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
export default connect()(TodoEdit);
