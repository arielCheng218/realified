import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Graph from "./components/Graph";
import Panel from "./components/Panel";

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
        setSelectedNode={setSelectedNode}
      />
    </div>
  );
}

export default App;
