import axios from "axios";
export const FETCHSMURF = "FETCHSMURF";
export const FETCHSUCCESS = "FETCHSUCCESS";
export const FETCHFAILED = "FETCHFAILED";
export const ADDSMURF = "ADDSMURF";
export const ADDSUCCESS = "ADDSUCCESS";
export const ADDFAILED = "ADDFAILEDS";

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: FETCHSMURF });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCHSUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: FETCHFAILED,
        payload: err,
      });
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: ADDSMURF });
  console.log("addS", smurf);
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      console.log("RES", res.data);
      dispatch({ type: ADDSUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ADDFAILED,
        payload: err,
      });
    });
};
