import React , {Component } from "react"
import { View ,  StyleSheet} from "react-native"
import {List ,Header,  ListItem , Text , Icon , Left , Body ,Button , Title , Right , Thumbnail} from "native-base"
const styles = StyleSheet.create({
    icons : {
        width:40,
        borderRadius: 100, 
        height:40 ,
        fontSize:17, 
        lineHeight:40,
        textAlign:"center"
    },
    small : {
        fontSize: 13,
        fontWeight: "bold",
        color : "#888"
    },
    border: {
        borderBottomWidth: 1, 
        borderTopWidth: 2,
        borderBottomColor: "#aaa", 
        borderTopColor: "#aaa" 
    }
})
export default class screenFour extends Component{
    
    render(){
        return(
            <View>
                <Header style={{backgroundColor:"#666" ,  paddingTop:20 ,  paddingBottom:20}}>    
                    <Left>
                        <Button transparent onPress={()=>this.props.parent.props.navigation.goBack()}>
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
                <View style={{backgroundColor:"white" , padding:20 }}>   
                    <Text style={{ textAlign:"center"}}>
                        Buat pembelian selanjutnya menjadi cepat dan mudah dengan mmenambahkan metode pembayaran sekarang !
                    </Text>
                </View>   
                <View style={[styles.border , {paddingLeft:20 ,paddingVertical:15 }]}>    
                    <Text style={styles.small}>
                        Tambah metode pembayaran
                    </Text>
                </View>   
                <View style={{backgroundColor:"white"}}>
                    <List>
                        
                        <ListItem icon style={{alignItems:"center" ,  height:"auto"}} onPress={()=>this.props.parent.props.navigation.navigate("screenFour")} >
                            <Left style={{height:"auto" , width:"auto" , justifyContent:"center"}}>
                                <Icon name="md-card" style={styles.icons} small/>
                            </Left>
                            <Body style={{paddingTop:30 , paddingBottom:30 , marginLeft:0}}>
                                <Text style={{fontSize:15}}>Tambahkan kartu kredit atau debit</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon style={{alignItems:"center" ,  height:"auto"}} onPress={()=>this.props.parent.props.navigation.navigate("screenFour")} >
                            <Left style={{height:"auto" , width:"auto" , justifyContent:"center"}}>
                                <Thumbnail source={require("../storage/hotsopt.png")}  square style={{width:20 , height:20  , marginRight:20 , marginLeft:5}} small/>
                            
                            </Left>
                            <Body style={{paddingTop:30 , paddingBottom:30 , marginLeft:0}}>
                                <Text style={{fontSize:15}}>Pulsa XL/AXIS (prabayar & pascabayar)</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon style={{alignItems:"center" ,  height:"auto"}} onPress={()=>this.props.parent.props.navigation.navigate("screenFour")} >
                            <Left style={{height:"auto" , width:"auto" , justifyContent:"center"}}>
                                <Thumbnail source={require("../storage/cardBlack.png")} square  style={{width:20 , height:20  , marginRight:20 , marginLeft:5}} small/>
                            </Left>
                            <Body style={{paddingTop:30 , paddingBottom:30 , marginLeft:0 ,borderBottomWidth:0} }>
                                <Text style={{fontSize:15}}>Tukar kode</Text>
                            </Body>
                        </ListItem>
                    </List> 
                </View>
                <View style={[styles.border , {paddingLeft:20 ,paddingVertical:15 }]}>   
                    <Text style={[styles.small]}>
                        Sistem pembayaran lain
                    </Text>
                </View>
                <View style={{backgroundColor:"white" }} >
                    <List>
                        
                        <ListItem icon style={{alignItems:"center" ,  height:"auto"}} onPress={()=>this.props.parent.props.navigation.navigate("screenFour")} >
                            <Left style={{height:"auto" , width:"auto" , justifyContent:"center"}}>
                                <Thumbnail source={require("../storage/setting.png")}  square style={{width:20 , height:20  , marginRight:20 , marginLeft:5}} small/>
                            
                            </Left>
                            <Body style={{paddingTop:30 , paddingBottom:30 , marginLeft:0 ,borderBottomWidth:0} }>
                                <Text style={{fontSize:15}}>Setelan pembayaran lain</Text>
                            </Body>
                        </ListItem>
                    </List> 
                </View>
            </View>
        )
    }
}

