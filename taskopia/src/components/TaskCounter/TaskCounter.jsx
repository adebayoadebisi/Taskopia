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

        // Determine the color based on the label
        let color;
        switch (label) {
            case 'Total':
                color = '#5546ee';
                break;
            case 'To Do':
                color = '#852be5';
                break;
            case 'In Progress':
                color = '#9a1ba7';
                break;
            case 'Done':
                color = '#3da38d';
                break;
            default:
                color = '#555'; // Default color if needed
        }

        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1 }}>
                <Paper elevation={4} sx={{ bgcolor: '#0f1112', boxShadow: '0 0 8px #fff', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1, transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                    <CircularProgress variant="determinate" value={percentage} size={size} thickness={thickness} sx={{ color: color }} />
                    <Box sx={{ position: 'absolute' }}>
                        <Typography variant="h6" component="div" sx={{ color: '#dddcdd', fontWeight: 'bold' }}>{`${count}`}</Typography>
                    </Box>
                </Paper>
                <Typography variant="caption" sx={{ color: '#dddcdd', fontWeight: 'bold' }}>{label}</Typography>
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


