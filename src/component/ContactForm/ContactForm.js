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
  const [emailErrorStatus, setEmailErrorStatus] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

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
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (reg.test(email)) {
      setEmailErrorStatus(false);
    } 
      if (email !== "") {
        setEmailErrorStatus(true);
      }
      if (phoneNumber.trim().length < 10) {
        setPhoneNumberError(true);
      } else {
        setPhoneNumberError(false);
        props.history.push('/hobby')
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
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        padding: "24px",
        alignItems: "center",
        height: "360px",
        border: "3px solid darkgrey",
        boxShadow: "10px 5px 5px darkgrey",
        marginLeft: "36%",
        marginTop: "100px",
        borderRadius: "28px",
        width: "26%",
        fontFamily: "cursive",
      }}
    >
      <h2 style={{ textDecoration: "underline" }}>Contact From</h2>
      <div>
        <FormData
          label={"Phone_no:"}
          placeholder={"Phone_no"}
          value={phoneNumber}
          change={onChangeText("phoneNumber")}
        />
        {phoneNumberError === true ? (
          <div style={{color: 'red'}} >* phoneNumber should be minimum 10 characters.</div>
        ) : null}
        <FormData
          label={"Email:"}
          placeholder={"Email"}
          value={email}
          change={onChangeText("email")}
        />
        {emailErrorStatus === true ? (
          <div style={{color: 'red'}}>* Please include an '@' in the email address.</div>
        ) : null}
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

export default ContactForm;
