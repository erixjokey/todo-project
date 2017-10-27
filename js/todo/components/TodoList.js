import React, { Component } from 'react';
import { ListView, Text, StyleSheet } from 'react-native';


class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const ds = new ListView.DataSource({ 'rowHasChanged': (r1, r2) => r1 !== r2 })
    const dataSource = ds.cloneWithRows(this.props.items.map(({text}) => text))

    return (
        <ListView
          style={styles.todoListForm}
          dataSource={dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
    )
  }

}
var styles = StyleSheet.create({

  todoListForm: {
    borderWidth: 2
  }
  
});

export default TodoList; 
