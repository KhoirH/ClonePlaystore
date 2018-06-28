import React , { Component } from "react"
import { View , Text , ScrollView} from "react-native"

import { Tabs , Tab , ScrollableTab } from 'native-base'

import Header from '../components/screen/one/header'
import Content from '../components/screen/one/content'
import Footer from '../components/screen/one/footer'

import SubTab from "../components/tabs"


export default class beranda extends Component{
    state= {
        offsetTop :0
    }
    handleScroll(event){
        this.setState({
            offsetTop :event.nativeEvent.contentOffset.y
        })
    }
    render(){        
        
        return (
            <View>
                <ScrollView onScroll={(event) => this.handleScroll(event) } >
                    <Header parentApp={this.props.parent}  zIndex={1000}/>
                    <Tabs renderTabBar={()=> <ScrollableTab />} locked >
                            <Tab heading="BERANDA" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                                <Content parentApp={this.props.parent} />
                            </Tab>
                            <Tab heading="GAME" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                            </Tab>
                            <Tab heading="FILM" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                            </Tab>
                            <Tab heading="BUKU" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>                                                
                            </Tab>
                            <Tab heading="KIOS" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                            </Tab>
                    </Tabs>
                    <SubTab animate={false} offsetTop= {135}   />
                    
                </ScrollView>
            </View>
        )
    }

}