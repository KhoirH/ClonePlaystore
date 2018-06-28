import React , { Component } from "react" 
import { StyleSheet ,View} from 'react-native'

import {  Header, Input , Icon , Item , Button , Text ,Content,Drawer } from "native-base" 


export default class header extends Component{
  openDrawer() {
    this.props.parentApp.drawer._root.open()
  };
  render(){
        
    return (
        <View style={[Styles.searchBar, Styles.wrapper , {paddingTop:30 ,  zIndex : this.props.zIndex}]}>
          <Item style={Styles.wrapperSearch}>
            <Icon name="md-menu" onPress={()=>this.openDrawer()} />
              <Input placeholder="Search"/>
            <Icon name="md-mic" />
          </Item>
        </View>
    )
  }
}

const Styles = StyleSheet.create({
  searchBar : { 
    backgroundColor : "#4caf50" , 
    
    flexDirection: 'column',
    height:85,
  },
  wrapper : {
    paddingHorizontal : 10
  },
  wrapperSearch : { 
    backgroundColor:"white",
    borderRadius : 5,
    paddingLeft:10
  }
})