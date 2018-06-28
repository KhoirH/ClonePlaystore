import React, { Component } from 'react'
import { View , Text , ScrollView , StyleSheet , Image} from 'react-native'
import { Header, Content, Tab, Tabs ,  Card, CardItem ,ScrollableTab ,TabHeading,Thumbnail , Icon , H3 ,H4 } from 'native-base'

const Styles= StyleSheet.create({
    Card :{
        width:85,
        flexDirection: 'column'
    },
    Text : {
        fontSize: 10,
    }
})

export default class choose extends Component{
    
        
    render() {
        return (
            <Card >
                <CardItem header style={[{backgroundColor:(Boolean(this.props.bgColorCard)) ? this.props.bgColorCard : "white"}]}>                    
                        {this.props.children}
                </CardItem>
                <CardItem style={[{paddingTop:0,marginTop:-13,backgroundColor:(Boolean(this.props.bgColorCard)) ? this.props.bgColorCard : "white"}]}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{alignSelf:"center"}}>     
                        
                        { (Boolean(this.props.parseImage)) ? <Image source={{"uri" : this.props.parseImage}} style={{width:200}}/>:null  }
                        {
                            this.props.properties.map((data, i)=>{
                                if(Boolean(this.props.dark)){
                                    colorIcon = "white";
                                    colorTitle = "white";
                                    data.color = (Boolean(data.color))? data.color :"white" ;
                                }else{
                                    colorTitle = "black";
                                    colorIcon = "#888";
                                }
                                return(
                                    <View style={Styles.Card} key={data.title} key={i}>
                                        <Thumbnail large source={{"uri":data.img}} square />   
                                        <View style={{flexDirection:"row" , justifyContent:"space-between", flex:1}}>
                                            <View style={{flex:6  }}>
                                                <Text style={[Styles.Text , {maxHeight:27 , overflow:"hidden" , color:colorTitle}]}>	
                                                    {data.title}
                                                </Text>
                                            </View>
                                            <Icon name="md-more" style={[Styles.Text , { fontSize: 20 , flex:1 ,color : colorIcon }]} />
                                        </View>
                                        <View>
                                            <Text style={[Styles.Text , {color: data.color}]}>{data.footer}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }                        
                    </ScrollView>     
                </CardItem > 
            </Card>

        )
    }
}