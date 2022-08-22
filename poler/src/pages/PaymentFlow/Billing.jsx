import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
const Billing = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optonal");
  const { Option } = Select;
  const handleChange = () => {
    console.log(`selected ${value}`);
  };
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const cardNum = (val) => {
    let value = val.target.value
    let newValue = value.split(" ").join("");
    var format = newValue.split("").map((data, index) => {
      if (((index + 1) % 4 == 0) && data.length <=16) {
        data = data + " ";
      }

      return data;
    });

    format = format.join("");
    console.log( format);
    return format
  };

  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item label="Name on Card" required>
          <Input placeholder="Opara Linus Ahmed" />
        </Form.Item>
        <Form.Item label="Card Type" required>
          <Select defaultValue="Visa" onChange={handleChange}>
            <Option value="Lagos">Visa</Option>
            <Option value="Abuja">MasterCard</Option>
            <Option value="Ogun">Verve</Option>
          </Select>
        </Form.Item>

        <div className="form__row__2">
          <Form.Item label="Card Number" onChange={cardNum} required>
            <Input placeholder="4234 5675 3245 6432" />
          </Form.Item>
          <Form.Item label="Expiry Date" required>
            <Input placeholder="03/24" />
          </Form.Item>

          <Form.Item label="CVV" required>
            <Input placeholder="123" />
          </Form.Item>
        </div>
        <div className="button__row">
          <Button type="primary">Next</Button>

          <Button>Cancel Payment</Button>
        </div>
      </Form>
    </div>
  );
};

export default Billing;
