import { FETCHSMURF } from "../actions/action";
import { FETCHSUCCESS } from "../actions/action";
import { FETCHFAILED } from "../actions/action";
import { ADDSMURF } from "../actions/action";
import { ADDSUCCESS } from "../actions/action";
import { ADDFAILED } from "../actions/action";

const initialState = {
  messge: "",
  smurfs: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHSMURF:
      return { ...state, message: action.payload };
    case FETCHSUCCESS:
      return { message: "", smurfs: action.payload };
    case FETCHFAILED:
      console.log(action.payload);
      return { ...state, message: action.payload };
    case ADDSMURF:
      return { ...state, message: action.payload };
    case ADDSUCCESS:
      return { message: "Smurf added", smurfs: action.payload };
    case ADDFAILED:
      console.log(action.payload);
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
