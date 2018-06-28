import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {Card , CardItem} from "native-base";
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  card: {padding:0 , borderRadius:10 , overflow:"hidden"  }
})

export default class advertisement extends Component {
  render(){
    return (
      <View style={{height:140 }}>
        <Swiper style={styles.wrapper} loop={false} showsPagination={false} showsButtons={false} loadMinimal={true}  automaticallyAdjustContentInsets={true}>
            
            <Card  style={styles.card}>
                <CardItem cardBody style={{marginBottom:-5, marginRight:-5}}>
                    <Image source={require("../../storage/Mobile-Legends-Tips.jpg")} style={{width:null, flex :1,height:140}} />
                </CardItem>
            </Card>
            <Card  style={styles.card}>
                <CardItem cardBody style={{marginBottom:-5, marginRight:-5}}>
                    <Image source={require("../../storage/Mobile-Legends-Tips.jpg")} style={{width:null, flex :1,height:140}} />
                </CardItem>
            </Card>
        </Swiper>
      </View>
    );
  }
}