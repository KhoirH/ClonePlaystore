import React , { Component } from "react"
import { StyleSheet , View , Animated} from "react-native"
import {Content , Body,Text , CardItem , Card ,Tabs , Tab , ScrollableTab , TabHeading ,Icon, Thumbnail } from 'native-base' 

export default class tabs extends Component{
    
    storage = [
        {
            type: "Ionicons",
            name:"md-compass",                    
            subTitle : "Untuk Anda"
        },
        {
            type: "MaterialIcons",
            name:"poll"        ,
            subTitle :"Paling Populer"
        },
        {
            img:require("../../storage/kategori.png"),                
            subTitle : "Kategori"  
        },
        {
            img:require("../../storage/pilihaneditor.png"),    
            subTitle : "Pilih Editor"        
        },
        {
            img:require("../../storage/keluarga.png"),
            subTitle : "Keluraga"
        },
        {
            type: "Ionicons",
            name:"md-unlock",
            subTitle: "Akses Awal"        
        },
        
    ]
    
    render() {
        
 
        return (
            <View style={[Styles.tabTop  ,{ top:  this.props.offsetTop , zIndex:this.props.zIndex}]}>
                <Card style={{ marginTop : -2 ,marginLeft : -2 ,marginRight : -2 ,paddingBottom:0 }} >
                    <Tabs renderTabBar={()=> <ScrollableTab />} style={{ marginBottom:-1.8}}  tabBarUnderlineStyle={{ height:0 }}>
                        {
                            this.storage.map((data,i) => {
                                
                                return (            
                                    <Tab 
                                    key={data.subTitle} 
                                    heading={
                                        <TabHeading 
                                        style={{ backgroundColor:"white" , flexDirection:"column", marginLeft:-5, marginRight:-5}}  
                                        activeTextStyle={{ color : "#4caf50"}}>
                                            {(Boolean(data.img))?<Thumbnail square source={data.img} style={{width:16, height:16 , marginTop:10
                                                
                                                
                                                ,}}/>:<Icon name={data.name} type={data.type} style={{color:"#777" , fontSize: 18 , paddingTop:10 }} />}
                                            
                                            <Text style={{fontSize:12 ,  paddingBottom:10 , color:"#AAA" }}>{ data.subTitle }</Text>
                                        </TabHeading>
                                    }
                                    tabStyle={{ width:0 }}
                                    >
                                    </Tab>
                                )
                            })
                        }
                    </Tabs>
                </Card>
            </View>
            
        )
    }
}


const Styles = StyleSheet.create({
    tabTop : {
        position:"absolute",        
        zIndex:100
    }
})