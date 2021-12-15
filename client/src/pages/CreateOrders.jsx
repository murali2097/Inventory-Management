import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const type = [
    {
        value: 'Empty',
        label: 'Empty',
      },
    {
      value: 'High',
      label: 'A',
    },
    {
      value: 'Medium',
      label: 'B',
    },
    {
      value: 'Low',
      label: 'C',
    },
    
  ];

export default function CreateOrders() {

    const [importance, setImportance] = React.useState('Empty');

    const handleChange = (event) => {
      setImportance(event.target.value);
    };

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
                    >Submit</Box>
                    <Box
                        sx={{
                            width: 130,
                            height: 30,
                            marginRight:2,
                            borderRadius: 5,
                            textAlign:"center",
                            padding: 0.5,
                            backgroundColor: '#b0e6e3',
                            '&:hover': {
                            backgroundColor: '#b0e6e3',
                            opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    >Save Order</Box>
                    
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
                    >Add Order</Box>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '35ch' },
                        // boxShadow: '3.5px 2.8px 3px 2.8px silver',
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
        
        
                    <TextField id="outlined-basic" label="Order Created By" variant="outlined" />
                    <TextField id="outlined-basic" label="Employee ID" variant="outlined" />
                    <TextField id="outlined-basic" label="Department" variant="outlined" />
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" />
                    <TextField id="outlined-basic" label="CAS Number" variant="outlined" />
                    <TextField id="outlined-basic" label="Brand" variant="outlined" />
                    <TextField id="outlined-basic" label="Catalogue Number" variant="outlined" />
                    <TextField id="outlined-basic" label="Pack Size" variant="outlined" />
                    <TextField id="outlined-basic" label="Order Quantity" variant="outlined" />
                    <TextField
                            id="filled-select-currency"
                            select
                            label="Importance Type"
                            value={importance}
                            onChange={handleChange}
                            helperText="Please select your importance type"
                            variant="outlined"
                            >
                            {type.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                    <TextField id="outlined-basic" label="Product Type" variant="outlined" />
                    <TextField id="outlined-basic" label="Vendor Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Add Comments" variant="outlined" />
                
                    {/* <Button variant="outlined">Create</Button> */}
            
                </Box>
            </div>
        
    )
}
