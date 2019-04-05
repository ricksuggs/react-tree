import React, { useState } from "react";
import "./TreeNodeProp.css";
import TreeNode from "./TreeNode";

function ObjectTreeNodeProp({ prefix, propKey, data, level, levelPrefix }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="tree-node-prop object" key={propKey}>
      <div className="prefix">{prefix}</div>
      <div
        className={"expander " + (collapsed ? "collapsed" : "")}
        onClick={() => setCollapsed(!collapsed)}
      >
        ⏷
      </div>
      <div className="prop-key">{propKey}: </div>
      <div className="prop-value">{"{}"}</div>
      <TreeNode
        collapsed={collapsed}
        data={data[propKey]}
        level={level + 1}
        levelPrefix={levelPrefix}
      />
    </div>
  );
}

export default ObjectTreeNodeProp;
