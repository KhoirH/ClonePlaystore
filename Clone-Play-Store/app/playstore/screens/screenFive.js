import React , {Component,PureComponent} from "react";
import { View , Image  , Dimensions , Text , StatusBar}  from "react-native";

import ScrollParallax from "react-native-parallax-scroll-view" ;

import Header from "./templateFive/header";
import Content from "./templateFive/content";

import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

const win = Dimensions.get('window');
// const ratio = win.width/541;

class screenFive extends Component{
    state = {
        download:false
    }
    
    render(){
        data = this.props.navigation.state.params;
        return(
            <View style={{flex:1 , overflow: 'hidden'}}>
                <StatusBar
                    translucent={false}
                />
               <ScrollParallax 
                ref="_scroll"
                style={{flex:1 }}
                    renderBackground = {()=> <Image source={{'uri':data.mainImage }} style={{width:win.width , height:250}} />}
                    backgroundColor= "#388e3c"
                    renderStickyHeader = {()=> <View style={{position:"absolute" , top:0, right:0 , left:0, height:60,elevation:1 }}></View> }
                    stickyHeaderHeight	= {60}
                    renderFixedHeader = {()=> <Header {...this.props } setState={(cek)=>{this.setState(cek)}} store={this.state} /> }    
                    parallaxHeaderHeight ={200
                    }
               >
               <Content {...this.props } scrollTop={(top) => { this.refs._scroll.scrollTo(top) }}/> 
               </ScrollParallax >
            </View>
            
        )


    }
} 


export default connect()(screenFive);