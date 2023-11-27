import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const navigate=useNavigate();
  const handleSubmit = async () => {
    //const empId = document.getElementById('outlined-required').value;
    const name = document.getElementById('outlined-required').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('Required').value;
    const password = document.getElementById('outlined-password-input').value;
    const formData = {
      name,
      email,
      mobileNumber,
      password
    };

    try {
      const response = await axios.post('http://localhost:3002/user', formData);
      navigate("/login")
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    

    <body className='total1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: 'url(https://y6b8k9e7.stackpathcdn.com/wp-content/uploads/2017/07/cyber-security-concept-shield-with-keyhole-icon-digital-data-background.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
    <div>

    <Box className='bb'
      component="form"
      
      sx={{
        '& .MuiTextField-root': { m: 1, width: { xs: '90vw', sm: '45ch' } }, // Adjusted the 'xs' value here
        border: '2px solid black',
        borderRadius: '10px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)' // This line makes the form semi-transparent
      }}
      noValidate
      autoComplete="off"
      >
        <h1 style={{textAlign:'center'}}>Register<span style={{color:'red'}}>!!</span></h1>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <TextField
          required
          id="outlined-required"
          label="Enter Name"
          />
        <TextField
          required
          id="Required"
          label="Mobile Number"
          type='Number'
          />
        <TextField
          required
          id="email"
          label="email"
          type='email'
          />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          />
        <TextField
          id="confirm"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          />
       <br/>
      
  
       <button onClick={handleSubmit} style={{margin:'25px', backgroundColor: 'blue', color: 'white', fontSize: '20px', borderRadius: '20px',padding:'10px'}}>Sign Up
        </button>

      </div>
    </Box>
    
          </div>
          </body>
  );
}
