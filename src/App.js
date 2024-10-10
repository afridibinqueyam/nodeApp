import './App.css';
import Toolbar from './component/Toolbar';
import { useState } from 'react';
import QuickCreateModal from './component/QuickCreateModal';
import CustomNodeFlow from './component/NodeFlow';
import Header from './component/Header';
import WorkflowComp from './component/WorkflowComp';
import { useSelector } from 'react-redux';


function App() {
  const nodeStack = useSelector((state) => state.nodeStack.nodeStack);
  const edgeStack = useSelector((state) => state.nodeStack.edgeStack);
  const [toggleAddModal,setToggleAddModal] = useState(false);
  const [toggleDropdown,setToggleDropdown] = useState(true);
  const [templateStack,setTemplateStack] = useState([])
  const [selectedNode,setSelectedNode] = useState( nodeStack?.length ? nodeStack : []);
  const [savedNodes,setSavednodes] = useState([])
  const [nodeEdges,setNodeEdges] = useState(edgeStack?.length ? edgeStack : [])
  const [savedEdges,setSavedEdges] = useState();
  console.log(savedNodes,'savedNodes',nodeStack,nodeStack,savedEdges);
  
  return (
    <div>
      <Header/>
      <Toolbar {...{toggleAddModal,setToggleAddModal,savedNodes,savedEdges}}/>
    {(templateStack?.length !== 0) &&  <WorkflowComp
      {
        ...{
          toggleDropdown,
          setToggleDropdown,
          templateStack,
          setSelectedNode,
          selectedNode,
        }
      }
      />}
    { Object.keys(selectedNode)?.length   && <CustomNodeFlow key={selectedNode?.length} {...{selectedNode,setSavednodes,nodeEdges,setSavedEdges}}/>}
      {toggleAddModal 
      &&
      (
      <QuickCreateModal{...{toggleAddModal,setToggleAddModal,templateStack,setTemplateStack}}/>
      )
      }     
  
    </div>
  );
}

export default App;
