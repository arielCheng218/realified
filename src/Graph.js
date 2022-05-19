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
    this.ref = React.createRef;
    this.ref.current.d3Force("link").distance((link) => {
      return 30;
    });
  }

  drawNode = (node, ctx, globalScale) => {
    ctx.textAlign = "center";
    ctx.fillText(node.name, node.x, node.y);
    ctx.beginPath();
    ctx.arc(node.x, node.y, 30, 0, 2 * Math.PI);
    ctx.stroke();
  };

  render() {
    return (
      <div>
        <ForceGraph2D
          graphData={data}
          nodeOpacity={0.99}
          linkDirectionalArrowLength={3.5}
          linkDirectionalArrowRelPos={1}
          ref={this.myRef}
          onNodeHover={() => (a, b) => null}
          nodeCanvasObject={this.drawNode}
        />
      </div>
    );
  }
}
