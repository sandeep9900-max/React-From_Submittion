import React, { useState } from "react";
import { Form, Input, Button } from "antd";
const FormComponent = (props) => {
  const [internalVal, setInternalVal] = useState("");

  const { placeholder, render, label, change,typeData,value} = props;
  let textInput = React.createRef();

  const myChangeHandler = (event) => {
    setInternalVal(event.target.value);
    console.log(internalVal, "internalVal");
  };

  return (
    <div>
      <form onSubmit={render}>
        <label>{label}</label>
        <Input 
        placeholder={placeholder} 
        type={typeData}
         onChange={(e)=>change(e.target.value)
        } 
        value={value}
        />
      </form>
    </div>
  );
};

export default FormComponent;
