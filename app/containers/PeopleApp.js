"use strict";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  StatusBar,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRandomPeople } from "../redux/actions/peopleActions";

class PeopleApp extends Component {
  componentDidMount() {
    this.props.fetchRandomPeople();
  }

  _keyExtractor = item => item.email;

  _renderItem = ({ item }) => {
    const { name, picture, cell, email, phone } = item;

    return (
      <View>
        <View style={styles.cardContainerStyle}>
          <View style={{ paddingRight: 5 }}>
            <Text style={{ color: "white", textAlign: "left" }}>
              {name.first} {name.last} {"\n"}
              {cell} {"\n"}
              {email}
            </Text>
          </View>
          <Image
            style={{ width: 65, height: 65 }}
            source={{ uri: picture.medium }}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <ActivityIndicator
          size="large"
          animating={this.props.randomPeople.isFetching}
        />
        <FlatList
          style={{ flex: 1 }}
          data={this.props.randomPeople.items}
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
    backgroundColor: "#093339"
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
    backgroundColor: "#4e8087",
    padding: 10
  }
});

PeopleApp.propTypes = {
  fetchRandomPeople: PropTypes.func.isRequired,
  randomPeople: PropTypes.object
};

const mapStateToProps = state => {
  return {
    randomPeople: state
  };
};

export default connect(mapStateToProps, {
  fetchRandomPeople
})(PeopleApp);
