import React , {Component} from "react"
import {View , StyleSheet } from "react-native" 

import {List ,  ListItem , Text , Icon , Left , Body ,Button , Title , Right , Thumbnail} from "native-base"

import CListItem from "../../components/listItem"
export default class content extends Component {
    componentWillMount(){
        this.components =[
            {
                icon : "md-card",
                element : ()=>(<Text style={{fontSize:15}}>Tambahkan kartu kredit atau debit</Text>)
            },
            {
                thumbnail : require("../../../storage/hotsopt.png") ,
                element : ()=>(
                    <Text style={{fontSize:15}}>Pulsa XL/AXIS (prabayar & pascabayar)</Text>                    
                )
            },
            {
                thumbnail : require("../../../storage/cardBlack.png") ,
                element : ()=>(
                    <Text style={{fontSize:15}}>Tukar kode</Text>                    
                )
            },    
        ]
    }
    render(){
        return(
            <View>
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
                        {this.components.map((data,i)=>(
                            <CListItem {...data} key={i}>
                                {data.element()}
                            </CListItem>
                        ))}
                    </List> 
                </View>
                <View style={[styles.border , {paddingLeft:20 ,paddingVertical:15 }]}>   
                    <Text style={[styles.small]}>
                        Sistem pembayaran lain
                    </Text>
                </View>
                <View style={{backgroundColor:"white" }} >
                    <List>
                        
                        <ListItem icon style={{alignItems:"center" ,  height:"auto"}} >
                            <Left style={{height:"auto" , width:"auto" , justifyContent:"center"}}>
                                <Thumbnail source={require("../../../storage/setting.png")}  square style={{width:20 , height:20  , marginRight:20 , marginLeft:5}} small/>
                            
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