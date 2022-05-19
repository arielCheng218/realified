import React, { useState, useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { data } from "./data/initialdata.js";
import ForceGraph2D from "react-force-graph-2d";

export default function Graph() {
  // state = {
  //   dataWritten: false,
  //   select: null,
  // };

  // async componentDidMount() {
  //   // write initial data, if not written
  //   console.log(data);
  // }

  const fgRef = useRef();

  useEffect(() => {
    const fg = fgRef.current;
    fg.d3Force("link").distance((link) => {
      return 85;
    });
  }, []);

  const drawNode = (node, ctx, globalScale) => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#eeeeee";
    ctx.fill();

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.font = "6px Consolas";
    ctx.fillText(node.name, node.x, node.y);
    ctx.strokeStyle = "#222222";
    ctx.fill();
  };

  return (
    <div>
      <ForceGraph2D
        graphData={data}
        nodeOpacity={1}
        linkDirectionalArrowLength={3.5}
        linkDirectionalArrowRelPos={1}
        ref={fgRef}
        onNodeHover={() => (a, b) => null}
        nodeCanvasObject={drawNode}
        nodeLabel={null}
      />
    </div>
  );
}
