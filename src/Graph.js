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
  }

  render() {
    return (
      <div>
        <div>
          <h1>Graph</h1>
          <ForceGraph2D
            backgroundColor="#171c32"
            linkDirectionalParticleColor={() => "red"}
            linkDirectionalParticleWidth={6}
            linkHoverPrecision={10}
            graphData={{
              nodes: [{ id: "a" }, { id: "b" }, { id: "c" }],
              links: [
                { source: "a", target: "b" },
                { source: "c", target: "a" },
              ],
            }}
            showNavInfo={true}
          />
        </div>
      </div>
    );
  }
}
