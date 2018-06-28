import React , {Component} from "react"
import {ScrollView , View , Text ,  StyleSheet ,  Dimensions} from "react-native"

import {Button , Thumbnail , Icon } from "native-base"


let deviceDimension = Dimensions.get("window");
let deviceWidth = deviceDimension.width;
let deviceHeight = deviceDimension.height;

export default class content extends Component {
    componentWillMount(){
        this.properties = this.props.navigation.getParam("properties" , "hilmi");
        this.itemScale = (deviceWidth / 3) - 23 ;        
        
    }
    render(){
        return(
            <ScrollView >
                <View style= {{  flexDirection: "row" , flexWrap : "wrap" , justifyContent : "flex-start" ,  marginTop:20 , marginBottom:100 , marginLeft:3  }}>
                    
                { this.properties.map((data, i)=>{
                    return(
                        <Button key={i} transparent style={[Styles.Card , {width:this.itemScale ,justifyContent:"flex-start" ,  marginHorizontal:10}]} onPress={()=> this.props.navigation.navigate("PlayStoreFive" , data)} >
                            <Thumbnail large source={{"uri":data.thumbnail}} square style={{width:this.itemScale, height:this.itemScale}}  />   
                            <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                                <View style={{flex:20 }}>
                                    <Text style={[Styles.Text , {height:27 , overflow:"hidden" , color:"#444" }]}>	
                                        {data.name}
                                    </Text>
                                </View>
                                <Icon name="md-more" style={[Styles.Text , { fontSize: 20 , flex:1 ,color : "#888" , textAlign:"right" , marginRight:0 }]} />
                            </View>
                            <View style={{flexDirection:"row" , justifyContent:"flex-start"  }}>
                                <Text style={[Styles.Text , {color: "#444" ,  width:"100%"} ]}>{data.size}</Text>
                            </View>
                        </Button>                
                    )    
                    })}
                
                </View> 
                
            </ScrollView>
        )
    }
}

const Styles = StyleSheet.create({
    Card :{
        height : 150,
        marginBottom:10,
        flexDirection: 'column',
        justifyContent:"flex-start"

    },
    Text : {
        fontSize: 10,
    },
})