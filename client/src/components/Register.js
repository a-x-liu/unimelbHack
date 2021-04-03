import React from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Wave from 'react-wavify';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
  
const username = {
    marginRight: '5px',
    width: '90%',
    marginBottom: '2%'
  }

  const password = {
    width: '90%',
    height: '120%',
    marginBottom: '2%'
  }

  const confirmPassword = {
    width: '90%',
    height: '120%',
  }


export default function () {
    return (
        <div>
            <div id="homeButton">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        Return Home
                    </Button>
                </Link>
            </div>
            <div className="RegisterPage">
                <h2>Register here!</h2>
                <form>
                    <TextField id="loginUsername" label="Username" variant="outlined" style={username}/>
                    <TextField id="loginPassword" label="Password" variant="outlined" type="password" style={password} />
                    <TextField id="loginPassword" label="Comfirm Password" variant="outlined" type="password" style={confirmPassword} />
                    <div className="loginButton">
                        
                    <Button variant="contained" color="primary">
                        Create Account
                    </Button>
                    
                    </div>
                </form>
            </div>
            <div id="wave">
                <Wave fill='#D3EAFF'
                    paused={false}
                    options={{
                        position: 'fixed',
                        bottom: '0px',
                        height: 20,
                        amplitude: 35,
                        speed: 0.2,
                        points: 4
                    }}
                />
            </div>
        </div>  
    );
}