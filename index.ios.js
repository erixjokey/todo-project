/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Button,
  ListView,
  Text,
  TextInput,
  View
} from 'react-native'

class TodoApp extends Component {
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

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const ds = new ListView.DataSource({ 'rowHasChanged': (r1, r2) => r1 !== r2 })
    const dataSource = ds.cloneWithRows(this.props.items.map(({text}) => text))

    return (
      <ListView
        dataSource={dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    )
  }
}

AppRegistry.registerComponent('Todo', () => TodoApp)
