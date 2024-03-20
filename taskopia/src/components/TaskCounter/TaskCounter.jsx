// TaskCounter.jsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function TaskCounter({ tasks }) {
    // Count tasks based on their status
    const counts = {
        total: tasks.length,
        toDo: tasks.filter(task => task.status === 'To Do').length,
        inProgress: tasks.filter(task => task.status === 'In Progress').length,
        done: tasks.filter(task => task.status === 'Done').length,
    };

    // Function to render each counter
    const renderCounter = (label, count) => (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1 }}>
            <Paper elevation={4} sx={{ borderRadius: '50%', width: 64, height: 64, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6">{count}</Typography>
            </Paper>
            <Typography variant="caption">{label}</Typography>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {renderCounter('Total', counts.total)}
            {renderCounter('To Do', counts.toDo)}
            {renderCounter('In Progress', counts.inProgress)}
            {renderCounter('Done', counts.done)}
        </Box>
    );
}

export default TaskCounter;

