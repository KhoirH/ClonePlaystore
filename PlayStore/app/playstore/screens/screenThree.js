import React , {Component } from "react"
import { View ,  StyleSheet} from "react-native"
import {Drawer} from "native-base"

import Content from "./templateThree/content"
import Header from "./templateThree/header"

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import SideBar from '../components/sidebar'

class screenThree extends Component{
      
    closeDrawer() {
        this.drawer._root.close()
    };
    render(){
        return(
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} parent={this} account={this.props.account} />}
                onClose={() => this.closeDrawer()} 
                >
                <View >
                    <Header  {...this.props} drawer={this.drawer}/>   
                    <Content {...this.props}/>
                
                </View>
            </Drawer>
        )
    }
}

const mapsStateToProps = (state)=>{
    return {
        account : state.accountReducer,
    }
}
export default connect(mapsStateToProps)(screenThree);
