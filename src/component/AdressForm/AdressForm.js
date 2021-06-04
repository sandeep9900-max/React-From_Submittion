import React, { useState, useEffect } from "react";
import { notification } from "antd";
import FormComponent from "../../utilities/form/FormComponent";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import ButtonComponent from "../../utilities/ButtonData/ButtonComponent";
const AdressForm = (props) => {
  const [phoneNumberError, setPhoneNumberError] = useState(false);

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
    if (primaryAddress.trim().length < 10) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
    if (secondaryAddress.trim().length < 10) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
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
      <h2 style={{ textDecoration: "underline" }}>Address From</h2>
      <div>
        <FormComponent
          label={"Primary-Address:"}
          placeholder={"Primary-Address"}
          value={primaryAddress}
          change={onChangeText("primaryAddress")}
        />
        {phoneNumberError === true ? (
          <div style={{ color: "red" }}>
            * primaryAddress should be minimum 10 characters.
          </div>
        ) : null}
        <FormComponent
          label={"Secondary-Address:"}
          placeholder={"Secondary-Address"}
          value={secondaryAddress}
          change={onChangeText("secondaryAddress")}
        />
        {phoneNumberError === true ? (
          <div style={{ color: "red" }}>
            * secondaryAddress should be minimum 10 characters.
          </div>
        ) : null}
      </div>
      <div style={{ marginTop: "12px" }}>
        <ButtonComponent
          value={"next"}
          submit={nextRender}
          icon={<ArrowRightOutlined />}
        />
        <ButtonComponent
          submit={prevRender}
          value={"previous"}
          icon={<ArrowLeftOutlined />}
        />
      </div>
    </div>
  );
};

export default AdressForm;
