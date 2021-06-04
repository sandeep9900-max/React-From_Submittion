import React, { useEffect, useState } from "react";
import { notification } from "antd";
import FormData from "../../utilities/form/FormData";
import { ArrowRightOutlined } from '@ant-design/icons';
import ButtonData from "../../utilities/ButtonData/ButtonData";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../../redux/actionCreator/ActionCreator";

const FormDetails = (props) => {
  // const dispatch = useDispatch();
  // const formData = useSelector((state) => state.name);
  // console.log(formData, "dta is>>>");

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
    if (name === null && age === null && gender === null) {
      return notification.open({
        message: "Please read descriptions",
        description: "- Please Fill All Inputs - AGE write in numbers",

        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    } else {
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

  return (
    <div style={{ display: "grid", justifyContent: "center", padding: "24px" }}>
      <h2>Detailed Form</h2>
      <FormData
        placeholder={"Name"}
        render={onFinish}
        value={name}
        change={onChangeText("name")}
        label={"Name:"}
      />
      <FormData
        placeholder={"Age"}
        typeData={"number"}
        value={age}
        change={onChangeText("age")}
        render={onFinish}
        label={"Age:"}
      />
      <FormData
        placeholder={"Gender"}
        value={gender}
        change={onChangeText("gender")}
        render={onFinish}
        label={"Gender:"}
      />
      <div style={{ marginTop: "12px" }}>
        <ButtonData value={"Next"} submit={handleClick} icon={<ArrowRightOutlined />}/>
      </div>
    </div>
  );
};

export default FormDetails;
