import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    TeamSync Tasks
                </Typography>
                {/* Navigation Links or Buttons can be added here */}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
