import { EditOutlined, FolderAddOutlined, SaveOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToNodeStack, setEdgeStack, setNodeStack } from '../redux/nodeSlice';

const Toolbar = ({toggleAddModal,setToggleAddModal,savedNodes,savedEdges}) => {
    const dispatch = useDispatch();
    const handleActionClick = (para) =>{
        if(para === 'add'){
            setToggleAddModal(!toggleAddModal)
        }
        else if(para === 'save'){
            dispatch(setNodeStack(savedNodes))
            dispatch(setEdgeStack(savedEdges))
        }

    }
    return (
        <div className="toolbar">
            <Button onClick={()=>handleActionClick('save')}>
            <SaveOutlined />Save</Button>
            <Button onClick={()=>handleActionClick('add')}>
            <FolderAddOutlined />Add</Button>
            <Button>
            <EditOutlined />Edit</Button>
        </div>
    );
}

export default Toolbar;
