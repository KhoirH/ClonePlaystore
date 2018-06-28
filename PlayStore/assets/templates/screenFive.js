import React , {Component,PureComponent} from "react"
import { ScrollView,View , Image , Text , Dimensions , StyleSheet}  from "react-native"
import {H3 , Thumbnail , Icon , H1 , Button , Header , Left , Body , Right , Content , Grid , Row , Col } from  "native-base"

import Bar from "../components/grafik/bar"
import Circle from "../components/grafik/circle"
import Choose from "../components/choose"

const win = Dimensions.get('window');
const ratio = win.width/541;
const Styles = StyleSheet.create({
    responsiveImage :{
        flex:1 ,
        height: 200
    },
    bottomButton : {
        flex:1 ,
        paddingTop:0, 
        height:100, 
        alignItems:"center", 
        justifyContent:"center" , 
        flexDirection :"column"
    }
    
});



class screenFive extends Component{
    state = {}
    render(){
        return(
            <ScrollView style={{ flex:1 }}>
                <Header noShadow style={{backgroundColor:"transparent",paddingTop:20}}>
                    <Left>
                        <Text onPress={()=>{this.props.parent.props.navigation.goBack()}}>
                            <Icon name="md-arrow-back"  style={{color :"white"}} />
                        </Text>
                    </Left>
                    <Right>
                        <Text>
                            <Icon name="md-search"      style={{color :"white"}} />
                        </Text>
                    </Right>
                </Header>
                <View style={{zIndex:-1 , marginTop:-55 , backgroundColor:"white"}}>
                    <View >
                        <Image style={{width:win.width , height:  362 * ratio}} source={{'uri' : "https://lh3.googleusercontent.com/s6KNdYPe6JLMRCml7-9xWLZ6JXR1PKGgJehtTzNTiTabb8gTGN82rt2CWiJYZ7Qx1Q"}} />
                    </View>
                    <View style={{marginHorizontal:20 ,flexDirection:"column"}}>
                        <View style={{flexDirection:"row" , marginTop:15}}>    
                            <View style={{flex:3}}>
                                <Thumbnail large square source={{'uri' : 'https://lh3.googleusercontent.com/kB9SVli-DdTE3xf8BeYQCGg3TLKLBaA7aVVRT8Q_HdDYvOc8F4j3Dpk1lbTx7Dvk38nx=s180-rw'}} />
                            </View>
                            <View style={{flex:6 , flexDirection : "column"}}>
                                <H3>Ice Crush 2018 - A new Puzzle Matching Adventure</H3>
                                <Text style={{color:"#888" }}>Kudo Games</Text>
                                <Text style={{borderWidth:2,lineHeight:25 , height:25,width:25 , fontWeight:"bold" , textAlign:"center"}}>3+</Text>
                                <Text style={{color:"#888"}}>21 MB</Text>
                            </View>
                            <View style={{flex:1,alignItems:"flex-end"}}>
                                <Icon type="FontAwesome" name="plus-square" style={{color :"#43a047" , marginRight:0}} small/> 
                            </View>

                        </View>
                        <View style={{flexDirection:"row" , justifyContent:"flex-end"}}> 
                            <Button style={{backgroundColor:"#43a047"}} ><Text style={{paddingHorizontal:30 ,paddingVertical:10, color:"white"}}> INSTAL </Text></Button>
                               
                        </View>
                        <View style={{marginTop:15 , marginBottom:5 , flexDirection: 'row',justifyContent:"flex-end"}}> 
                            <View style={{flexDirection:"row" , alignItems:"center" }}>   
                                <Text style={{color:"#888" , fontSize:14 }}> Berisi iklan </Text>
                                <Text style={{color:"#888" , fontSize:14}}> Pembelian dalam apl </Text>
                            </View>   
                        </View>
                        <View style={{borderColor : "#888" , borderTopWidth:1 , borderBottomWidth :1 , alignItems: "center" , justifyContent: "center" , flexDirection:"row" , paddingVertical:20}}>
                            <Button rounded style={{marginRight:10,backgroundColor:"white" ,  paddingHorizontal:20 , alignItems:"center"}}>
                                <H3 style={{color : "#999"}}>#2</H3>
                            </Button>
                            <H3 style={{color:"#43a047"}}>
                                Lagi Tren Santai                 
                            </H3>                 
                        </View>
                        <View style={{borderColor : "#888"  , borderBottomWidth :1 , alignItems: "center" , justifyContent: "center" , flexDirection:"row" , paddingVertical:20}}>
                            <Image source={require("../storage/02cfe9c5-e895-430e-ba30-36f81cda3cf9.jpg")} style={{flex:1 , height:100}} />
                        </View>                        
                        <View style={{ padding:20}}>
                            <Text style={{textAlign:"justify" , fontWeight:"thin" ,  fontSize:16 , wordSpacing:8}}>
                                Hyper-adiktif bebas petualangan teka - teki uang cocok, untuk musim dingin baru dan  2018  tahun baru
                            </Text>
                        </View>   
                        <View style={{ flexDirection:"row" , marginBottom:10 }}>
                            <Text style={{ fontWeight:"bold"  , flex :1, fontSize: 13 , textAlign : "center" , color:"#43a047"}}>BACA SELENGKAPNYA</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flex:1 , flexDirection:"row" }}>
                            
                            <Image style={{height:200 , width:120 , margin:2}} source={{"uri" : "https://image.winudf.com/v2/image/Y29tLmt1ZG8uaWNlY3J1c2hfc2NyZWVuXzFfMTUyNjgwNzYzM18wMDQ/screen-1.jpg?h=800&fakeurl=1&type=.jpg"}}  />
                            <Image style={{height:200 , width:120 , margin:2}} source={{"uri" : "https://image.winudf.com/v2/image/Y29tLmt1ZG8uaWNlY3J1c2hfc2NyZWVuXzFfMTUyNjgwNzYzM18wMDQ/screen-1.jpg?h=800&fakeurl=1&type=.jpg"}}  />
                            <Image style={{height:200 , width:120 , margin:2}} source={{"uri" : "https://image.winudf.com/v2/image/Y29tLmt1ZG8uaWNlY3J1c2hfc2NyZWVuXzFfMTUyNjgwNzYzM18wMDQ/screen-1.jpg?h=800&fakeurl=1&type=.jpg"}}  />
                            <Image style={{height:200 , width:120 , margin:2}} source={{"uri" : "https://image.winudf.com/v2/image/Y29tLmt1ZG8uaWNlY3J1c2hfc2NyZWVuXzFfMTUyNjgwNzYzM18wMDQ/screen-1.jpg?h=800&fakeurl=1&type=.jpg"}}  />
                            <Image style={{height:200 , width:120 , margin:2}} source={{"uri" : "https://image.winudf.com/v2/image/Y29tLmt1ZG8uaWNlY3J1c2hfc2NyZWVuXzFfMTUyNjgwNzYzM18wMDQ/screen-1.jpg?h=800&fakeurl=1&type=.jpg"}}  />
                            <Image style={{height:200 , width:120 , margin:2}} source={{"uri" : "https://image.winudf.com/v2/image/Y29tLmt1ZG8uaWNlY3J1c2hfc2NyZWVuXzFfMTUyNjgwNzYzM18wMDQ/screen-1.jpg?h=800&fakeurl=1&type=.jpg"}}  />
                            
                        </ScrollView>
                        <View style={{ marginTop:20,flexDirection:"row" , alignItems:"center" , minHeight:90  }}>
                            
                            <View style={{flex:1 }}>
                                <H3 style={{fontSize:50 , flex:1 , lineHeight:90}}>4,6</H3>
                            </View>
                            <View style={{flex:1,flexDirection:"column"}}>
                                <Text><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/></Text>
                                <Text style={{color:"#888"}}>8.513 <Icon name="md-person" style={{fontSize:12 , color:"#888"}}/></Text>
                            </View>
                            <View style={{flex:1}}>
                                <Bar />
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{textAlign:"center" }}><Icon name="md-warning" style={{color:"#888" , fontSize:12}}/></Text>
                            </View>                            
                        </View>
                        <View style={{ marginTop:30,flexDirection:"row" ,height:30 ,justifyContent:"center"  }}>
                            <Text style={{color:"#888" ,  fontWeight:"bold" , textAlign:"center" }}>
                                RATING FITUR
                            </Text>
                        </View>  
                        <View style={{ marginTop:20,flexDirection:"row" ,height:130 ,justifyContent:"center"  }}>
                            <View style={{flex:1}}>
                                <Circle />
                                <Text style={{ alignItems:"center" ,fontSize : 25 , position:"absolute", top:0,bottom:0,right:0,left:0, lineHeight:80 , textAlign:"center" }}>
                                    4,5 <Icon name="md-star" />
                                </Text>
                                <Text style={{fontWeight:"bold" , textAlign:"center"}}>
                                    Alur Game
                                </Text>
                            </View>
                            <View style={{flex:1}}>
                                <Circle />
                                <Text style={{ alignItems:"center" ,fontSize : 25 , position:"absolute", top:0,bottom:0,right:0,left:0, lineHeight:80 , textAlign:"center" }}>
                                    4,5 <Icon name="md-star" />
                                </Text>
                                <Text style={{fontWeight:"bold" , textAlign:"center"}}>
                                    Grafis
                                </Text>                                
                            </View>
                            <View style={{flex:1}}>
                                <Circle />
                                <Text style={{ alignItems:"center" ,fontSize : 25 , position:"absolute", top:0,bottom:0,right:0,left:0, lineHeight:80 , textAlign:"center" }}>
                                    4,5 <Icon name="md-star" />
                                </Text>
                                <Text style={{fontWeight:"bold" , textAlign:"center"}}>
                                    Kontrol
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop:20,flexDirection:"column" ,height:300 ,justifyContent:"center"  , borderBottomColor:"#888" , borderBottomWidth:1}}>
                            <Grid>
                                <Row>
                                    <Col>
                                        <Thumbnail source={{"uri" : "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100"}} />
                                    </Col>
                                    <Col style={{flex:2}}>
                                        <Text>Pengguna Google</Text>
                                        <Text style={{fontSize:12 , color:"#888"}}><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/> 29/05/18</Text>
                                    </Col>
                                    <Col style={{flexDirection:"row" , justifyContent:"flex-end"}}>
                                        <Icon name="md-thumbs-up" style={{ color : "#888",fontSize:25,paddingHorizontal:5 }} />
                                        <Icon name="md-more" style={{ color : "#888",fontSize:25,paddingHorizontal:5 }} />
                                        
                                    </Col>
                                </Row>
                                <Row style={{marginTop:-2}}>
                                    <Col>
                                    </Col>
                                    <Col style={{flex:3}}>
                                        <Text>lorem </Text>
                                    </Col>
                                </Row>
                            </Grid>
                            <Grid>
                                <Row>
                                    <Col>
                                        <Thumbnail source={{"uri" : "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100"}} />
                                    </Col>
                                    <Col style={{flex:2}}>
                                        <Text>Pengguna Google</Text>
                                        <Text style={{fontSize:12 , color:"#888"}}><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/> 29/05/18</Text>
                                    </Col>
                                    <Col style={{flexDirection:"row" , justifyContent:"flex-end"}}>
                                        <Icon name="md-thumbs-up" style={{ color : "#888",fontSize:25,paddingHorizontal:5 }} />
                                        <Icon name="md-more" style={{ color : "#888",fontSize:25,paddingHorizontal:5 }} />
                                        
                                    </Col>
                                </Row>
                                <Row style={{marginTop:-2}}>
                                    <Col>
                                    </Col>
                                    <Col style={{flex:3}}>
                                        <Text>lorem </Text>
                                    </Col>
                                </Row>
                            </Grid>
                            <Grid>
                                <Row>
                                    <Col>
                                        <Thumbnail source={{"uri" : "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100"}} />
                                    </Col>
                                    <Col style={{flex:2}}>
                                        <Text>Pengguna Google</Text>
                                        <Text style={{fontSize:12 , color:"#888"}}><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/> 29/05/18</Text>
                                    </Col>
                                    <Col style={{flexDirection:"row" , justifyContent:"flex-end"}}>
                                        <Icon name="md-thumbs-up" style={{ color : "#888",fontSize:25,paddingHorizontal:5 }} />
                                        <Icon name="md-more" style={{ color : "#888",fontSize:25,paddingHorizontal:5 }} />
                                        
                                    </Col>
                                </Row>
                                <Row style={{marginTop:-2}}>
                                    <Col>
                                    </Col>
                                    <Col style={{flex:3}}>
                                        <Text>lorem </Text>
                                    </Col>
                                </Row>
                            </Grid>
                            <Grid >
                                <Row>
                                    <Col>
                                        <Text style={{textAlign:"center" ,  fontWeight:"bold" ,color:"#43a047"}}>
                                            SEMUA ULASAN
                                        </Text >
                                    </Col>
                                </Row>
                            </Grid>
                        </View>                                                                      
                    </View>
                    <View style={{ flexDirection:"row" ,height:100 }}>
                        <Button style={Styles.bottomButton} transparent>
                            <Text>
                                <Icon name="md-share" style={{color:"black"}}/>
                                
                            </Text>
                            <Text>
                                Whislist
                            </Text>
                        </Button>
                        <Button style={Styles.bottomButton} transparent>
                            <Text>
                                <Icon name="md-share" style={{color:"black"}}/>
                            </Text>
                            <Text>
                                Bagikan
                            </Text>
                        </Button>
                    </View>                    
                </View>
                <View style={{marginTop:10,marginLeft:5 , marginRight:5}}>
                    <Choose 
                        properties={
                            [
                                {
                                    title : "Knife vs Fruit: Just Shoot It!",
                                    footer : "34 MB",
                                    color : "#888",
                                    img :"https://lh3.googleusercontent.com/79eplN3HGTPJOQ5ilZc-o6cC7zVdxHR4gfTDhabq2hsNDv9jYBbPkLgc-qV8D5vb5g=s180-rw"
                                },
                                {
                                    title : "Ice Crush 2018 - A new Puzzle Matching Adventure",
                                    footer : "34 MB",
                                    color : "#888",
                                    img : "https://lh3.googleusercontent.com/kB9SVli-DdTE3xf8BeYQCGg3TLKLBaA7aVVRT8Q_HdDYvOc8F4j3Dpk1lbTx7Dvk38nx=s180",
                                
                                },
                                {
                                    title : "Funny Food 123! Kids Number Games for Toddlers",
                                    footer : "34 MB",
                                    color : "#888",
                                    img : "https://lh3.googleusercontent.com/OzdyXcsB_gBgLUnqHAdZSEJNXfQlwI4VKwMZ-pEOZsbZgROGQ81hUbzZb419CgoW3J0=s180-rw"
                                },
                                {
                                    title : "Trik Matematika",
                                    footer : "34 MB",
                                    color : "#888",
                                    img :"https://lh3.googleusercontent.com/0HRuzB7fbfuTCfYmB1ANMCvuejZBpIWB8FZJE4zwZugA1NnvfWkKIu4tBj31KCygUDg=s180-rw"
                                },
                                {
                                    title : "Buah pertanian pop: waktu pesta",
                                    footer : "34 MB",
                                    color : "#888",
                                    img :"https://lh3.googleusercontent.com/bA2WaKL525NMD6OKoFNjGmtNdaOZu78HVPpO_h5q1LzMLsjIv_TGRS0Mj1l36cwJu50=s180-rw"
                                }
                            ]
                        }>
                        <View style={{flexDirection:"row",justifyContent:"flex-start"  , marginBottom:5}}>
                            <Text>Disarankan untuk Anda</Text>
                        </View>
                    
                    </Choose>
                </View>
            </ScrollView>
        )


    }
} 
export default screenFive;
