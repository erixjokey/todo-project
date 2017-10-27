import React, { Component } from 'react';
import { View, StatusBar, Navigator } from 'react-native';


class TodoList extends Component {
  render(){
    return(    
      <View>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Navigator
          initialRoute={{statusBarHidden: true}}
          renderScene={(route, navigator) =>
            <View>
              <StatusBar hidden={route.statusBarHidden} />
              Today
            </View>
          }
        />
      </View>
    )
  }
}

// dateListForm: {
//   height: 18,
//   paddingLeft: 5,
//   backgroundColor: 'lightgray'
// };