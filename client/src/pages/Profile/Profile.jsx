import React from 'react';
import Box from '@mui/material/Box';
import "./profile.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Profile() {
    
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                boxShadow: '3.5px 2.8px 3px 2.8px silver',
                margin: 6,
                borderRadius: 2,
                padding: 4,
                }}
                noValidate
                autoComplete="off"
        >
          
              <h1 className="header">Profile page</h1>
        
        
            <TextField id="outlined-basic" label="First Name" variant="outlined" />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Employee ID" variant="outlined" />
            <TextField id="outlined-basic" label="Designation" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Department" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
            <TextField id="outlined-basic" label="Reporting Time" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Wing" variant="outlined" />
            <TextField id="outlined-basic" label="HQ Location" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="HQ Address" variant="outlined" />
            <TextField id="outlined-basic" label="Blood Group" variant="outlined" />
        
            <Button variant="outlined">Create</Button>
            
        </Box>
    )
}
