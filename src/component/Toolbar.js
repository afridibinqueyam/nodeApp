import { EditOutlined, FolderAddOutlined, SaveOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const Toolbar = ({toggleAddModal,setToggleAddModal}) => {
    const handleActionClick = (para) =>{
        if(para === 'add'){
            setToggleAddModal(!toggleAddModal)
        }
    }
    return (
        <div className="toolbar">
            <Button>
            <SaveOutlined />Save</Button>
            <Button onClick={()=>handleActionClick('add')}>
            <FolderAddOutlined />Add</Button>
            <Button>
            <EditOutlined />Edit</Button>
        </div>
    );
}

export default Toolbar;
