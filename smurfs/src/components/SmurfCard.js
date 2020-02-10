import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../actions/index";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardText,
  CardTitle
} from "reactstrap";
import "./App.css";

const SmurfCard = props => {
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" });

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    props.fetchSmurfs();
  };

  return (
    <div className="smurf-card">
      {props.loading && <div>Incoming Smurf...</div>}
      {props.smurfs &&
        props.smurfs.map(smurf => (
          <div className="container">
            <div className="smurf" key={smurf.id}>
              <Card body inverse color="primary" className="card-container">
                <CardTitle className="title-font">Name:{smurf.name}</CardTitle>
                <CardText>Age: {smurf.age}</CardText>
                <CardText>Height: {smurf.height}</CardText>
              </Card>
            </div>
          </div>
        ))}
      <Button onClick={props.fetchSmurfs} color="primary" size="lg">
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
        <Button type="sumbit" color="primary">
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
export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(SmurfCard);
