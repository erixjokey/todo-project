import React, { Component } from 'react';
import TodoList from './components/TodoList';
import DateList from './components/DateList';
// import Button from './components/AddButton';
import { Button, Text, TextInput, View, StyleSheet, StatusBar, Navigator, TouchableHighlight } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class TodoView extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { 'items': [], 'text': '' }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

          {/* Chart icon */}

          <Text style={styles.headerTitle}>
            {/* <FontAwesome>{Icons.chevronLeft}</FontAwesome>  */}
           Chart Work
            </Text>

          {/* Change view list */}

          {/* "Calendar icon" */}

          {/* Add new event */}
          <Button 
            style={styles.addButton}
            title="+"
            onPress={this.handleSubmit} 
          />
        </View> 

        {/* Temporary code */}
        <View style={styles.dateListForm}>
          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
          />
          <Navigator
            initialRoute={{statusBarHidden: true}}
            renderScene={(route, navigator) =>
              <View>
                <StatusBar hidden={route.statusBarHidden} />
                <Text style={styles.textStyleForm}>Today</Text>
              </View>
            }
          />
        </View>

        <TodoList
          style={styles.todoListForm}
          items={this.state.items}
          />
          
        <TextInput
          style={styles.textInputStyle}
          onChangeText={this.handleChange}
          value={this.state.text}
          />
        
      </View>
    )
  }

  handleChange(text) {
    this.setState({ text })
  }

  handleSubmit(e) {
    e.preventDefault()
    var newItem = {
      'text': this.state.text,
      'id': Date.now()
    }
    this.setState((prevState) => ({
      'items': prevState.items.concat(newItem),
      'text': ''
    }))
  }
 
}

var styles = StyleSheet.create({
  
  container: {
  },

  header: {
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#03af28',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  chartIcon: {
    fontSize: 16,
  },

  headerTitle: {
    fontSize: 18,
    // fontStyle: 'normal',
    color: 'white',
    fontWeight: 'bold',
  },

  addButton: {
    textAlign: 'right'
  },

  // Temporary List
  dateListForm: {
    height: 18,
    paddingLeft: 10,
    backgroundColor: 'lightgray'
  },

  textInputStyle: {
    height: 40, 
    paddingLeft: 5,
    borderColor: 'gray',
  },

});


export default TodoView;