import React , {Component} from "react"
import {View , StyleSheet ,  Text} from "react-native"

import { List  ,H3} from "native-base"
import ListItem from "../../components/listItem"

export default class content extends Component {
    
    componentWillMount(){
        this.components=[
            {
                icon : "md-card", 
                element : ()=>(<View style={{marginTop:-15 ,  paddingTop:0 }}><H3>Tambahan pembayaran baru</H3><Text style={{fontSize: 12 ,color:"teal"}}>Tambahkan metode pembayaran baru</Text></View>),
                event : {
                    press:()=>{
                    this.props.navigation.navigate("PlayStoreFour");
                    }
                }
            },
            {
                icon : "md-refresh",
                element : ()=>(<H3 >Langganan</H3>)
            },
            {
                icon : "md-ribbon",
                element : ()=>(<H3 >Preferensi email</H3>)
            },
            {
                icon : "md-mail",
                element : ()=>(<H3 >History Pemesanan</H3>)
            },
            {
                icon : "md-timer",
                element : ()=>(<H3 >Bonus</H3>)
            }
        ]
    }
    render(){
        return(
            <View style={{marginTop:10}}>
                <List>
                        {
                            this.components.map((data ,i)=>(
                                <ListItem key={i} {...data}>
                                    { data.element() }
                                </ListItem>
                            ))                        
                        }
                    
                </List>
            </View>
        )
    }
}