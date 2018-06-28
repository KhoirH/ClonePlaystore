import React ,  {Component} from "react";

import {LayoutAnimation  , View ,StyleSheet ,TouchableOpacity , Text  } from "react-native"
import {Header ,  Left , Right , Icon, Input,Item} from "native-base";



import {connect} from "react-redux";

const CustomLayoutEaseInEaseOut = {
    duration: 100,
    create: {
        type: "easeInEaseOut" ,
        property : "opacity"
    },
    update: {
        type: "easeInEaseOut"
    },
    delete: {
        type: "easeInEaseOut" ,
        property : "opacity"
    }
  };

class header extends Component {
    state = {
        styleSearch : Styles.hasnntClickSearch
    }
    handleClickSearch(bool){
        LayoutAnimation.configureNext(CustomLayoutEaseInEaseOut)
        styleSearch = bool ? Styles.hasClickSearch : Styles.hasnntClickSearch ;
        this.setState({
            styleSearch : styleSearch
        })
    }
    render(){
        return(
            // <View>
                <View noShadow style={{height:60, position:"absolute" , top:0 , left:10,right:10 , elevation:1 , flexDirection:"row"}} >
                    <Left>
                        <Text onPress={()=>{this.props.navigation.goBack()}}>
                            <Icon name="md-arrow-back"  style={{color :"white"}} />
                        </Text>
                    </Left>
                    <Right>
                        <TouchableOpacity onPress={()=>{this.handleClickSearch(true)}}>
                            <Text>
                                <Icon name="md-search"   style={{color :"white"}} />
                            </Text>
                        </TouchableOpacity>
                    </Right>
                </View>
                /* <Item style={[Styles.wrapperSearch ,this.state.styleSearch]} >
                    <TouchableOpacity onPress={()=>{this.handleClickSearch(false)}}>
                        <Icon name="md-arrow-back"  style={{marginLeft: 10 , color:"#444"}} />
                    </TouchableOpacity>
                        <Input placeholder="Search"   />
                    <Icon name="md-mic" style={{color:"#444"}}/>
                </Item> */
            // </View>
        )
    }
}

const Styles = StyleSheet.create({
    wrapperSearch : {
        position: "absolute",
        top : 5, 
        right : 2 ,
        backgroundColor:"white",
        opacity :0
    },
    hasnntClickSearch : {
        left : 200,
        zIndex :-1000
        
    },
    hasClickSearch : {
        left : 2,
        zIndex :1000,
        opacity: 1
    }
})
export default header;