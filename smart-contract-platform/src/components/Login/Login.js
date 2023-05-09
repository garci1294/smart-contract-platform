import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change this import
import { TextField, Button, Typography } from '@material-ui/core';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Change this line

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      navigate('/'); // Change this line
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <Typography variant="h5">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
