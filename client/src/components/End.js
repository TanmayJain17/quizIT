import React, { useEffect, useState } from 'react';
import { Button } from "@material-ui/core";
import axios from 'axios';


const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const id = sessionStorage.getItem('userId')
  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);
  function clearStorage() {
    sessionStorage.removeItem('userId')
  }
  function onSubmit() {

    axios.post('../../score', { result: results, userid: id })
      .then((response) => {
        console.log(response)
        window.alert(response.data.message)

        sessionStorage.removeItem('userId')
        window.location = '/'
      });
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1 className="letg">Your Result</h1>
          <p className="letc">{correctAnswers} of {data.length}</p>

          <Button
            variant="contained"
            color="secondary"

            tyle={{ alignSelf: "left", marginbottom: 1 }}
            className="button is-success  is-medium" onClick={onSubmit}>Submit</Button>
          <Button
            className="button is-info is-large"
            variant="contained"
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 7 }}
            onClick={clearStorage}
            href="/"
          >
            Go To Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}

export default End;