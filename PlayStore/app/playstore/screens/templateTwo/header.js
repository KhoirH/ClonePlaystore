import React , {Component} from "react"
import {View , Text} from "react-native"

import {Header , Left , Right , Body , Icon , Title} from "native-base"

export default class header extends Component{
    componentWillMount(){
        this.title = this.props.navigation.getParam("title" , "hilmi");       
    }
    render(){
        return(
            <Header style={{backgroundColor:"#388e3c" , paddingTop:25 , height:85 }} >
                <Left> 
                    <Text onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="md-arrow-back"  style={{color :"white"}} />
                    </Text>
                </Left> 
                <Body>
                    <Title>
                        {this.title}
                    </Title>
                </Body>
                <Right>
                    <Text>
                        <Icon name="md-search"    style={{color :"white"}} />
                    </Text>
                </Right>
            </Header>
        )
    }
}
