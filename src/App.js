import logo from './logo.svg';
import './App.css';
import Toolbar from './component/Toolbar';
import NodeFlow from './component/NodeFlow';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import QuickCreateModal from './component/QuickCreateModal';
import CustomNodeFlow from './component/NodeFlow';
import LayoutComp from './component/Layout';
import Header from './component/Header';
import WorkflowComp from './component/WorkflowComp';

function App() {
  const [toggleAddModal,setToggleAddModal] = useState(false);
  const [toggleDropdown,setToggleDropdown] = useState(true);
  const [templateStack,setTemplateStack] = useState([])
  const [selectedNode,setSelectedNode] = useState([]);
  console.log(selectedNode,'selectedNode');
  
  return (
    <div>
      {/* <LayoutComp> */}
      <Header/>
      <Toolbar {...{toggleAddModal,setToggleAddModal}}/>
    {(templateStack?.length !== 0) &&  <WorkflowComp
      {
        ...{
          toggleDropdown,
          setToggleDropdown,
          templateStack,
          // setNodeStack,
          // setShowNodeFlow,
          setSelectedNode,
          selectedNode,
        }
      }
      />}
    { Object.keys(selectedNode)?.length   && <CustomNodeFlow key={selectedNode?.length} {...{selectedNode}}/>}
      {toggleAddModal 
      &&
      (
      <QuickCreateModal{...{toggleAddModal,setToggleAddModal,templateStack,setTemplateStack}}/>
      )
      }
      {/* </LayoutComp> */}
     
  
    </div>
  );
}

export default App;
