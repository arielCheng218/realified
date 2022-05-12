import React, { Component } from "react";
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  uri: "[Insert URI of GraphQL endpoint]",
});

export default class Graph extends Component {
  render() {
    return <div>Hello world!</div>;
  }
}
