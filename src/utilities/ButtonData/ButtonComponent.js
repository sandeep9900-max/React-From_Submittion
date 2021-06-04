import React, {useState} from "react";
import { Form, Input, Button } from "antd";

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const ButtonComponent = (props) => {

  const { value, submit, icon  } = props;
  return (
    <div>
      <Form.Item >
        <Button type="primary" htmlType="submit" onClick={submit} style={{
          borderRadius: '11px',
          width: '100px',
          height: '43px'
        }} >
          {value}
          {icon}
        </Button>
      </Form.Item>
    </div>
  );
};

export default ButtonComponent;
