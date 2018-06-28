import React , { Component } from 'react'
import {View , Text ,TouchableOpacity , ScrollView} from 'react-native'
import {Container ,Content , H4} from 'native-base'

import Advertisement from "../../advertisement"
import Choose from "../../choose"
import Card from "../../card"

export default class content extends Component{
    
    parsingProps(props)
    {
        return this.props.parentApp.props.navigation.navigate("screenTwo" , props) ;
    } 
    properties=[
        [
            {
                title : "Kick the Buddy",
                footer : "34 MB",
                color : "#888",
                img :"https://lh3.googleusercontent.com/pUl1QnKIim7hHmC0uLg7CdBzxuWBneaPFkVMHlYVvBO8fZTfvK2MLWI4Vva63B7p84Y=s180-rw"
            },
            {
                title : "High School Gang",
                footer : "34 MB",
                color : "#888",
                img :"https://lh3.googleusercontent.com/5BIxR2_ftzhASvdKFEy1u5-xm827FY2eCVYQ5unBUASaJgx4KkqQ4o4ZQewsn7xGzg=s180-r"
            },
            {
                title : "Lucky Craft Survival Explore",
                footer : "34 MB",
                color : "#888",
                img :"https://lh3.googleusercontent.com/mamDhenVs6yxQYYr1dRnmndC1sdsw_92EYZBfOzO10_yZ1FOX7aNK39NvprSFx87fQ=s180-rw"
            },
            {
                title : "CrossFire: Legends",
                footer : "34 MB",
                color : "#888",
                img :"https://lh3.googleusercontent.com/yqjPzwoTBKharqI9qex4jfHDVy3eB07UkYCDCK27CFpFpEQHWFOUQ5PdrjuJyobllvtR=s180-rw"
            },
            {
                title : "Kota Kita",
                footer : "34 MB",
                color : "#888",
                img :"https://lh3.googleusercontent.com/pt8B3qgUG-G4u_rchVZ080nH7lfaVcwNIueOZm9jA3PceHHN_M8vQMdr06wjfs906SA=s180-rw"
            },
            {
                title : "Knife vs Fruit: Just Shoot It!",
                footer : "34 MB",
                color : "#888",
                img :"https://lh3.googleusercontent.com/79eplN3HGTPJOQ5ilZc-o6cC7zVdxHR4gfTDhabq2hsNDv9jYBbPkLgc-qV8D5vb5g=s180-rw"
            }
        ],
        [
            {
                title : "Mobile Legend : Bang - bang",
                size : "34 MB",
                color : "#888",
                img : "https://mobilelegends.gcube.id/wp-content/uploads/sites/6/2017/12/Mobile-Legends-Tips.jpg"                                        
            },
            {
                title : "Trik Matematika",
                footer : "34 MB",
                color : "#888",
                img :"https://lh3.googleusercontent.com/0HRuzB7fbfuTCfYmB1ANMCvuejZBpIWB8FZJE4zwZugA1NnvfWkKIu4tBj31KCygUDg=s180-rw"
            },
            {
                title : "Math games - brain workout",
                footer : "34 MB",
                color : "#888",
                img :"https://lh3.googleusercontent.com/OGyX4fSb_bQQ6ImtMrmLrBB6WJLFhhwM3ogWEPKNxqCp2nXNSgmpEIMhPLSppp0EcXKD=s180-rw"
            },
            {
                title : "Buah pertanian pop: waktu pesta",
                footer : "34 MB",
                color : "#888",
                img :"https://lh3.googleusercontent.com/bA2WaKL525NMD6OKoFNjGmtNdaOZu78HVPpO_h5q1LzMLsjIv_TGRS0Mj1l36cwJu50=s180-rw"
            },
            {
                title : "React Native Explorer with code",
                footer : "34 MB",
                color : "#888",
                img :"https://lh3.googleusercontent.com/siJiMKhip8DLslo5_WUrPgc0M5QFpvo7vK-O-dtdpG1RQ8a9EwlKGH-o6oLrmjbAM5U=s180-rw"
            }
            
        ],
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
        ],
        [
            {
                title : "Dungeon & Heroes",
                footer : "34 MB",
                color : "#888",
                img : "http://www.scottking.info/Pics/IMG_2050-Edit-1024x682.jpg"
            },
            {
                title : "Mobile Legend : Bang - bang",
                footer : "34 MB",
                color : "#888",
                img : "https://mobilelegends.gcube.id/wp-content/uploads/sites/6/2017/12/Mobile-Legends-Tips.jpg"
            },
            {
                title : "High School Gang",
                footer : "34 MB",
                color : "#888",
                img :"https://lh3.googleusercontent.com/5BIxR2_ftzhASvdKFEy1u5-xm827FY2eCVYQ5unBUASaJgx4KkqQ4o4ZQewsn7xGzg=s180-r"
            },
            {
                title : "Funny Food 123! Kids Number Games for Toddlers",
                footer : "34 MB",
                color : "#888",
                img : "https://lh3.googleusercontent.com/OzdyXcsB_gBgLUnqHAdZSEJNXfQlwI4VKwMZ-pEOZsbZgROGQ81hUbzZb419CgoW3J0=s180-rw"
            }
        ],
        [
            {
                title : "Ice Crush 2018 - A new Puzzle Matching Adventure",
                footer : "Rp.3000",
                color : "#4caf50",
                img : "https://lh3.googleusercontent.com/kB9SVli-DdTE3xf8BeYQCGg3TLKLBaA7aVVRT8Q_HdDYvOc8F4j3Dpk1lbTx7Dvk38nx=s180",
            
            },
            {
                title : "Mobile Legend : Bang - bang",
                footer : "Rp.3000",
                color : "#4caf50",
                img : "https://mobilelegends.gcube.id/wp-content/uploads/sites/6/2017/12/Mobile-Legends-Tips.jpg"
            },
            {
                title : "Art of War 3: PvP RTS modern warfare strategy game",
                footer : "Rp.3000",
                color : "#4caf50",
                img : "https://files1.matjarplay.com/uploads/screenshot-1193fe12c8b97c3df18815d86b04ea02.jpg"
            },
            {
                title : "Dungeon & Heroes",
                footer : "Rp.3000",
                color : "#4caf50",
                img : "http://www.scottking.info/Pics/IMG_2050-Edit-1024x682.jpg"
            },
            {
                title : "Farm Paradise: Hay Island Bay",
                footer : "Rp.3000",
                color : "#4caf50",
                img : "https://lh3.googleusercontent.com/nMfEnr3xzrRPwekjpzGhWK6S4k94iENmJdrwBkHLd_88Rt76uMXQS3R3NpQtdkJwU70=s180-rw"
            },
            {
                title : "Funny Food 123! Kids Number Games for Toddlers",
                footer : "Rp.3000",
                color : "#4caf50",
                img : "https://lh3.googleusercontent.com/OzdyXcsB_gBgLUnqHAdZSEJNXfQlwI4VKwMZ-pEOZsbZgROGQ81hUbzZb419CgoW3J0=s180-rw"
            }
        ],
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
    ];
    render(){
        return (
            <View style={{marginLeft:10 , marginRight: 10 , marginTop: 50   }}>
                <Advertisement />
                <Choose 
                    properties={this.properties[0]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", marginBottom:5 }}>
                        <View style={{flex:5 , flexDirection:"column"}}>
                            <View>
                                <Text>Game Baru + Diperbarui</Text>
                            </View>
                            <View >
                                <Text style={{fontSize:10,color:"#888"}}>Selalu ada yang baru lho!</Text>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                        <TouchableOpacity  onPress={()=>this.parsingProps({title:"Game Baru + Diperbarui" , properties:this.properties[0]}) }>
                                <Text style={{color:"#4caf50" , fontWeight:"bold"}}>
                                    Lainnya
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                </Choose>
                <Choose 
                    properties={this.properties[1]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", marginBottom:-10 }}>
                        <View style={{flex:5 }}>
                            <Text>Direkomendasikan untuk Anda</Text>
                        </View>
                        <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>this.parsingProps({title:"Direkomendasikan untuk Anda" , properties:this.properties[1]})}>
                                <Text style={{color:"#4caf50" , fontWeight:"bold"}}>
                                    Lainnya
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                </Choose>
                <Choose 
                    properties={this.properties[2]}>
                    <View style={{flexDirection:"row",justifyContent:"flex-start"  , marginBottom:5}}>
                        
                        <View style={{flex:6 , paddingTop:5 }}>
                            <Text>Disarankan untuk Anda</Text>
                        </View>
                    </View>
                
                </Choose>
                <Choose 
                    properties={this.properties[3]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", marginBottom:5 }}>
                        <View style={{flex:5 , flexDirection:"column"}}>
                            <View>
                                <Text>Game Pra Daftar</Text>
                            </View>
                            <View >
                                <Text style={{fontSize:10,color:"#888"}}>Segera di Google Play</Text>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={()=>this.parsingProps({title:"Game Pra Daftar" , properties:this.properties[3]})}>
                                <Text style={{color:"#4caf50" , fontWeight:"bold"}}>
                                    Lainnya
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                </Choose>
                <Choose 
                    bgColorCard="black"
                    parseImage="http://images.all-free-download.com/images/graphiclarge/background_ramadan_mubarak_vector_design_set_584345.jpg"
                    dark= {true}
                    properties={this.properties[4]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", marginBottom:5 }}>
                        <View style={{flex:5 , flexDirection:"column"}}>
                            <View>
                                <Text style={{color:"white"}}>Diskon Untuk Game Premium</Text>
                            </View>
                            <View >
                                <Text style={{fontSize:10,color:"white"}}>Segera di Google Play</Text>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={()=>this.parsingProps({title:"Diskon Untuk Game Premium" , properties:this.properties[4]})}>
                                <Text style={{color:"#4caf50" , fontWeight:"bold"}}>
                                    Lainnya
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                </Choose>
                <Choose 
                    properties={this.properties[5]}>
                    <View style={{flexDirection:"row",justifyContent:"flex-start"  }}>
                        <View style={{flex:5  }}>
                            <Text>Disarankan untuk Anda</Text>
                        </View>
                        <View style={{flex:1 }}>
                            <TouchableOpacity onPress={()=>this.parsingProps({title:"Disarankan untuk Anda" , properties:this.properties[5]})}>
                                <Text style={{color:"#4caf50" }}>
                                    Lainnya
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                
                </Choose>
                <Card/>
            </View>
                
        )
    }
}
