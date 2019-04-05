import React from "react";
import "./TreeNode.css";
import DefaultTreeNodeProp from "./DefaultTreeNodeProp";
import ObjectTreeNodeProp from "./ObjectTreeNodeProp";

function TreeNode({ data, level = 0, levelPrefix = "", collapsed = true }) {
  function renderNormalTreeNodeProp(propKey, data, level, levelPrefix) {
    return renderTreeNodeProp(
      propKey,
      data,
      level,
      levelPrefix,
      level ? "├─ " : "",
      "│  "
    );
  }

  function renderLastChildTreeNodeProp(propKey, data, level, levelPrefix) {
    return renderTreeNodeProp(
      propKey,
      data,
      level,
      levelPrefix,
      level ? "└─ " : "",
      "   "
    );
  }

  function renderTreeNodeProp(
    propKey,
    data,
    level,
    levelPrefix,
    prefix,
    levelAppend
  ) {
    if (!data[propKey]) {
      return (
        <DefaultTreeNodeProp
          key={propKey}
          prefix={levelPrefix + prefix}
          propValue="null"
          valueClass="null"
          propKey={propKey}
        />
      );
    } else if (data[propKey] === data) {
      return (
        <DefaultTreeNodeProp
          key={propKey}
          prefix={levelPrefix + prefix}
          propValue="(RECURSION)"
          valueClass="recursion"
          propKey={propKey}
        />
      );
    } else if (typeof data[propKey] === "object") {
      return (
        <ObjectTreeNodeProp
          key={propKey}
          prefix={levelPrefix + prefix}
          propKey={propKey}
          data={data}
          level={level}
          levelPrefix={level === 0 ? "" : levelPrefix + levelAppend}
        />
      );
    } else {
      const valueClass = typeof data[propKey];
      const propValue = data[propKey].toString().split("\n")[0];
      return (
        <DefaultTreeNodeProp
          key={propKey}
          prefix={levelPrefix + prefix}
          propValue={propValue}
          valueClass={valueClass}
          propKey={propKey}
        />
      );
    }
  }

  let treeNodeProps = [];
  let sortedPropKeys = Object.keys(data).sort();
  if (sortedPropKeys.length) {
    for (let i = 0; i < sortedPropKeys.length - 1; i++) {
      treeNodeProps.push(
        renderNormalTreeNodeProp(sortedPropKeys[i], data, level, levelPrefix)
      );
    }
    treeNodeProps.push(
      renderLastChildTreeNodeProp(
        sortedPropKeys[sortedPropKeys.length - 1],
        data,
        level,
        levelPrefix
      )
    );
  }
  return <div className={collapsed ? "collapsed" : ""}>{treeNodeProps}</div>;
}

export default TreeNode;
