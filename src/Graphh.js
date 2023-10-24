import React from "react";
import ReactFlow, {
  ConnectionLineType,
  useNodesState,
  useEdgesState
} from "reactflow";
import "reactflow/dist/style.css";
import "./index.css";

const Graph = ({ formattedEdges, formattedNodes }) => {
  const [nodes] = useNodesState(formattedNodes);
  const [edges] = useEdgesState(formattedEdges);

  return (
    <div className="layoutflow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      />
      <div className="controls">
        {/* <button onClick={() => onLayout("TB")}>vertical layout</button>
        <button onClick={() => onLayout("LR")}>horizontal layout</button> */}
      </div>
    </div>
  );
};

export default Graph;
