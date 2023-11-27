import React from 'react';
import {Link} from 'react-router-dom'
import './login.css';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function Loginapp()
{
    const navigate=useNavigate();
    const [defpassword, setDefpassword] = useState('');
    const [userid, setUserid] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
  
    const checkUser = async () => {
    
  
        try {
          const response = await axios.get('http://localhost:3002/user');
          console.log('Response:', response.data);
      
          const users = response.data; 
      
          console.log('Users:', users);
          console.log('input:', { userid });
      
          if (users) {
            const user = users.find((user) => user.name === userid);
      
            if (user) {
              
              console.log('useroutput:', { user});
              if (user.password === defpassword) {
                navigate('/');
              } else {
                setErrorMessage('Invalid password');
              }
            } else {
              setErrorMessage('User does not exist');
            }
          } else {
            setErrorMessage('Error fetching user data');
          }
        } catch (error) {
          console.error('Error during login:', error);
          setErrorMessage('Error during login');
        }
      };
    
    return(
        <body className='log'>

        <div className='dom'>
            
            <h1><span>LOGIN</span></h1>
            <br></br>
            
            <TextField className='textfield' id="outlined-basic" label="USERNAME" variant="outlined"  onChange={(e) => setUserid(e.target.value)}
 />
            <br></br>
            
            <TextField className='textfield' type="password" id="outlined-basic" label="PASSWORD" variant="outlined" onChange={(e) => setDefpassword(e.target.value)}/>
            <Button onClick={checkUser}>Login In</Button>
            <br></br>
            <div className='box2'>Forgot Password?</div>
            <br></br>
            <Link to='/register'>
            <Button  type='submit'>Sign Up</Button></Link>
            <br></br>
            <h4  className="gokul" style={{color:'black'}}><small>OR</small></h4>
            <br></br>
            <div className='box1'>
                
                <span style={{color:'black'}}>Don't have an account?</span>
                <Link to='/register' >REGISTER</Link>
                {/* <div > REGISTER   </div>  */}

            </div>
            <br></br>
       </div>
        </body>
    );
}
