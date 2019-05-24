import React from "react";
import "./TreeNodeProp.css";

function DefaultTreeNodeProp({ prefix, propValue, valueClass, propKey }) {
  return (
    <div className="tree-node-prop default" key={propKey}>
      <div className="prefix">{prefix}</div>
      <div className="spacer"> </div>
      <div className="prop-key">{propKey}: </div>
      <div className={"prop-value " + valueClass}>{propValue}</div>
    </div>
  );
}

export default DefaultTreeNodeProp;
