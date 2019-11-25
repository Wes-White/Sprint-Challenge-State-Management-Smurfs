import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/action";
import { Button } from "reactstrap";

const SmurfCard = props => {
  return (
    <div className="smurf-card">
      <h2>SmurfCard</h2>
      {props.loading && <div>Incoming Smurf!</div>}
      {props.smurfs &&
        props.smurfs.map(smurf => (
          // console.log(smurf),
          <div key={smurf.id}>
            <h2>{smurf.name}</h2>
            <h2>{smurf.age}</h2>
            <h2>{smurf.height}</h2>
          </div>
        ))}
      <Button onClick={props.getSmurf} color="primary" size="lg">
        Get Smurfs
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading
  };
};
export default connect(mapStateToProps, { getSmurf })(SmurfCard);
