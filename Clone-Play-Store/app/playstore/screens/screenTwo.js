import React , { Component } from "react";
import {  View  , StatusBar , SafeAreaView} from 'react-native';

import  Header from "./templateTwo/header";
import  Content from "./templateTwo/content";

import { NavigationActions ,Sa} from 'react-navigation';
import { connect } from "react-redux";

class screenTwo extends Component{    
    render(){         
        return (
            <SafeAreaView>
                     
                <Header {...this.props}/>
                <Content {...this.props}/>
            </SafeAreaView>
                               
        )
    }

}




export default connect()(screenTwo);

