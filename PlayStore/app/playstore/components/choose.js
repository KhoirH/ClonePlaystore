import React, { Component } from 'react'
import { View , Text , ScrollView , StyleSheet , Image} from 'react-native'
import { Header, Content, Tab, Tabs ,  Card, CardItem ,ScrollableTab ,TabHeading,Thumbnail , Icon , H3 , Button} from 'native-base'

const Styles= StyleSheet.create({
    Card :{
        width:80,
        flexDirection: 'column',
    },
    Text : {
        fontSize: 10,
    }
})

export default class choose extends Component{
    state = {
        press :1
    }
    handledblClick(data){
        this.props.navigation.navigate("PlayStoreFive" , data)
        
    }
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
                                if(i < 5){
                                    if(Boolean(this.props.dark)){
                                        colorIcon = "white";
                                        colorTitle = "white";
                                        data.color = (Boolean(data.color))? data.color :"white" ;
                                    }else{
                                        colorTitle = "black";
                                        colorIcon = "#888";
                                    }
                                    return(
                                        <Button style={{height:"auto" , paddingHorizontal:2.5}} transparent key={i} onPress={()=>{this.handledblClick(data)}}>
                                            <View style={[Styles.Card , {height:"auto"  }]}  >
                                                <Thumbnail large source={{"uri":data.thumbnail}} square />   
                                                <View style={{flexDirection:"row" , justifyContent:"space-around", flex:1}}>
                                                    <View style={{flex:6  }}>
                                                        <Text style={[Styles.Text , {maxHeight:27 , overflow:"hidden" , color:colorTitle}]}>	
                                                            {data.name}
                                                        </Text>
                                                    </View>
                                                    <Icon name="md-more" style={[Styles.Text , { fontSize: 20 , flex:1 ,color : colorIcon  ,  marginRight:0}]} />
                                                </View>
                                                <View style={{ width:"100%"}}>
                                                    <Text style={[Styles.Text , {color: data.color }]}>{data.size}</Text>
                                                </View>
                                            </View>                                        
                                        </Button>
                                    )
                                }
                            })
                        }                        
                    </ScrollView>     
                </CardItem > 
            </Card>

        )
    }
}
