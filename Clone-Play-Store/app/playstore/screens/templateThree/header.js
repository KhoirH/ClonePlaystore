import React , {Component} from "react"
import {Header , Body , Left , Right , Title  , Icon  , Button} from "native-base"

export default class header extends Component{
    
    openDrawer() {
        this.props.drawer._root.open()
    };
    render(){
        return (
            <Header style={{backgroundColor:"#666" ,  paddingTop:45 ,  paddingBottom:30}}>    
                <Left>
                    <Button transparent onPress={()=>this.openDrawer()}>
                    <Icon name='md-menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Akun</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='md-search' />
                    </Button>
                </Right>
            </Header> 
        )
    }
}