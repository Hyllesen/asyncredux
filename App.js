/**
 * @flow
 */
"use strict";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ListItem
} from "react-native";

export default class App extends Component {
  state = {
    data: ""
  };

  async getRandomUsersFromApi() {
    try {
      const results = await fetch("https://randomuser.me/api/?results=5");
      const json = await results.json();
      return json.results;
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getRandomUsersFromApi().then(data => this.setState({ data }));
  }

  _keyExtractor = (item, index) => item.email;

  _renderItem = ({ item }) => {
    const { name, picture, cell, email, phone, location } = item;

    return (
      <ListItem>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20
          }}
        >
          <View style={{ borderWidth: 0, padding: 10 }}>
            <Text>{name.title}</Text>
            <Text>{name.first}</Text>
            <Text>{name.last}</Text>
            <Text>{cell}</Text>
            <Text>{phone}</Text>
            <Text>{email}</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={{ uri: picture.large }}
            />
          </View>
        </View>
      </ListItem>
    );
  };

  render() {
    console.log(this.state.data);
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 25
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
