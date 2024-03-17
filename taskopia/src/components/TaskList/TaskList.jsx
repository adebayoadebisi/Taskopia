import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { Typography, Box } from '@mui/material';

function TaskList({ tasks, title, editTask, deleteTask, updateTaskStatus }) {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                {title}
            </Typography>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
            ))}
        </Box>
    );
}

export default TaskList;
