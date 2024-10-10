import { Button, Form, Input, Modal, Select, Upload } from 'antd';
import React from 'react';

const QuickCreateModal = ({toggleAddModal,setToggleAddModal,templateStack,setTemplateStack}) => {
    const [form] = Form.useForm();
    // const initialNode = {
    //   id: '1',
    //   type: 'input',
    //   data: { label: 'An input node' },
    //   position: { x: 0, y: 50 },
    //   sourcePosition: 'right',
    // };
    const handleFormSubmit = (value)=>{
      setTemplateStack((prevStack) => [...prevStack, value?.name]);

      // const node = { ...initialNode, data: { label: value.name } };

      // const newNode = {
      //   id: `${nodeStack.length + 1}`, // Generate a unique ID based on the current length
      //   type: 'input',
      //   data: { label: value.name },
      //   position: {
      //     x: 0, // Adjust the x position as needed
      //     y: nodeStack.length * 100, // Increment y position based on the index
      //   },
      //   sourcePosition: 'right',
      //   measured: {
      //     width: 150,
      //     height: 38,
      //   },
      // };

      // Use setNodeStack to update the state correctly
      // if (templateStack?.length > 0) {
      // } else {
      //   setTemplateStack([value.name]); 
      // }
    
      setToggleAddModal((prev) => !prev);

    }

    return (
        <div>
              <Modal
        open={toggleAddModal}
        title="Quick Create"
        // onOk={handleCreateButton}
        onCancel={() => setToggleAddModal(!toggleAddModal)}
        // cancelText="Cancel"
        // okText='Create'
        footer={null}
      >
        <div className='d-flex  container-1 space-between'>
          <div className=''>
            Type
          <Select
          className='ml-2'
      defaultValue="Workflow Template"
      options={[
        {
          value: 'Workflow Template',
          label: 'Workflow Template',
        },
      ]}
      />
          </div>
       <div className='ml-2'>
        Form
       <Select
      defaultValue="Workflow Template"
      options={[
        {
          value: 'Default - Workflow Template',
          label: 'Default - Workflow Template',
        },
      ]}
    />
       </div>
     
        </div>
        <div>
            <div>
          
            </div>
            <div>
            <Form
             colon={false}
            onFinish={handleFormSubmit}
            style={{margin:'10px',width:'100%'}}
            className='d-fle'
      layout='horizontal'
      form={form}
    >
      <Form.Item
                  style={{width:'50%'}}
      >
      <Upload
       style={{background:'red'}}
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
      >
        Upload Photo
        </Upload>
      </Form.Item>
       <Form.Item label="Name"   
       required    
      //  style={{width:'40%'}}
      name="name"
       >
        <Input placeholder="Node name" />
      </Form.Item>
      <Form.Item label="WorkFlow template">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Owner">
      <Select
      defaultValue="test"
      options={[
        {
          value: 'test',
          label: 'test',
        },
      ]}
      />
      </Form.Item>
      <Form.Item label="Lifecycle" name="lifecycle">
      <Select
      defaultValue="Workflow template"
      options={[
        {
          value: 'Workflow template',
          label: 'Workflow template',
        },
      ]}
      />
      </Form.Item>
      <Form.Item label="Estimated" name="estimated">
      <Input placeholder="..." />
      </Form.Item>
      <Form.Item label="Comments">
        <Input placeholder="..." />
      </Form.Item>
      <Form.Item label="Tags" name="layout">
      <Select
      defaultValue="Select"
      options={[
        {
          value: 'Select',
          label: 'Select',
        },
      ]}
      />
      </Form.Item>
      <div>
      <Button>Cancel</Button>
      <Button htmlType='submit'>Create</Button>
      </div>
    </Form>
            </div>
            

        </div>
      </Modal>
        </div>
    );
}

export default QuickCreateModal;
