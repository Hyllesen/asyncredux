"use strict";
import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import PeopleList from "./components/PeopleList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRandomPeople } from "../redux/actions/peopleActions";

class PeopleApp extends Component {
  componentDidMount() {
    this.props.fetchRandomPeople();
  }

  render() {
    let content = null;
    if (this.props.randomPeople.isFetching) {
      content = <ActivityIndicator size="large" />;
    } else {
      content = <PeopleList items={this.props.randomPeople.items} />;
    }
    return (
      <View style={styles.container}>
        <Text>{this.props.randomPeople.errorMessage}</Text>
        {content}
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
