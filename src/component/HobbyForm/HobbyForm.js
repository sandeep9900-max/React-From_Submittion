import React, { useState } from "react";
import { Result, Menu, Dropdown } from "antd";
import { CheckCircleOutlined, DownOutlined } from "@ant-design/icons";
import FormData from "../../utilities/form/FormData";
import ButtonData from "../../utilities/ButtonData/ButtonData";

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

  const menu = (
    <Menu>
      <Menu.Item>Developing</Menu.Item>
      <Menu.Item>Cricket</Menu.Item>
      <Menu.Item>Football</Menu.Item>
      <Menu.Item>Gaming</Menu.Item>

      <Menu.Item>
        {!isSelected ? <a onClick={renderChange}>Others</a> : null}
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        padding: "24px",
        alignItems: "center",
        height: "321px",
        border: "3px solid darkgrey",
        boxShadow: "10px 5px 5px darkgrey",
        marginLeft: "36%",
        marginTop: "100px",
        borderRadius: "28px",
        width: "26%",
        fontFamily: "cursive",
      }}
    >
      {showScore ? (
        // <h2>Forms Are Submitted</h2>
        <Result
          status="success"
          title="Successfully Form submitted!"
          subTitle="Forms Are Submitted"
        />
      ) : (
        <>
          <h2 style={{textDecoration: "underline"}}>Hobby Details</h2>

          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Hover me <DownOutlined />
            </a>
          </Dropdown>

          <div style={{ marginTop: "24px" }}>
            {!isSelected ? (
              <div onClick={renderChange} style={{ cursor: "pointer" }}>
              </div>
            ) : (
              <FormData
                placeholder={"Hobbies.."}
                value={hobby}
                change={onChangeText("hobby")}
              />
            )}
            <div style={{ marginTop: "24px" }}>
              <ButtonData
                value={"Done"}
                submit={submitFrom}
                icon={<CheckCircleOutlined />}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HobbyForm;
