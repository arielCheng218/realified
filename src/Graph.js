import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { data } from "./data/initialdata.js";
import ForceGraph2D from "react-force-graph-2d";

export default class Graph extends Component {
  // state = {
  //   dataWritten: false,
  //   select: null,
  // };

  // async componentDidMount() {
  //   // write initial data, if not written
  //   console.log(data);
  // }

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div>
        <ForceGraph2D graphData={data} nodeOpacity={0.99} ref={this.myRef} />
      </div>
    );
  }
}
