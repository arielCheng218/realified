import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Panel from "./components/Panel";
import Search from "./components/Search";
import Graph from "./components/Graph";

// TODO:
// Search
// Filter
// CRUD
// Make drag areas bigger

function App() {
  const panelRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  return (
    <div className="App">
      <Panel
        node={selectedNode}
        setSelectedNode={setSelectedNode}
        ref={panelRef}
      />
      <Graph
        height={panelRef.current?.clientHeight}
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />
    </div>
  );
}

export default App;
