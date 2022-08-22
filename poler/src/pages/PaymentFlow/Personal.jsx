// import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";

const Personal = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optonal");
  const { Option } = Select;
  const handleChange = () => {
    console.log(`selected ${value}`);
  };
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item label="Name">
          <Input placeholder="Opara Linus Ahmed" />
        </Form.Item>
        <Form.Item label="Email Address" required>
          <span className="form__label">
            The purchase reciept would be sent to this address
          </span>
          <Input placeholder="linusahmed@devmail.com" />
        </Form.Item>
        <Form.Item label="Address 1">
          <Input placeholder="Home Address 1" />
        </Form.Item>
        <Form.Item label="Address 2">
          <Input placeholder="Home Address 2" />
        </Form.Item>
        <div className="form__row">
          <Form.Item label="Local Government">
            <Input placeholder="ex. Surulere" />
          </Form.Item>
          <div className="flex-col">
            <strong>State</strong>
            <Select
            defaultValue="Lagos"
            onChange={handleChange}
          >
            <Option value="Lagos">Lagos</Option>
            <Option value="Abuja">Abuja</Option>
            <Option value="Ogun">Ogun</Option>
          </Select>
          </div>
        </div>
        <div className="button__row">
        <Button type="primary">Next</Button>
          
          <Button>Cancel Payment</Button>
        </div>
      </Form>
    </div>
  );
};

export default Personal;
