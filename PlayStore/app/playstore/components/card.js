import React , {Component} from  "react"
import {View , Image , StyleSheet} from "react-native"
import {Card , CardItem , Grid ,Col , Text  } from "native-base"

const Styles = StyleSheet.create({
    box : {color:"white" , opacity:0.5}
})
export default class card extends Component{
    render(){
        return (
            <View>
                <Card>
                    <CardItem cardBody style={{backgroundColor:"#689f38"}}>
                        <Grid>
                            <Col style={{paddingLeft:10 ,paddingTop :5}}>
                                <View>
                                    <Text style={Styles.box}>Rayakan Ramadan 1493 Hijriah</Text>
                                </View>
                                <View>
                                    <Text style={[{ borderWidth: 1, padding:2 ,textAlign:"center", borderRadius:2} , Styles.box]}>TEMUKAN LAINNYA</Text>
                                </View>
                            </Col>
                            <Col>
                                <Image source={{uri:"https://png.pngtree.com/element_our/sm/20180425/sm_5ae031fa46663.png"}} style={{width:200 , height:100}}/>
                            </Col>
                        </Grid>
                    </CardItem>
                </Card>                
            </View>
                
        )
    }    
} 