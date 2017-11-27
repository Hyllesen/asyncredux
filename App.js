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
  StatusBar
} from "react-native";

export default class App extends Component {
  state = {
    data: ""
  };

  async getRandomUsersFromApi() {
    try {
      const results = await fetch("https://randomuser.me/api/?results=15");
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
    const { name, picture, cell, email, phone } = item;

    return (
      <View>
        <View style={styles.cardContainerStyle}>
          <View>
            <Text>
              {name.first} {name.last}
            </Text>
            <Text>{cell}</Text>
            <Text>{phone}</Text>
            <Text>{email}</Text>
          </View>

          <Image
            style={{ width: 65, height: 65, marginLeft: 20 }}
            source={{ uri: picture.medium }}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
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
    backgroundColor: "#093339",
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
  },
  cardContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    backgroundColor: "#578f96",
    padding: 10
  }
});
