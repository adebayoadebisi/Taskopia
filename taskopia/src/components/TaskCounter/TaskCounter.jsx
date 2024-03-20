import React from 'react';
import { Box, Typography, CircularProgress, Paper } from '@mui/material';

function TaskCounter({ tasks }) {
    // Count tasks based on their status
    const counts = {
        total: tasks.length,
        toDo: tasks.filter(task => task.status === 'To Do').length,
        inProgress: tasks.filter(task => task.status === 'In Progress').length,
        done: tasks.filter(task => task.status === 'Done').length,
    };

    // Function to render each counter
    const renderCounter = (label, count, total) => {
        const size = 64; // Size of the CircularProgress
        const thickness = 4; // Thickness of the CircularProgress

        // Calculate the percentage (avoid division by zero)
        const percentage = total > 0 ? (count / total) * 100 : 0;

        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1 }}>
                <Paper elevation={4} sx={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1 }}>
                    <CircularProgress variant="determinate" value={percentage} size={size} thickness={thickness} />
                    <Box sx={{ position: 'absolute' }}>
                        <Typography variant="h6" component="div">{`${count}`}</Typography>
                    </Box>
                </Paper>
                <Typography variant="caption">{label}</Typography>
            </Box>
        );
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {renderCounter('Total', counts.total, counts.total)}
            {renderCounter('To Do', counts.toDo, counts.total)}
            {renderCounter('In Progress', counts.inProgress, counts.total)}
            {renderCounter('Done', counts.done, counts.total)}
        </Box>
    );
}

export default TaskCounter;


