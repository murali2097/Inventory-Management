import React from 'react';
import './forgotPassword.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Card from '@mui/material/Card';


const theme = createTheme();


export default function ForgotPassword() {
    // const cardStyle = 
    // {
    //     flex : "1",
    //     display : "flex",
    //     justifyContent : "center",
    // };
  return (
    // <Card className="card" style = {cardStyle} >
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            boxShadow: '3.5px 2.8px 3px 2.8px silver',
            marginTop: 16,
            borderRadius: 2,
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 100 }}>
            Forgot your password
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 4 }}>
          <Typography component='p'>
            Please enter the email address 
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            /> 
            
           <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    // </Card>
  );
}