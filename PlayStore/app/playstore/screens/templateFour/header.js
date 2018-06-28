import React , {Component} from "react"
import {Header , Body , Left , Right , Title  , Icon  , Button} from "native-base"

export default class header extends Component{
    
    render(){
        return (
            <Header style={{backgroundColor:"#666" ,  paddingTop:45 ,  paddingBottom:30}}>    
                <Left>
                    <Button transparent onPress = {()=>{this.props.navigation.navigate("PlayStoreThree")}} >
                        <Icon name='md-arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title style={{width:"auto"}}>Metode Pembayaran</Title>
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