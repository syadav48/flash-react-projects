// App.js
import React from "react";
import Tooltip from "./ToolTip";

function MouseMove() {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <Tooltip content="I'm on top!" position="top">
        <button>Hover me (Top)</button>
      </Tooltip>

      <br /><br />

      <Tooltip content="I'm below!" position="bottom">
        <button>Hover me (Bottom)</button>
      </Tooltip>

      <br /><br />

      <Tooltip content="I'm to the left!" position="left">
        <button>Hover me (Left)</button>
      </Tooltip>

      <br /><br />

      <Tooltip content="I'm to the right!" position="right">
        <button>Hover me (Right)</button>
      </Tooltip>
    </div>
  );
}

export default MouseMove;
