import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";
cytoscape.use(dagre);

const renovateNodesWithReactFlowEssentials = ({ coordinateMap, nodes }) => {
  return Object.values(nodes).map((node) => {
    const { id, name, x: _x, y: _y, ...restNodeProps } = node;
    const { x, y } = coordinateMap[id];

    return {
      ...restNodeProps,
      data: {
        label: name
      },
      id,
      position: {
        x,
        y
      }
    };
  });
};

const renovateEdgesWithReactFlowEssentials = ({ edges }) => {
  return Object.values(edges).map((edge, index) => {
    return {
      ...edge,
      id: `edge${index}`,
      markerEnd: { type: "arrowclosed" },
      source: edge?.pItem?.start?.id,
      target: edge?.pItem?.end?.id
    };
  });
};

const generateCoordinates = ({ edges, nodes }) => {
  const container = document.createElement("div");
  container.id = "cy";
  document.body.appendChild(container);
  const cy = cytoscape({
    container: container,
    style: [
      {
        selector: "#cy",
        style: {
          width: "800px",
          height: "600px"
        }
      }
    ]
  });
  const data = [];

  Object.values(nodes).forEach(({ id }) => {
    data.push({ data: { id } });
  });
  Object.values(edges).forEach((edge, index) => {
    const source = edge?.pItem?.start?.id;
    const target = edge?.pItem?.end?.id;
    data.push({
      data: {
        id: `edge${index}`,
        source,
        target
      }
    });
  });

  cy.add(data);

  cy.layout({
    name: "dagre",
    rankSep: 90, //50
    // edgeSep: 155 //10
    nodeSep: 150
  }).run();

  const nodeCoordinates = cy.nodes().map((node) => {
    return {
      id: node.id(),
      x: node.position("x"),
      y: node.position("y")
    };
  });

  console.log("--nodeCoordinates: ", nodeCoordinates);
  const coordinateMap = nodeCoordinates.reduce((acc, { id, x, y }) => {
    acc[id] = { x, y };
    return acc;
  }, {});
  return coordinateMap;
};

export const getReactFlowCompatibleNodesAndEdges = async ({ edges, nodes }) => {
  const coordinateMap = generateCoordinates({ edges, nodes });

  return {
    edges: renovateEdgesWithReactFlowEssentials({ edges }),
    nodes: renovateNodesWithReactFlowEssentials({ nodes, coordinateMap })
  };
};
