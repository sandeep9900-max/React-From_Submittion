import React, { useState, useEffect } from "react";
import { notification } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import FormData from "../../utilities/form/FormData";
import ButtonData from "../../utilities/ButtonData/ButtonData";

const ContactForm = (props) => {
  const [state, setState] = useState({
    phoneNumber: "",
    email: "",
  });
  const { phoneNumber, email } = state;
  const [emailError, setEmailError] = useState('')
  const prevRender = () => {
    props.history.push("/address");
  };

  useEffect(() => {
    // fetch your data when the props.location changes
    console.log("Tab is blurred >>>>>>>>>>>111");
    //get items from localstorage.
    let retrievedObject = localStorage.getItem("contact");
    let updatedObj = JSON.parse(retrievedObject);
    console.log("updatedObj: ", updatedObj);

    setState(() => ({
      ...console.log(state, ">>"),
      // ...state,
      phoneNumber: updatedObj && updatedObj.phoneNumber,
      email: updatedObj && updatedObj.email,
    }));
  }, []);

  const nextRender = () => {
    if ((phoneNumber === null, email === null)) {
      notification.open({
        message: "Please read descriptions",
        description: "- Please Fill All Inputs - please fill the valid email",

        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    } else {
      props.history.push("/hobby");
    }

    console.log(state, "state on button press");
    // props.history.push("/hobby");

    // set items in localstorage.
    localStorage.setItem("contact", JSON.stringify(state));

    //get items from localstorage.
    let retrievedObject = localStorage.getItem("contact");

    console.log(retrievedObject, "retrievedObject");
    console.log("retrievedObject: ", JSON.parse(retrievedObject));

    console.log("next");
  };

  // input handler.
  const onChangeText = (key) => (val) => {
    return setState({ ...state, [key]: val });
  };
  return (
    <div style={{ display: "grid", justifyContent: "center", padding: "24px" }}>
        <h2>
            Contact From
            </h2>
      <div>
        <FormData
          label={"Phone_no:"}
          placeholder={"Phone_no"}
          value={phoneNumber}
          change={onChangeText("phoneNumber")}
        />
        <FormData
          label={"Email:"}
          placeholder={"Email"}
          value={email}
          change={onChangeText("email")}
        />

      </div>
      <div style={{marginTop: '12px'}}>
        <ButtonData value={"next"} submit={nextRender} icon={<ArrowRightOutlined />}/>
        <ButtonData submit={prevRender} value={"previous"} icon={<ArrowLeftOutlined />}/>
      </div>
    </div>
  );
};

export default ContactForm;
