import React , { Component } from "react" 
import { StyleSheet ,View , NativeModules , LayoutAnimation} from 'react-native'

import {  Header, Input , Icon , Item , Button , Text ,Content,Drawer } from "native-base" 

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
 UIManager.setLayoutAnimationEnabledExperimental(true) 

export default class header extends Component{
  state = {
    search : Styles.wrapperBlurActive
  }
  openDrawer() {
    this.props.parentApp.drawer._root.open()
  };
  handleFocus(){
    LayoutAnimation.spring();
    this.setState({
      search : Styles.wrapperFocusActive
    })
    this.props.parentApp.handleShadowInput(0);
  }
  handleBlur(){
    LayoutAnimation.spring();    
    this.setState({
      search : Styles.wrapperBlurActive
    })
    this.props.parentApp.handleShadowInput(1);
  }
  render(){
        
    return (
        <View>
          <View style={[Styles.searchBar, Styles.wrapper , { paddingTop:30 }]}></View>
          <Item style={[Styles.wrapperSearch , this.state.search]}>
            <Icon name="md-menu" onPress={()=>this.openDrawer()} />
              <Input placeholder="Search"  onFocus={()=>{this.handleFocus()}} onBlur={()=>{this.handleBlur()}}  />
            <Icon name="md-mic" onPress={()=>{this.handleBlur()}}/>
          </Item>
        </View>
      )
  }
}

const Styles = StyleSheet.create({
  searchBar : { 
    backgroundColor : "#388e3c" , 
    
    flexDirection: 'column',
    height:85,
  },
  wrapper : {
    paddingHorizontal : 10
  },
  wrapperSearch : { 
    backgroundColor:"white",
    borderRadius : 5,
    paddingLeft:10,
    position:"absolute",
    zIndex:1000,
    left:10,
    right:10,
    borderBottomWidth:0
  },
  wrapperFocusActive:{
    elevation:20,
    top: 40
  },
  wrapperBlurActive:{
    elevation:0,
    top: 30
  }
})