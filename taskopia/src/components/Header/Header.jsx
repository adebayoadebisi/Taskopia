import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
    return (
        <AppBar position="static" sx={{
            // Adjust the height of the AppBar
            height: '150px',
            // More styling options here...
        }}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // Ensure items in the Toolbar are vertically centered
                height: '100%', // Take up 100% of the AppBar's height
                backgroundColor: '#0f1112'
            }}>
                <Typography variant="h6" sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    // Adjust the size of the Typography if necessary
                }}>
                    {/* Adjust the size and padding of the logo as needed */}
                    <img src="logo.svg" style={{ width: '600%', padding: '40px' }} alt="Logo" />
                </Typography>
                {/* We can add Navigation Links or Buttons here */}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
