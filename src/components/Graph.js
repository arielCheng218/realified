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
import { initialData } from "../data/initialdata.js";
import { db } from "../firebase-config.js";
import ForceGraph2D from "react-force-graph-2d";

export default function Graph() {
  // state variables
  const [data, setData] = useState({ nodes: [], links: [] });
  const [fetched, setFetched] = useState(false);

  const fgRef = useRef();

  useEffect(() => {
    const tempData = {
      nodes: null,
      links: null,
    };
    // Initial read
    const queryNodes = getCollectionDocs("nodes").then((q) => {
      tempData.nodes = q;
      const queryLinks = getCollectionDocs("links").then((q) => {
        tempData.links = q;
        console.log(tempData);
        setData(tempData);
        setLinkDistance(fgRef);
      });
    });
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
    const querySnapshot = await getDocs(q).then(setFetched(true));
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
        linkWidth={2}
        ref={fgRef}
        nodeCanvasObject={drawNode}
        nodeLabel={null}
      />
    </div>
  );
}
