import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'center', backgroundImage: 'linear-gradient(to right, #c2e59c, #64b3f4)' }}>
                <Typography variant="h6"style={{ display: 'flex', justifyContent: 'center'}}>
                    <img src="/public/logo.svg" style={{ width: '50%', padding: '40px' }} />
                </Typography>
                {/* We can add Navigation Links or Buttons here */}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
