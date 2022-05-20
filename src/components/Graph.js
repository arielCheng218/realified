import React, { useState, useEffect, useRef } from "react";
import { v4 as uuid, v4 } from "uuid";
import {
  collection,
  setDoc,
  onSnapshot,
  query,
  doc,
  getDocs,
} from "firebase/firestore";
import {
  nodeBgColor,
  nodeTextColor,
  selectedNodeBgColor,
  selectedNodeTextColor,
  canvasBgColor,
  nodeGradientColor,
} from "../utils/COLORS";
import { initialData } from "../data/initialdata.js";
import { db } from "../firebase-config.js";
import ForceGraph2D from "react-force-graph-2d";

export default function Graph({ height, selectedNode, setSelectedNode }) {
  // state variables
  const [data, setData] = useState({ nodes: [], links: [] });

  const fgRef = useRef();

  useEffect(() => {
    // Initial read
    readData();
    // Graph config
    setLinkDistance(fgRef);
  }, []);

  const writeInitialData = () => {
    for (var i = 0; i < initialData.nodes.length; i++) {
      const data = (({ name, desc, tags }) => ({ name, desc, tags }))(
        initialData.nodes[i]
      );
      writeDoc("nodes", data, initialData.nodes[i]["id"]);
    }
    // write links data
    for (var i = 0; i < initialData.links.length; i++) {
      const data = {
        source: initialData.links[i].source.id,
        target: initialData.links[i].target.id,
      };
      writeDoc("links", data, v4());
    }
  };

  const readData = () => {
    const queryNodes = getCollectionDocs("nodes").then((nodes) => {
      const queryLinks = getCollectionDocs("links").then((links) => {
        const tempData = {
          nodes: nodes,
          links: links,
        };
        setData(tempData);
      });
    });
  };

  const writeDoc = async (c, data, id) => {
    try {
      const docRef = await setDoc(doc(db, c, id), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getCollectionDocs = async (c) => {
    const q = query(collection(db, c));
    const querySnapshot = await getDocs(q);
    var queryData = [];
    querySnapshot.forEach((doc) => {
      queryData.push({ ...doc.data(), id: doc.id });
    });
    return queryData;
  };

  const setLinkDistance = (fgRef) => {
    const fg = fgRef.current;
    fg.d3Force("link").distance((link) => {
      return 85;
    });
  };

  const drawNode = (node, ctx, globalScale) => {
    // draw circle
    ctx.beginPath();
    ctx.arc(node.x, node.y, 25, 0, 2 * Math.PI);
    ctx.stroke();
    if (node === selectedNode) {
      ctx.fillStyle = selectedNodeBgColor;
    } else {
      ctx.fillStyle = nodeBgColor;
      ctx.fill();
      // gradient
      var g = ctx.createRadialGradient(
        node.x,
        node.y,
        5,
        node.x + 4,
        node.y + 4,
        20
      );
      g.addColorStop(0, nodeGradientColor);
      g.addColorStop(1, canvasBgColor);
      ctx.fillStyle = g;
      ctx.fill();
    }
    ctx.fill();

    // text
    if (node === selectedNode) {
      ctx.fillStyle = selectedNodeTextColor;
    } else {
      ctx.fillStyle = nodeTextColor;
    }
    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.font = "6px Consolas";
    ctx.fillText(node.name, node.x, node.y);
    ctx.fill();
  };

  return (
    <div>
      <ForceGraph2D
        graphData={data}
        height={height}
        linkWidth={2}
        onNodeClick={(node) => setSelectedNode(node)}
        backgroundColor={canvasBgColor}
        ref={fgRef}
        nodeCanvasObject={drawNode}
        nodeLabel={null}
      />
    </div>
  );
}
