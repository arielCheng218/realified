import React from "react";
import { BsX } from "react-icons/bs";

export default function Panel({ node, setSelectedNode }) {
  if (node == null) {
    return <div></div>;
  }

  const handleClose = () => {
    setSelectedNode(null);
  };

  return (
    <div
      id="panel"
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        margin: "0",
        display: "inline-block",
        paddingBottom: "40px",
      }}
    >
      <BsX fontSize={30} style={{ paddingTop: "20px" }} onClick={handleClose} />
      <h1>{node.name}</h1>
      {node.desc}
    </div>
  );
}
