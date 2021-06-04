import React, { useState, useEffect } from "react";
import { notification } from "antd";
import FormData from "../../utilities/form/FormData";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import ButtonData from "../../utilities/ButtonData/ButtonData";
const AdressForm = (props) => {
  const [state, setState] = useState({
    primaryAddress: "",
    secondaryAddress: "",
  });
  const { primaryAddress, secondaryAddress } = state;

  const prevRender = () => {
    props.history.push("/");
    console.log("click", props);
  };
  useEffect(() => {
    // fetch your data when the props.location changes
    console.log("Tab is blurred >>>>>>>>>>>111");
    //get items from localstorage.
    let retrievedObject = localStorage.getItem("Address");
    let updatedObj = JSON.parse(retrievedObject);
    console.log("updatedObj: ", updatedObj);

    setState(() => ({
      ...console.log(state, ">>"),
      // ...state,
      primaryAddress: updatedObj && updatedObj.primaryAddress,
      secondaryAddress: updatedObj && updatedObj.secondaryAddress,
    }));
  }, []);

  const nextRender = () => {
    if ((primaryAddress === null, secondaryAddress === null)) {
      notification.open({
        message: "Please read descriptions",
        description: "- Please Fill All Inputs",

        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    } else {
      props.history.push("/contact");
    }
    console.log(state, "state on button press");
    // set items in localstorage.
    localStorage.setItem("Address", JSON.stringify(state));

    //get items from localstorage.
    let retrievedObject = localStorage.getItem("Address");
    console.log("retrievedObject: ", JSON.parse(retrievedObject));
  };

  // input handler.
  const onChangeText = (key) => (val) => {
    return setState({ ...state, [key]: val });
  };
  return (
    <div style={{ display: "grid", justifyContent: "center", padding: "24px" }}>
      <h2>Address From</h2>
      <div>
        <FormData
          label={"Primary-Address:"}
          placeholder={"Primary-Address"}
          value={primaryAddress}
          change={onChangeText("primaryAddress")}
        />
        <FormData
          label={"Secondary-Address:"}
          placeholder={"Secondary-Address"}
          value={secondaryAddress}
          change={onChangeText("secondaryAddress")}
        />
      </div>
      <div style={{ marginTop: "12px" }}>
        <ButtonData
          value={"next"}
          submit={nextRender}
          icon={<ArrowRightOutlined />}
        />
        <ButtonData
          submit={prevRender}
          value={"previous"}
          icon={<ArrowLeftOutlined />}
        />
      </div>
    </div>
  );
};

export default AdressForm;
