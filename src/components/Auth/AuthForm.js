import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const labelstyle = { mt: 1, mb: 1 };

const AuthForm = ({onSubmit,isAdmin}) => {
  const [isSignup, setSignup] = useState(false);

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => { 
    setInputs((prevStates) => ({

      ...prevStates,
     [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        onSubmit({inputs, signup: isAdmin ? false:isSignup});

  };

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: 'auto', padding: 1 }}>
        <IconButton LinkComponent={Link} to="/">
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign="center">
        {isSignup ?'Signup'  : 'Login'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          padding={6}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          width={400}
          margin={'auto'}
          alignContent={'center'}
        >
          {!isAdmin && isSignup && (
            <>
              <FormLabel sx={labelstyle}>Username</FormLabel>
              <TextField
                margin="normal"
                variant="standard"
                type="text"
                name="name"
                onChange={handleChange}
              />
            </>
          )}

          <FormLabel sx={labelstyle}>Email</FormLabel>
          <TextField
            margin="normal"
            variant="standard"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <FormLabel sx={labelstyle}>Password</FormLabel>
          <TextField
            margin="normal"
            variant="standard"
            type="password"
            name="password"
            onChange={handleChange}
          />

          <Button
            sx={{ mt: 2, borderRadius: 10, bgcolor: '#2b2d42' }}
            type="submit"
            fullWidth
            variant="contained"
          >
            {isSignup ? 'Signup'  : 'Login'}
          </Button>

          {!isAdmin &&(
          <Button
            onClick={() => setSignup(!isSignup)}
            sx={{ mt: 2, borderRadius: 10 }}
            type="button"
            fullWidth
          >
            Switch To {isSignup ?'Login':'Signup'  }
          </Button>
          )}
          
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
