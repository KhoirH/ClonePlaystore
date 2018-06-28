import React , {Component } from "react"
import { View ,  StyleSheet} from "react-native"

import Header from "./templateFour/header"
import Content from "./templateFour/content"

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'


class screenFour extends Component{
    
    render(){
        return(
            <View>
                <Header {...this.props} />  
                <Content />
            </View>
        )
    }
}

export default connect()(screenFour);

