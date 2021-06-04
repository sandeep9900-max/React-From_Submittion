import React, { useEffect, useState } from "react";
import { notification, Radio, Space } from "antd";
import FormData from "../../utilities/form/FormData";
import { ArrowRightOutlined } from "@ant-design/icons";
import ButtonData from "../../utilities/ButtonData/ButtonData";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../../redux/actionCreator/ActionCreator";

const FormDetails = (props) => {
  // const dispatch = useDispatch();
  // const formData = useSelector((state) => state.name);
  // console.log(formData, "dta is>>>");
  const [value, setValue] = React.useState(1);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [state, setState] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const { name, age, gender } = state;

  const onFinish = (event) => {
    event.preventDefault();
    console.log("Success:", event);
  };

  useEffect(() => {
    // fetch your data when the props.location changes
    console.log("Tab is blurred >>>>>>>>>>>111");
    //get items from localstorage.
    let retrievedObject = localStorage.getItem("state");
    let updatedObj = JSON.parse(retrievedObject);
    console.log("updatedObj: ", updatedObj);

    setState(() => ({
      ...console.log(state, ">>"),
      // ...state,
      name: updatedObj && updatedObj.name,
      age: updatedObj && updatedObj.age,
      gender: updatedObj && updatedObj.gender,
    }));
  }, []);

  // on button click
  const handleClick = () => {
    // dispatch(addName("lasan"));
    // props.history.push("/address");

    // return;
    if (name.trim().length < 10) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
    if (age.trim().length < 2) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
      props.history.push("/address");
    }
    console.log(state, "state on button press");

    // set items in localstorage.
    localStorage.setItem("state", JSON.stringify(state));
  };
  // input handler.
  // [key] as a name, and val send as a value this is key value pair.

  const onChangeText = (key) => (val) => {
    return setState({ ...state, [key]: val });
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        padding: "24px",
        alignItems: "center",
        height: "400px",
        border: "3px solid darkgrey",
        boxShadow: "10px 5px 5px darkgrey",
        marginLeft: "36%",
        marginTop: "100px",
        borderRadius: "28px",
        width: "26%",
        fontFamily: "cursive",
      }}
    >
      <h2 style={{ textDecoration: "underline" }}>Detailed Form</h2>
      <FormData
        placeholder={"Name"}
        render={onFinish}
        value={name}
        change={onChangeText("name")}
        label={"Name:"}
      />
      {phoneNumberError === true ? (
        <div style={{ color: "red" }}>
          * Name should be minimum 10 characters.
        </div>
      ) : null}
      <FormData
        placeholder={"Age"}
        typeData={"number"}
        value={age}
        change={onChangeText("age")}
        render={onFinish}
        label={"Age:"}
      />
      {phoneNumberError === true ? (
        <div style={{ color: "red" }}>
          * Age should be minimum 2 characters.
        </div>
      ) : null}
      {/* <FormData
        placeholder={"Gender"}
        value={gender}
        change={onChangeText("gender")}
        render={onFinish}
        label={"Gender:"}
      /> */}

      <Radio.Group
        onChange={onChange}
        value={value}
        style={{ marginTop: "20px" }}
      >
        <Space direction="vertical">
          <Radio value={1}>Male</Radio>
          <Radio value={2}>Female</Radio>
          <Radio value={3}>Other</Radio>
        </Space>
      </Radio.Group>

      <div style={{ marginTop: "12px" }}>
        <ButtonData
          value={"Next"}
          submit={handleClick}
          icon={<ArrowRightOutlined />}
        />
      </div>
    </div>
  );
};

export default FormDetails;
