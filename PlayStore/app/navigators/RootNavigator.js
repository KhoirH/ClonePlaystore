import { StackNavigator } from 'react-navigation';

import { PlayStoreOne, PlayStoreTwo, PlayStoreThree , PlayStoreFour , PlayStoreFive } from '../playstore/screens';

const RootNavigator = StackNavigator({
  

  //Playlist
  PlayStoreOne: {
    screen: PlayStoreOne,
    navigationOptions: {
      title: 'PlayStore Home'
    }
  },
  PlayStoreTwo: {
    screen: PlayStoreTwo,
    navigationOptions: {
      title: 'Sub Kategori',
    }
  },
  PlayStoreThree: {
    screen: PlayStoreThree,
    navigationOptions: {
      title: 'Detail Contact'
    }
  },
  PlayStoreFour: {
    screen: PlayStoreFour,
    navigationOptions: {
      title: 'Detail Contact'
    }
  },
  PlayStoreFive: {
    screen: PlayStoreFive,
    navigationOptions: {
      title: 'Detail Contact'
    }
  }   
  
},{
  navigationOptions:{
    header : null
  }
})

export default RootNavigator
