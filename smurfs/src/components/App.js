import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchSmurf } from "../actions/action";
import Smurform from "./SmurfForm";
import SmurfList from "./SmurfList";

const App = ({ fetchSmurf }) => {
  useEffect(() => {
    fetchSmurf();
  }, [fetchSmurf]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <Smurform />
      <SmurfList />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    message: state.message,
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchSmurf })(App);
