import { NAME_DATA } from "../action/ActionTypes";

const addName = (param) => {
  return {
    type: NAME_DATA,
    payload: param,
  };
};

export { addName };
