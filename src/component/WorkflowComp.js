import { BranchesOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Dropdown, Select } from 'antd';
import React, { useState } from 'react';

const WorkflowComp = ({toggleDropdown,setToggleDropdown,templateStack, setNodeStack,
  setShowNodeFlow,setSelectedNode,selectedNode}) => {
  const [selectedNodeId,setSelectedNodeId] = useState('')
  const generatedNumbers = new Set();

function getRandomUniqueInt(min, max) {
    if (generatedNumbers.size >= (max - min + 1)) {
        throw new Error("No more unique integers can be generated in this range.");
    }

    let randomInt;
    do {
        randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (generatedNumbers.has(randomInt));

    generatedNumbers.add(randomInt);
    return randomInt;
}

    const onClick = ({ key }) => {
      };
      const handleAddButton = ()=>{
        if(selectedNodeId?.length){
          const requiredObj = templateStack.filter((template) => template === selectedNodeId)
          const newNode = {
            id: `${getRandomUniqueInt(1, 1000)}`,
            type: 'selectorNode',
            data: { label: requiredObj[0] },
            position: {
              x: getRandomUniqueInt(50, 500), 
              y: getRandomUniqueInt(50, 500), 
            },
            sourcePosition: 'right',
            measured: {
              width: 150,
              height: 38,
            },
          };
          setSelectedNode((prev) => [...prev,newNode]);
          // setToggleDropdown((prev) => !prev)
        }
          
      }
      const handleNodeChange = (value)=>{
        setSelectedNodeId(value)
        console.log(value,'value');
        

      }
    const items = [
        {
          key: '1',
          label: (
            <div className='vertical-container'>
                <span>          
                    Select Node Template
                </span>
                <div className='d-flex'>
                <Select
          placeholder="Select Node Template"
          className='ml-2'
          onChange={handleNodeChange}
      >
        {templateStack?.map((template) =>(
          <Select.Option value={template}>
            {template}
        </Select.Option>
        ))}
        
      </Select>
      <Button onClick={handleAddButton}>
      <PlusOutlined />
      </Button>
                </div>
          
          </div>
          ),
          
        },
        {
          key: '2',
          label: (
            <div className='vertical-container'>
            <span>           
            Create Node Template

            </span>
            <div className='d-flex'>
            <Select
      className='ml-2'
      placeholder="Create Node Template"

  >
    <Select.Option>
    Workflow Template
    </Select.Option>
  </Select>
  <Button>
  <PlusOutlined />
  </Button>
            </div>
      
      </div>
          ),
        },
      ];
    return (
        <div
        onMouseEnter={()=>setToggleDropdown(true)} 
        onMouseLeave={() => setToggleDropdown(false)}
        >
             <Dropdown
             className='dropdown'
             placement="bottom"
             open={toggleDropdown}
   menu={{
    items,
    onClick,
  }}
  >
    <a onClick={(e) => e.preventDefault()}>
      {/* <Space>
        Hover me
        <DownOutlined />
      </Space> */}
                  <BranchesOutlined />
      TestName
    </a>
  </Dropdown>
     </div>
    );
}

export default WorkflowComp;
