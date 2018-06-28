import React , { Component } from "react"
import {  View, Text , StyleSheet} from 'react-native';
import { Thumbnail , Icon ,Container , Button , Header, Body , Left , Right , Title } from 'native-base'

const Styles = StyleSheet.create({
    Card :{
        width:100,
        height : 150,
        marginBottom:10,
        flexDirection: 'column',
        justifyContent:"flex-start"

    },
    Text : {
        fontSize: 10,
    },
})
export default class screenTwo extends Component{
    navigation = this.props.parent.props.navigation.state;
    render(){

        return (
            <View>
                <Header style={{paddingTop:20 , paddingBottom:20,backgroundColor:"#4caf50"}}>
                    <Left>
                        <Text onPress={()=>{this.props.parent.props.navigation.goBack()}}>
                            <Icon name="md-arrow-back"  style={{color :"white"}} />
                        </Text>
                    </Left>
                    <Body>
                        <Title>
                            {this.navigation.params.title}
                        </Title>
                    </Body>
                    <Right>
                        <Text>
                            <Icon name="md-search"      style={{color :"white"}} />
                        </Text>
                    </Right>
                </Header>
                <View style= {{ flex: 1 ,  flexDirection: "row" , flexWrap : "wrap" , justifyContent : "space-around" }}>
                    
                { this.navigation.params.properties.map((data, i)=>{
                    return(
                        <Button key={i} transparent style={[Styles.Card,{justifyContent:"flex-start"}]} onPress={()=> this.props.parent.props.navigation.navigate("screenFive")} >
                            <Thumbnail large source={{"uri":data.img}} square style={{width:100, height:100}}  />   
                            <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                                <View style={{flex:20 }}>
                                    <Text style={[Styles.Text , {height:27 , overflow:"hidden" , color:"#444" }]}>	
                                        {data.title}
                                    </Text>
                                </View>
                                <Icon name="md-more" style={[Styles.Text , { fontSize: 20 , flex:1 ,color : "#888" , textAlign:"right" , marginRight:0 }]} />
                            </View>
                            <View style={{flexDirection:"row" , justifyContent:"flex-start" }}>
                                <Text style={[Styles.Text , {color: data.color}]}>{data.footer}</Text>
                            </View>
                        </Button>                
                    )    
                    })
                }
                
                </View>                   
            </View>                   
        )
    }

}