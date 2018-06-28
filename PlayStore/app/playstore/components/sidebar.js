import React , { Component } from "react"
import { View , Image ,  Text , StyleSheet ,ScrollView }  from "react-native"
import { Thumbnail, Switch ,Icon, Button , List, ListItem , Left , Right , Body , Content } from "native-base"



export default class sidebar extends Component{
    componentWillMount(){
        this.props.parent.setState({
            sidebar : this
        })
    }
    render(){
        return (
            <ScrollView style={{backgroundColor:"white" , flex:1}}>
                <View style={{position:"absolute",top:0,left:0,right:0,height:185, backgroundColor:"red"}}>
                    <Image style={{flex:1}} source={{uri : 'http://longwallpapers.com/Desktop-Wallpaper/google-wallpaper-hd-For-Desktop-Wallpaper.jpg'}}/>
                </View>
                <View style={{marginLeft:20,marginTop:70}}>
                    <Text style={Styles.chip}>E</Text>
                    <Text style={{color :"white"}}>{(this.props.account.isLoading) ? "loading" : this.props.account.account.username }</Text>
                    <Text style={{fontSize:12 , color :"white", marginBottom:15}}>{(this.props.account.isLoading) ? "loading" : this.props.account.account.email }</Text>
                    <View  style={{marginLeft:-20   }}>
                        <List style={{borderBottomWidth:1 , borderBottomColor: "#aaa" }}>
                            
                            <ListItem icon  >
                            <Left>
                                <Icon name="wifi" />
                            </Left>
                            <Body style={{borderBottomWidth:0}}>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Aplikasi & Game saya</Text>
                            </Body>
                            
                            </ListItem>
                            <ListItem icon  >
                            <Left>
                                <Icon name="md-notifications" />
                            </Left>
                            <Body style={{borderBottomWidth:0}}>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Nontifikasi saya</Text>
                            </Body>
                            
                            </ListItem>
                            <ListItem icon   >
                            <Left>
                                <Icon name="md-refresh" />
                            </Left>
                            <Body style={{borderBottomWidth:0}}>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Langganan</Text>
                            </Body>
                            
                            </ListItem>                        
                        </List>
                        <List style={{borderBottomWidth:1 , borderBottomColor: "#aaa" }}>
                            
                            <ListItem icon  >
                                <Left>
                                    <Icon name="md-home" style={{color:"teal"}}  />
                                </Left>
                                <Body style={{borderBottomWidth:0}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}  onPress={() => {this.props.parent.props.navigation.navigate("PlayStoreOne")}}>Beranda</Text>
                                </Body>
                                
                            </ListItem>
                            <ListItem icon  >
                                <Left>
                                    <Icon name="md-game-controller-b" style={{color:"teal"}}/>
                                </Left>
                                <Body style={{borderBottomWidth:0}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Game</Text>
                                </Body>
                                
                            </ListItem>
                            <ListItem icon   >
                                <Left>
                                    <Icon name="ios-film" style={{color:"maroon"}}/>
                                </Left>
                                <Body style={{borderBottomWidth:0}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Film</Text>
                                </Body>
                                </ListItem>
                            <ListItem icon   >
                                <Left>
                                    <Icon name="md-document" style={{color:"blue"}}/>
                                </Left>
                                <Body style={{borderBottomWidth:0}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Buku</Text>
                                </Body>
                            </ListItem>
                            <ListItem icon   >
                                <Left>
                                    <Icon name="md-card" style={{color:"purple"}}/>
                                </Left>
                                <Body style={{borderBottomWidth:0}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Kios</Text>
                                </Body>
                            </ListItem>                        
                        </List>
                        
                        <List style={{borderBottomWidth:1 , borderBottomColor: "#aaa" }}>

                            <ListItem icon onPress={() => {this.props.parent.props.navigation.navigate("PlayStoreThree")}} >
                                <Left>
                                    <Thumbnail source={require('../../storage/profil.png')} style={Styles.imageIcons} square/>
                                </Left>
                                <Body style={{borderBottomWidth:0}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Akun</Text>
                                </Body>
                                
                            </ListItem>
                            <ListItem icon   >
                                <Left>
                                    <Thumbnail source={require('../../storage/card.png')} style={Styles.imageIcons} square/>                                    
                                </Left>
                                <Body style={{borderBottomWidth:0}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Tukarkan</Text>
                                </Body>
                                </ListItem>
                            <ListItem icon   >
                                <Left>
                                    <Thumbnail source={require('../../storage/verify.png')} style={Styles.imageIcons} square/>                                    
                                </Left>
                                <Body style={{borderBottomWidth:0}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Wishlist</Text>
                                </Body>
                            </ListItem>
                            <ListItem icon   >
                                <Left>
                                    <Thumbnail source={require('../../storage/protect.png')} style={Styles.imageIcons} square/>                                  
                                </Left>
                                <Body style={{borderBottomWidth:0}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Pay Protect</Text>
                                </Body>
                            </ListItem>
                            <ListItem icon   >
                                <Left>
                                    <Thumbnail source={require('../../storage/setting.png')} style={Styles.imageIcons} square/>                                    
                                </Left>
                                <Body style={{borderBottomWidth:0}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Setelan</Text>
                                </Body>
                            </ListItem>                        
                        </List>
                        <List style={{borderBottomWidth:1 , borderBottomColor: "#aaa" , paddingBottom:200 }}>
                            
                            <ListItem  style={{borderBottomWidth:0 }}>
                                
                                <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Bantuan & masukan</Text>
                                
                            </ListItem>
                            <ListItem  style={{borderBottomWidth:0}}>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Panduan Orang Tua</Text>
                                
                            </ListItem>
                            <ListItem  style={{borderBottomWidth:0}}>
                                <Text style={{fontWeight:"bold",fontSize:13,color:"#444"}}>Tentang Google Play</Text>
                             </ListItem>                       
                        </List>

                    </View>
                </View>
            </ScrollView>
                
        )
    }

} 

const Styles = StyleSheet.create({
    chip :{
        paddingTop:10, 
        backgroundColor : "maroon" ,
        borderRadius:100 ,
        fontSize:30,
        color :"white",
        alignItems: 'center',
        marginBottom:5,
        height:60, 
        width:60 , 
        textAlign:"center"
    },
    imageIcons : {
        width: 25 , 
        height : 25
    }    
})