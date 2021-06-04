import React, { useState } from "react";
import { Select, Result } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import FormData from "../../utilities/form/FormData";
import ButtonData from "../../utilities/ButtonData/ButtonData";

const { Option } = Select;

const HobbyForm = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [state, setState] = useState({
    hobby: "",
  });
  const { hobby } = state;

  function handleChange(value) {
    console.log(`selected ${value}`);
    localStorage.setItem(value, "value");
  }

  const renderChange = () => {
    setIsSelected(!isSelected);
  };
  const submitFrom = () => {
    console.log(state, "state on button press");

    setShowScore(true);
  };

  let retrievedObject = localStorage.getItem("contact");
  let updatedObj = JSON.parse(retrievedObject);
  console.log("updatedObj: ", updatedObj.phoneNumber);

  let localdata = JSON.parse(retrievedObject);
  console.log(localdata, ">>");

  // [key] as a name, and val send as a value this is key value pair.
  const onChangeText = (key) => (val) => {
    return setState({ ...state, [key]: val });
  };

  return (
    <div style={{ display: "grid", justifyContent: "center", padding: "24px" }}>
      {showScore ? (
        // <h2>Forms Are Submitted</h2>
        <Result
          status="success"
          title="Successfully Form submitted!"
          subTitle="Forms Are Submitted"
        />
      ) : (
        <>
          <h2>Hobby Details</h2>
          <Select
            defaultValue="Please Select Your Hobby"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="Cricket">Cricket</Option>
            <Option value="Football">Football</Option>
            <Option value="Developing">Developing</Option>
            <Option value="Singing">Singing</Option>
            <Option value="dancing">dancing</Option>
          </Select>
          <div style={{ marginTop: "24px" }}>
            {!isSelected ? (
              <div onClick={renderChange} style={{ cursor: "pointer" }}>
                Or Others
              </div>
            ) : (
              <FormData
                placeholder={"Hobbies.."}
                value={hobby}
                change={onChangeText("hobby")}
              />
            )}
            <div style={{ marginTop: "24px" }}>
              <ButtonData value={"Done"} submit={submitFrom} icon={<CheckCircleOutlined />}/>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HobbyForm;
