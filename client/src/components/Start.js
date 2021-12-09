import React,{useState} from 'react';
import { TextField } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from "axios"

const Start = ({ onQuizStart }) => {
  const [name,setName]=useState(' ')
  const [email,setEmail]=useState(' ')
  const [phone,setPhone]=useState(' ')
  const [newuser,setNewuser] = useState({})

  
    
    const updateData = (e) => {
      /* e.preventDefault() */
      const data = {
          
          theName: name,
          thePhone:phone,
          emailId: email,
          
      }
      setNewuser({ data })


  }
  
  function onSubmit() {
    setNewuser(newuser)
    axios.post('../../details',newuser)
        .then((response) => {
          if(response.data.message){
            window.alert(response.data.message)
          }
          else{
            console.log(response.data.id)
            sessionStorage.setItem('userId',response.data.id)
            window.alert('You can now start the test!')
          }
        });
}
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
      
        <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Phone No."
            variant="outlined"
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            
          />
           <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Email ID"
            variant="outlined"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        onClick={updateData}
                        label="I accept the terms and conditions."
                    />
          <button className="button is-success is-medium" onClick={onSubmit}>Submit</button>
       
          <h1>Predictability Test</h1>
          <p>Good luck!</p>
          
          <button className="button is-info is-large" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Start;