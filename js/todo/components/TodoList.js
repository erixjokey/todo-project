import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import styles from './styles.scss';


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
export default TodoList; 
