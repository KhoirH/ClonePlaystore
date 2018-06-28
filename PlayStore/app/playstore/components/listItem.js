import React , { Component } from "react"
import { StyleSheet } from "react-native"

import { ListItem , Body , Left , Icon , Text , H3 , Thumbnail } from "native-base"


export default class  listItem extends Component{
    handlePress(method){
        if(this.props.event){
            action = this.props.event[method];
            action();
        }

    }
    render(){
        return(
            <ListItem icon style={{alignItems:"center" ,  height:"auto"}} onPress={()=>this.handlePress("press")}>
                <Left style={Styles.wrapperCenter}>
                    {this.props.icon ?<Icon name={this.props.icon} style={[{backgroundColor:"white" , color:"#444" } , Styles.icons]} small/> : null}
                    {this.props.thumbnail ?<Thumbnail source={this.props.thumbnail}  square style={Styles.wrapperThumbnail} small/> : null}             
                </Left>
                <Body style={Styles.bodyStyle}>
                    { this.props.children }
                </Body>
            </ListItem>
        )
    }
}



const Styles = StyleSheet.create({
    icons : {
        width:40,
        borderRadius: 100, 
        height:40 ,
        fontSize:17, 
        lineHeight:40,
        textAlign:"center"
    },
    wrapperCenter : {
        height:"auto" , 
        width:"auto" , 
        justifyContent:"center"
    },
    bodyStyle : {
        paddingTop:30 , 
        paddingBottom:30 , 
        marginLeft:0
    },
    wrapperThumbnail :{
        width:20 , 
        height:20  , 
        marginRight:20 , 
        marginLeft:5
    }
})