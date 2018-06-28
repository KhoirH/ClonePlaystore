import React , { Component } from "react"
import { View , Text , ScrollView , StatusBar , LayoutAnimation , NativeModules , StyleSheet } from "react-native"

import { Tabs , Tab , ScrollableTab , Drawer , Button ,Spinner} from 'native-base'

import Header from './templateOne/header'
import Content from './templateOne/content'
import Footer from './templateOne/footer'


import SideBar from '../components/sidebar'
import SubTab from "../components/tabs"


import { connect } from 'react-redux'
import { singleAccount , allItem} from "../actions"

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
 UIManager.setLayoutAnimationEnabledExperimental(true)

class screenOne extends Component{
    state= {
        offsetTop :0,
        bgFocusSearch: Styles.WrapperNonActive,
        scrollActive :true
    }
    componentDidMount(){
        apiKey =  "5b1713c5270b1f1480a07618";
        this.props.dispatch(singleAccount(apiKey));
        this.props.dispatch(allItem());
            
    }  
    closeDrawer() {
        this.drawer._root.close()
    };

    handleShadowInput(int){
        LayoutAnimation.easeInEaseOut();
        const provider = ["WrapperActive","WrapperNonActive"];
        const scroll = Boolean(int);

        bgFocusSearch: Styles[provider[int]],
        this.setState({
            scrollActive: scroll
        });
    }

    render(){        
        return (
            <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<SideBar navigator={this.navigator} parent={this} account={this.props.account} />}
            onClose={() => this.closeDrawer()}
            
            >
            <StatusBar
                backgroundColor="#2e7d32"
                translucent={true}
                    />
                {!this.props.isLoading ?                 
                <ScrollView scrollEnabled={this.state.scrollActive}>
                    <Header parentApp={this}  zIndex={1000}/>
                    <Tabs renderTabBar={()=> <ScrollableTab />} locked >
                        <Tab heading="BERANDA" tabStyle={{ backgroundColor:"#388e3c"}} activeTabStyle={{ backgroundColor:"#388e3c"}} textStyle={{ color : "white"}}>
                            <Content parentApp={this} { ...this.props }/>
                        </Tab>
                        <Tab heading="GAME" tabStyle={{ backgroundColor:"#388e3c"}} activeTabStyle={{ backgroundColor:"#388e3c"}} textStyle={{ color : "white"}}>
                        </Tab>
                        <Tab heading="FILM" tabStyle={{ backgroundColor:"#388e3c"}} activeTabStyle={{ backgroundColor:"#388e3c"}} textStyle={{ color : "white"}}>
                        </Tab>
                        <Tab heading="BUKU" tabStyle={{ backgroundColor:"#388e3c"}} activeTabStyle={{ backgroundColor:"#388e3c"}} textStyle={{ color : "white"}}>                                                
                        </Tab>
                        <Tab heading="KIOS" tabStyle={{ backgroundColor:"#388e3c"}} activeTabStyle={{ backgroundColor:"#388e3c"}} textStyle={{ color : "white"}}>
                        </Tab>
                    </Tabs>
                    <SubTab animate={false} offsetTop= {135}/> 
                    <View style={[Styles.WrapperMain ,this.state.bgFocusSearch]} ></View>
                    
                </ScrollView>
                :
                <View></View>
                }
            </Drawer>
        )
    }

}
const Styles = StyleSheet.create({
    WrapperMain : {
        backgroundColor:"black" , 
        position:"absolute" ,  
        top:0 , 
        left:0,
        right:0,
        bottom:0
    },
    WrapperActive :{
        opacity:0.5 , 
        zIndex:0
    },
    WrapperNonActive:{
        opacity : 0,
        zIndex:-1000 
    }
})
const mapsStateToProps = (state)=>{
    return {
        account : state.accountReducer,
        item : state.itemReducer.items,
        isLoading :state.itemReducer.isLoading
    }
}
export default connect(mapsStateToProps)(screenOne);

