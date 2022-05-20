import React from "react";
import { BsX } from "react-icons/bs";
import { panelBgColor, panelTextColor } from "../utils/COLORS.js";

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
        backgroundColor: panelBgColor,
        color: panelTextColor,
        margin: "0",
        display: "inline-block",
        fontFamily: "Avenir",
        paddingBottom: "2%",
        height: "100%",
      }}
    >
      <BsX fontSize={30} style={{ paddingTop: "20px" }} onClick={handleClose} />
      <h1>{node.name}</h1>
      {node.desc}
    </div>
  );
}
