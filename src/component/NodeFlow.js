import React, { useState, useEffect, useCallback, memo } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';


import '../index.css';

const initBgColor = '#1A192B';

const connectionLineStyle = { stroke: 'black' };
const snapGrid = [20, 20];
const nodeTypes = {
//   selectorNode: ColorSelectorNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow = ({selectedNode}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(selectedNode);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  

  useEffect(() => {
    // const onChange = (event) => {
    //   setNodes((nds) =>
    //     nds.map((node) => {
    //       if (node.id !== '2') {
    //         return node;
    //       }

    //       const color = event.target.value;

    //       setBgColor(color);

    //       return {
    //         ...node,
    //         data: {
    //           ...node.data,
    //           color,
    //         },
    //       };
    //     }),
    //   );
    // };

    // setNodes([
    //   {
    //     id: '1',
    //     type: 'input',
    //     data: { label: 'An input node' },
    //     position: { x: 0, y: 50 },
    //     sourcePosition: 'right',
    //   },
    //   {
    //     id: '2',
    //     type: 'selectorNode',
    //     data: { onChange: onChange, color: initBgColor },
    //     style: { border: '1px solid #777', padding: 10 },
    //     position: { x: 300, y: 50 },
    //   },
    //   {
    //     id: '3',
    //     type: 'selectorNode',
    //     data: { label: 'Output A' },
    //     position: { x: 650, y: 25 },
    //     targetPosition: 'left',
    //   },
    //   {
    //     id: '4',
    //     type: 'output',
    //     data: { label: 'Output B' },
    //     position: { x: 650, y: 100 },
    //     targetPosition: 'left',
    //   },
    // ]);
// setNodes([selectedNode])
// setNodes((prevStack) => [...prevStack, selectedNode])
// if (nodes?.length > 0) {
//   setTimeout(() =>{
//     setNodes((prevStack) => [...prevStack, selectedNode]); // Spread the previous stack and add the new node

//   },1000)
// } else {
//   setNodes([selectedNode]); // Initialize with the new node if the stack is empty
// }
    // setEdges([
    //   {
    //     id: 'e1-2',
    //     source: '1',
    //     target: '3',
    //     animated: false,
    //     type: 'step',
    //     style: { stroke: 'black' },
    //   },
    //   {
    //     id: 'e2a-3',
    //     source: '2',
    //     target: '3',
    //     sourceHandle: 'a',
    //     animated: false,
    //     type: 'step',
    //     style: { stroke: 'black' },
    //   },
    //   {
    //     id: 'e2b-4',
    //     source: '2',
    //     target: '4',
    //     sourceHandle: 'b',
    //     animated: false,
    //     type: 'step',
    //     style: { stroke: 'black' },
    //   },
    // ]);
    // const updateNodesAndEdges = () => {
    //   if (!selectedNode || nodes.some(node => node.id === selectedNode.id)) {
    //     return;
    //   }
    
    //   setNodes((prevStack) => [...prevStack, selectedNode]);
  
    //   setEdges([
    //     {
    //       id: 'e1-2',
    //       source: '1',
    //       target: '3',
    //       animated: false,
    //       type: 'step',
    //       style: { stroke: 'black' },
    //     },
    //     // ...other edges
    //   ]);
    // };
  
    // updateNodesAndEdges();
  }, []);
console.log(nodes,'nodes');

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, type: 'step', style: { stroke: 'black' } }, eds),
      ),
    [],
  );
  const getNodes = ()=>{
    return([
        {
          id: '1',
          type: 'input',
          data: { label: 'An input node' },
          position: { x: 0, y: 50 },
          sourcePosition: 'right',
        },
        {
          id: '2',
          type: 'selectorNode',
          // data: { onChange: onChange, color: initBgColor },
          style: { border: '1px solid #777', padding: 10 },
          position: { x: 300, y: 50 },
        },
        {
          id: '3',
          type: 'selectorNode',
          data: { label: 'Output A' },
          position: { x: 650, y: 25 },
          targetPosition: 'left',
        },
        {
          id: '4',
          type: 'output',
          data: { label: 'Output B' },
          position: { x: 650, y: 100 },
          targetPosition: 'left',
        },
      ]
      );
  }
  return (
   <div style={{ height: 600, width: '100%', position: 'relative' }}>
    <div className="grid" />
     <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
    //   defaultViewport={defaultViewport}
      fitView
      attributionPosition="bottom-left"
    >
      <Controls />
    </ReactFlow>
   </div>
  );
};

export default memo(CustomNodeFlow);