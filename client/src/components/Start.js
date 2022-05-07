import React, { useState } from 'react';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

import axios from "axios"

const Start = ({ onQuizStart }) => {

  const initialValues = { theEmail: "", theName: "", thePhone: "" };
  const [formValues, setFromValues] = useState(initialValues);

  const handleChangeName = (e) => {

    setFromValues({ ...formValues, theName: e.target.value });

  }
  const handleChangePhone = (e) => {

    setFromValues({ ...formValues, thePhone: e.target.value })


  }
  const handleChangeEmail = (e) => {

    setFromValues({ ...formValues, theEmail: e.target.value });

  }


  function onSubmit() {
    setFromValues(formValues)
    axios.post('../../details', formValues)
      .then((response) => {
        if (response.data.message) {
          window.alert(response.data.message)
        }
        else {
          console.log(response.data.id)
          sessionStorage.setItem('userId', response.data.id)
          window.alert('You can now start the test!')
        }
      });
  }
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">

          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            autoComplete="off"
            id="name"
            value={formValues.theNames}
            onChange={(e) => { handleChangeName(e) }}
          />
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Phone No."
            variant="outlined"
            autoComplete="off"
            name="phone"
            //type="number"
            value={formValues.Phone}
            onChange={(e) => { handleChangePhone(e) }}

          />
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Email ID"
            variant="outlined"
            autoComplete="off"
            name="email"
            value={formValues.theEmail}
            onChange={(e) => { handleChangeEmail(e) }}

          />

          <br></br>
          <Button className="button is-success is-medium" onClick={onSubmit}>Submit</Button>

          <h1 className="letg">Predictability Test</h1>
          <p className="letc">Good luck!</p>

          <Button className="button is-info is-medium" onClick={onQuizStart}>Start</Button>
        </div>
      </div>
    </div>
  );
}

export default Start;