import React, { useState } from "react";
import { connect } from "react-redux";
import { getSmurf, addSmurf } from "../actions/action";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./App.css";

const SmurfCard = props => {
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" });

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    props.getSmurf();
  };

  return (
    <div className="smurf-card">
      <h2>SmurfCard</h2>
      {props.loading && <div>Incoming Smurf...</div>}
      {props.smurfs &&
        props.smurfs.map(smurf => (
          <div className="smurf" key={smurf.id}>
            <h2>Name: {smurf.name}</h2>
            <h2>Age: {smurf.age}</h2>
            <h2>Height: {smurf.height}</h2>
          </div>
        ))}
      <Button onClick={props.getSmurf} color="primary" size="lg">
        Get Smurfs
      </Button>
      <Form inline onSubmit={handleSubmit} className="mainForm">
        <FormGroup className="mb-3 mr-sm-3 mb-sm-0">
          <Label for="smurfName" className="mr-sm-2">
            Smurf's Name:
          </Label>
          <Input
            onChange={handleChange}
            placeholder="What do we call you?"
            name="name"
            type="text"
          />
        </FormGroup>
        <FormGroup className="mb-3 mr-sm-3 mb-sm-0">
          <Label for="smurfAge" className="mr-sm-2">
            Smurf's Age:
          </Label>
          <Input
            onChange={handleChange}
            placeholder="How old are you? "
            name="age"
            type="number"
          ></Input>
        </FormGroup>

        <FormGroup className="mb-3 mr-sm-3 mb-sm-0">
          <Label for="smurfHeight" className="mr-sm-2">
            Smurf's Height:
          </Label>
          <Input
            onChange={handleChange}
            placeholder="How tall are you?"
            name="height"
            type="text"
          />
        </FormGroup>
        <Button type="sumbit" color="info">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading
  };
};
export default connect(mapStateToProps, { getSmurf, addSmurf })(SmurfCard);
