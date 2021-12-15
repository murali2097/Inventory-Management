import React from 'react';
import Box from '@mui/material/Box';
import "./profile.css";
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';


export default function Profile() {
    
    return (
        
            <div>
                <div className="heading">
                    <Box
                        sx={{
                            width: 130,
                            height: 30,
                            margin:2,
                            borderRadius: 5,
                            textAlign:"center",
                            padding: 0.5,
                            backgroundColor: '#b0e6e3',
                           
                        }}
                    >My Details</Box>
                    <Box
                        sx={{
                            width: 130,
                            height: 30,
                            borderRadius: 5,
                            textAlign:"center",
                            padding: 0.5,
                            backgroundColor: '#b0e6e3',
                            '&:hover': {
                            backgroundColor: '#b0e6e3',
                            opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    >Edit Profile</Box>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '35ch' },
                        boxShadow: '3.5px 2.8px 3px 2.8px silver',
                        backgroundColor: '#b0e6e3',
                        margin: 2,
                        marginTop:0.1,
                        flexDirection: 'column',
                        display: 'flex',
                        borderRadius: 2,
                        padding: 1,
                        }}
                        notValidate
                        autoComplete="off"
                >
          
                    <h1 className="header">Profile page</h1>
        
        
                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Employee ID" variant="outlined" />
                    <TextField id="outlined-basic" label="Designation" variant="outlined" />
                    <TextField id="outlined-basic" label="Department" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                    <TextField id="outlined-basic" label="Reporting Time" variant="outlined" />
                    <TextField id="outlined-basic" label="Wing" variant="outlined" />
                    <TextField id="outlined-basic" label="HQ Location" variant="outlined" />
                    <TextField id="outlined-basic" label="HQ Address" variant="outlined" />
                    <TextField id="outlined-basic" label="Blood Group" variant="outlined" />
                
                    {/* <Button variant="outlined">Create</Button> */}
            
                </Box>
            </div>
        
        
    )
}
