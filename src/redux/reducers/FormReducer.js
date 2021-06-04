import { NAME_DATA } from "../action/ActionTypes";

const initialState = {
  name: "whoaa",
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_DATA:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default FormReducer;
