import React, { Component } from 'react';
import TodoList from './components/TodoList';
import { Button, Text, TextInput, View } from 'react-native';
 

class TodoView extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { 'items': [], 'text': '' }
  }

  render() {
    return (
      <View style={{ 'padding': 30 }}>
        <View>
          <Text style={{ 'fontWeight': 'bold' }}>TODO</Text>
        </View>
        <TodoList
            style={{'marginTop': 5 }}
            items={this.state.items}
          />
        <TextInput
            style={{ 'height': 40, 'paddingLeft': 5, 'marginTop': 5, 'borderColor': 'gray', 'borderWidth': 1 }}
            onChangeText={this.handleChange}
            value={this.state.text}
          />
        <Button title={`Add #${ this.state.items.length + 1 }`} onPress={this.handleSubmit} />
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
export default TodoView;