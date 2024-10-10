import { Button, Form, Input, Modal, Select, Upload } from 'antd';
import React from 'react';

const QuickCreateModal = ({ toggleAddModal, setToggleAddModal, templateStack, setTemplateStack }) => {
  const [form] = Form.useForm();
  const handleFormSubmit = (value) => {
    setTemplateStack((prevStack) => [...prevStack, value?.name]);
    setToggleAddModal((prev) => !prev);

  }

  return (
    <div>
      <Modal
        open={toggleAddModal}
        title="Quick Create"
        onCancel={() => setToggleAddModal(!toggleAddModal)}
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
            // options={[
            //   {
            //     value: 'Default - Workflow Template',
            //     label: 'Default - Workflow Template',
            //   },
            // ]}
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
              // style={{ margin: '10px', width: '100%' }}
              style={{width: "100%",
                border: "2px solid black"}}
              className='grid-container'
              layout='horizontal'
              form={form}
            >
              <div className='d-flex bg-grey'>
                <div className='w-50'>
                <Form.Item
                className="item1"
                
              >
                <Upload
                  style={{ width:"100%"}}
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                >
                  Upload Photo
                </Upload>
              </Form.Item>
                </div>
                <div> 
                
              <Form.Item label="Name"
                required
                className="item2"
                                name="name"
              >
                <Input  />
              </Form.Item>
              <Form.Item 
              className="item3"
              label="WorkFlow ..">
                <Input  />
              </Form.Item>
              <Form.Item
              className="item4"
               label="Owner">
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
              <Form.Item label="Description"
                className="item2"
                                name="name"
              >
                <Input  />
              </Form.Item>
             </div>
              </div>
              <div className='d-flex'>
              <Form.Item
              className="item5"
               label="Lifecycle" name="lifecycle">
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
              <Form.Item className="item6" label="Estimated" name="estimated">
                <Input />
              </Form.Item>
              </div>
             <div className='d-flex'>
             <Form.Item className="item7" label="Comments">
                <Input placeholder="..." />
              </Form.Item>
              <Form.Item className="item8" label="Tags" name="layout">
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
             </div>
             
              
              <div className='d-flex btn-form'>
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
