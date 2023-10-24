import React, { useEffect, useState } from "react";

import { mockNodes, mockEdges } from "./mock.js";

import "./index.css";
import { getReactFlowCompatibleNodesAndEdges } from "./util.js";
import Graph from "./Graphh.js";

const LayoutFlow = () => {
  const [formattedNodes, setFormattedNodes] = useState();
  const [formattedEdges, setFormattedEdges] = useState();

  useEffect(() => {
    const generateCoordinates = async () => {
      const {
        edges: formattedEdges,
        nodes: formattedNodes
      } = await getReactFlowCompatibleNodesAndEdges({
        edges: mockEdges,
        nodes: mockNodes
      });

      setFormattedNodes(formattedNodes);
      setFormattedEdges(formattedEdges);
    };
    generateCoordinates();
  }, []);

  return (
    <div className="layoutflow">
      {formattedNodes && (
        <Graph
          formattedNodes={formattedNodes}
          formattedEdges={formattedEdges}
        />
      )}
    </div>
  );
};

export default LayoutFlow;
