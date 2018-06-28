import React  , {Component} from "react";

import {Dimensions , ScrollView,View , Image , Text , StyleSheet , StatusBar , TouchableOpacity , LayoutAnimation , NativeModules , }  from "react-native";
import {Thumbnail , Icon , H1 , Button , Body ,  Content , Grid , Row , Col , H3 ,Form ,Item , Input  } from  "native-base";
import Swiper from 'react-native-swiper';

import  IImage from "react-native-scalable-image";

import * as Progress from "react-native-progress";
import RF from "react-native-responsive-fontsize";
import Svg , {Circle,Ellipse,Path,Rect,Text as TextSvg } from 'react-native-svg';

import {connect} from "react-redux";

import Bar from "../../components/bar";
import DiagramCircle  from "../../components/circle";
import Choose from "../../components/choose";

const { UIManager } = NativeModules;
const win = Dimensions.get("window");

const CustomLayoutEaseInEaseOut = {
    duration: 100,
    create: {
        type: "easeInEaseOut" ,
        property : "opacity"
    },
    update: {
        type: "easeInEaseOut"
    },
    delete: {
        type: "easeInEaseOut" ,
        property : "opacity"
    }
  };
  
class content extends Component{
    
    state = {
        download : false,
        isLike: false
    }
    fo(param){
        LayoutAnimation.configureNext(CustomLayoutEaseInEaseOut);
        this.setState({
            download : param
        });
        if(param){
            this.props.scrollTop({x:200 , y :145 , animated : true})
        }
    }
    
    render(){
        data = this.props.navigation.state.params;
        console.log(win)
        return(
            <View style={Styles.contentWrapper}>
                <View style={Styles.mainContentWrapper}>
                    <View style={Styles.wrapperFieldOne}>    
                        <View style={{flex:3}}>
                            <Thumbnail square source={{'uri' : data.thumbnail}} style={{width:75 , height:75}} />
                        </View>
                        <View style={{flex:6 , flexDirection : "column"}}>
                            <Text style={Styles.titleText}>{data.name}</Text>
                            <Text style={Styles.smallText}>.. company</Text>
                            <Text style={[Styles.smallText,{ width:20 , height:18,borderWidth:1 , borderColor:"#888", fontWeight:"bold" , textAlign:"center" , color:"black" , marginVertical:3 }]}>3+</Text>
                            <Text style={Styles.smallText}>{ data.size }</Text>
                        </View>
                        <View style={{flex:1,alignItems:"flex-end" }}>
                            <Thumbnail source={!this.state.whislist ? require('../../../storage/bookmark.png') : require('../../../storage/bookmarkActive.png')} style={Styles.wislishFieldOne}/>
                            
                        </View>
                    </View>                          
                    
                    {this.state.download ? 
                    <View style={Styles.wrapperHasntInstall}>
                        <View style={{flex:14}}>
                            <Text style={{color:"#888" ,marginBottom:10}}>Proses Mendownload</Text>
                            <Progress.Bar 
                            indeterminate={true} 
                            width={290} 
                            unfilledColor="#eee" 
                            useNativeDriver={true} 
                            color="#43a047"
                            animationConfig={{bouciness:3}}/>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity  onPress={()=>{this.fo(false)}}>
                                <Icon name="close" style={{marginLeft:0}}/>                                  
                            </TouchableOpacity>
                        </View>                                  
                    </View>
                    :
                    <View style={Styles.wrapperHasInstall}> 
                        <Button style={{backgroundColor:"#43a047" , height:35 , borderRadius:5}} onPress={()=> this.fo(true)}><Text style={{paddingHorizontal:30 ,paddingVertical:10, color:"white"}}> INSTAL </Text></Button>
                    </View>
                    }
                                                
                        
                    <View style={Styles.wrapperBelowButtonInstall}> 
                        <View style={{flexDirection:"row" , alignItems:"center" }}>   
                            <Text style={{color:"#888" , fontSize:RF(2) }}> Berisi iklan </Text>
                            <Text style={{color:"#888" , fontSize:RF(2)}}> Pembelian dalam apl </Text>
                        </View>   
                    </View>

                    <View style={Styles.wrapperAboutApplication}>
                        <ScrollView horizontal>
                            <View style={Styles.caseAbout}>
                                <Svg
                                    height="70"
                                    width="70"
                                    style={{marginLeft:5}}
                                >
                                    <Circle
                                            cx="35"
                                            cy="35"
                                            r="30"
                                            stroke="#388e3c"
                                            strokeWidth="2"
                                            fill="white"
                                        />
                                    <Rect
                                        x="22.5"
                                        y="52"
                                        height="15"
                                        width="25"
                                        strokeWidth="0"
                                        fill="#388e3c"
                                    />
                                    <Circle
                                        cx="22"
                                        cy="59.5"
                                        r="7.5"
                                        strokeWidth="0"
                                        fill="#388e3c"
                                    />
                                    <Circle
                                        cx="46.7"
                                        cy="59.5"
                                        r="7.5"
                                        strokeWidth="0"
                                        fill="#388e3c"
                                    />
                                    <TextSvg
                                        fill="white"
                                        fontSize="10"
                                        x="34.5"
                                        y="63"
                                        textAnchor="middle"
                                    >RIBU</TextSvg>
                                    <TextSvg
                                        fill="#444"
                                        fontSize="15"
                                        x="35"
                                        y="40"
                                        fontWeight="bold"
                                        textAnchor="middle"
                                    >RIBU</TextSvg>
                                </Svg>
                                <Text style={Styles.textAbout}>
                                    Download
                                </Text>
                            </View>
                            <View style={Styles.caseAbout}>
                                <View style={Styles.wrapperSvg}>
                                    <Svg
                                        height="70"
                                        width="70"
                                    style={{marginLeft:5}}
                                        
                                    >
                                        <Path
                                            d="M35 5 L55 15 L65 35 L55 55 L35 65 L15 55 L5 35 L15 15  Z35 5"
                                            fill="none"
                                            stroke="#388e3c"
                                            strokeWidth="2"
                                        />
                                        <Path
                                            d="M35 7 L54 16 L63 35 L54 54 L35 63 L16 54 L7 35 L16 16  Z35 7"
                                            fill="#388e3c"
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                        <TextSvg
                                            fill="white"
                                            fontSize="18"
                                            x="34"
                                            y="37"
                                            stroke="white"
                                            fontWeight="bold"
                                            textAnchor="middle"
                                        >4,3</TextSvg>
                                    </Svg>
                                    <View style={Styles.wrapperUsersStar}>
                                        <Text  style={{textAlign:"center"}}>
                                            <Icon type="FontAwesome" name="star"  style={{fontSize:RF(1.2) , color:"white"}} />
                                            <Icon type="FontAwesome" name="star"  style={{fontSize:RF(1.2) , color:"white"}} />
                                            <Icon type="FontAwesome" name="star"  style={{fontSize:RF(1.2) , color:"white"}} />
                                            <Icon type="FontAwesome" name="star"  style={{fontSize:RF(1.2) , color:"white"}} />
                                            <Icon type="FontAwesome" name="star-half"  style={{fontSize:RF(1.2) , color:"white"}} />
                                        </Text>
                                    </View>
                                </View>
                                <Text style={Styles.textAbout}>
                                    <Text >Download</Text>
                                    <Icon type="FontAwesome" name="user" style={{fontSize:RF(1.2) , color:"#444" , paddingLeft:5}}/>    
                                </Text>
                            </View>
                            <View style={Styles.caseAbout}>
                                <View style={Styles.wrapperSvg}>
                                    <Svg
                                        height="70"
                                        width="70"
                                        style={{marginLeft:5}}
                                    >
                                    <Circle
                                            cx="35"
                                            cy="35"
                                            r="30"
                                            stroke="#388e3c"
                                            strokeWidth="0"
                                            fill="#388e3c"
                                        />
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    </Svg>
                                    <View style={Styles.wrapperCircleIcon}>
                                        <Icon type="FontAwesome" name="user" style={{color:"white"}}/>
                                    </View>
                                </View>
                                <Text style={Styles.textAbout}>
                                    
                                </Text>
                            </View>
                            <View style={Styles.caseAbout}>
                                <View style={Styles.wrapperSvg}>
                                    <Svg
                                        height="70"
                                        width="70"
                                        style={{marginLeft:5}}
                                    >
                                    <Circle
                                            cx="35"
                                            cy="35"
                                            r="30"
                                            stroke="#388e3c"
                                            strokeWidth="0"
                                            fill="#388e3c"
                                        />
                                    </Svg>
                                    <View style={Styles.wrapperCircleIcon}>
                                        <Icon type="FontAwesome" name="user" style={{color:"white"}}/>
                                    </View>
                                </View>
                                <Text style={Styles.textAbout}>
                                    
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                    
                    <View style={{ padding:15}}>
                        <Text style={{textAlign:"justify" ,  fontSize:RF(2.9) }}>
                            {data.description}
                        </Text>
                    </View>
                    
                    <View style={{ flexDirection:"row" , marginBottom:10 }}>
                        <Text style={{ fontWeight:"bold"  , flex :1, fontSize: 13 , textAlign : "center" , color:"#43a047"}}>BACA SELENGKAPNYA</Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{width:"115%" , marginLeft:-20, marginRight:-20}}>  
                        {data.images.map((data , k)=>(
                            <IImage key={k} height={200}  source={{"uri" : data.url}} style={{marginRight:3}} />                        
                        ))}
                    </ScrollView>
                    
                    <View style={Styles.wrapperOpinion}>
                        <View style={Styles.circleAccount}>
                            <Text style={{fontSize: RF(4) , fontWeight:"bold" ,color: "white"}}>H</Text>
                        </View>
                        <View style={Styles.wrapperFormOpinion}>
                            <Swiper loop={false}>
                                <View style={{flex: 1,alignItems: 'center'}}>
                                    <Text style={{fontWeight:"bold" , color:"#444" ,textAlign:"center" , fontSize:RF(2.3)}}>Beri nilai aplikasi ini</Text>
                                    <Text style={{marginTop:15 , height:40 , width:"100%" , textAlign:'center'}}>
                                        <Icon  name="md-star-outline" style={{fontSize:RF(5.5)}} />
                                        <Icon  name="md-star-outline" style={{fontSize:RF(5.5)}} />
                                        <Icon  name="md-star-outline" style={{fontSize:RF(5.5)}} />
                                        <Icon  name="md-star-outline" style={{fontSize:RF(5.5)}} />
                                        <Icon  name="md-star-outline" style={{fontSize:RF(5.5)}} />
                                    </Text>
                                    <Text>Benci</Text>
                                </View>
                                <View style={{flex: 1,alignItems: 'center'}} >
                                    <Text style={{fontWeight:"bold" , color:"#444" ,textAlign:"center" , fontSize:RF(2.1)}}>Tulisan ulasan singkat</Text>
                                    <Item style={{width:"90%"}}>
                                        <Input placeholder="Sampaikan pendapat anda" style={{color:"#888" , borderBottomColor: "#888"  , borderBottomWidth:2}} />
                                    </Item>
                                </View>
                            </Swiper>
                            
                        </View>
                    </View>

                    <Grid >
                        <Row style={Styles.wrapperApplicationPopularity}>
                            <Col style={{flex:1.5}}>
                                <Text style={{fontSize:RF(7) ,color:"#444"}}>{data.rating}</Text>
                            </Col>
                            <Col style={{flexDirection:"column" , flex:1.7}}>
                                <Text><Icon style={{fontSize:RF(2) , color:"#444"}} name="md-star"/><Icon style={{fontSize:RF(2) , color:"#444"}} name="md-star"/><Icon style={{fontSize:RF(2) , color:"#444"}} name="md-star"/><Icon style={{fontSize:RF(2) , color:"#444"}} name="md-star"/></Text>
                                <Text style={{color:"#444" , fontSize:RF(1.5)}}>8.513 <Icon name="md-person" style={{fontSize:RF(2) , color:"#444"}}/></Text>
                            </Col>
                            <Col style={{flex:2.4}}>
                                <Bar />
                            </Col>
                            <Col style={{flex:0.8}}>
                                <Text style={{textAlign:"center" }}><Icon name="md-warning" style={{color:"#444" , fontSize:RF(2)}}/></Text>
                            </Col>                            
                        </Row>
                    </Grid>
                    
                    <View style={{ marginTop:30,flexDirection:"row" ,height:30 ,justifyContent:"center"  }}>
                        <Text style={{color:"#888" ,  fontWeight:"bold" , textAlign:"center" }}>
                            RATING FITUR
                        </Text>
                    </View>
                        {data.comments.map((comment , i)=>(
                        <Grid key={i} style={{marginTop:10}}>                    
                            <Row>
                                <Col>
                                    <Thumbnail source={{"uri" : comment._userId.avatar}} />
                                </Col>
                                <Col style={{flex:2}}>
                                    <Text>{ comment._userId.username }</Text>
                                    <Text style={{fontSize:12 , color:"#888"}}><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/><Icon style={{fontSize:12 , color:"#888"}} name="md-star"/> 29/05/18</Text>
                                </Col>
                                <Col style={{flexDirection:"row" , justifyContent:"flex-end"}}>
                                    <Icon name="md-thumbs-up" style={{ color : this.state.isLike ? "blue" : "#888",fontSize:25,paddingHorizontal:5 }}/>
                                    <Icon name="md-more" style={{ color : "#888",fontSize:25,paddingHorizontal:5 }} />       
                                </Col>
                            </Row>
                            <Row style={{marginTop:-2}}>
                                <Col>
                                </Col>
                                <Col style={{flex:3}}>
                                    <Text>{comment.body} </Text>
                                </Col>
                            </Row>
                        </Grid>                    
                        
                        ))}
                        <Grid style={{marginTop:10}}>                    
                            <Row>
                                <Col>
                                    <Text style={{textAlign:"center" ,  fontWeight:"bold" ,color:"#43a047"}}>
                                        SEMUA ULASAN
                                    </Text >
                                </Col>
                            </Row>
                        </Grid>                    
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
                    {/*
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
                                    <Text>Aplikasinya Bagus gan </Text>
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
                                    <Text>Mantap terus kembangin lagi aplikasinya</Text>
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
                                    <Text>mantap nih </Text>
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
                                                                                                    */}
                </View>
                {/* <View style={{ flexDirection:"row"  , height:200}}>
                    <Button style={Styles.bottomButton} transparent onPress={()=>{this.setState({whislist : !this.state.whislist})}}>
                        <Text>
                            <Thumbnail source={ !this.state.whislist ? require('../../../storage/bookmark.png') : require('../../../storage/bookmarkActive.png') } />
                        </Text>
                        <Text >
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
                <View style={{backgroundColor:"#ddd"}}>
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
                </View> */}
                                
            </View> 
        )
    }
}


export default content;
const Styles = StyleSheet.create({
    //contentWrapper
    contentWrapper:{
        zIndex:-1 ,  backgroundColor:"white" 
    },
    
    //mainContentWrapper
    mainContentWrapper:
    {
        marginHorizontal:20 , flexDirection:"column"
    },
    
    // FieldOne 
    wrapperFieldOne:{
        flexDirection:"row" ,  marginTop:15   
    },
    // Title Text
    titleText:{
        fontSize: RF(3) , fontWeight:"bold" , color:"black" 
    },
    //Small Text 
    smallText:{
        color : "#888",fontSize : RF(2)
    },
    //wislishFieldOne
    wislishFieldOne:{
        width:28 ,height:28 ,marginRight:-3
    },

    //wrapperinstall
    wrapperHasntInstall : {
        flexDirection : "row" , justifyContent:"space-around"  , alignItems : "flex-end" , marginTop:10
    },
    wrapperBelowButtonInstall : {
        marginTop:15 , marginBottom:5 , flexDirection: 'row',justifyContent:"flex-end"
    },
    wrapperAboutApplication : {      
        borderColor : "#ddd" , borderTopWidth :1 ,  borderBottomWidth :1 , alignItems: "center" , justifyContent: "center" , flexDirection:"row" , paddingVertical:5
    },
    wrapperHasInstall : {
        flexDirection:"row" , justifyContent:"flex-end"
    },
    caseAbout : {
        width: 80,flexDirection: "column",justifyContent: "center" 
    },
    textAbout : {
        textAlign:"center" , fontWeight:"bold" , fontSize:RF(1.5)
    },
    wrapperUsersStar : {
        position:"absolute" , bottom: 19 , left : 0 , right:0
    },
    wrapperCircleIcon : {
        position:"absolute",top:0,bottom:0,left:0,right:0,justifyContent:"center",alignItems:"center" 
    },
    wrapperApplicationPopularity : {
         marginTop:20, alignItems:"center" , height:80  
    },
    wrapperOpinion : {
        marginTop:20
    },
    circleAccount : {
        height : 65 , width:65 ,backgroundColor: "red",borderRadius : 65,justifyContent:"center",alignItems: 'center',borderColor: "white",borderWidth : 2,elevation : 2, position : "absolute", top: 0 ,right : ( win.width / 2 ) - 55
    },
    wrapperFormOpinion: {
        height:210,marginTop:32.5,marginHorizontal : -20 , backgroundColor:"#cfd8dc",paddingTop:40
    },
    //parentFieldTwo
    responsiveImage :{
        flex:1 ,  height: 200
    },
    bottomButton : {
        flex:1 , paddingTop:0, height:100, alignItems:"center", justifyContent:"center" , flexDirection :"column"
    } ,
    ifClickDownload : {
        backgroundColor : "#ddd"
    }
    
});


