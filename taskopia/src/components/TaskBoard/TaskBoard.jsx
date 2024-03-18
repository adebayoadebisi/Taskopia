import React, { useState, useEffect } from 'react';
import TaskForm from '../TaskForm/TaskForm';
// import TaskList from '../TaskList/TaskList';
import TaskItem from '../TaskItem/TaskItem';
import { v4 as uuidv4 } from 'uuid';
import { Box, Typography } from '@mui/material';

function TaskBoard() {
    const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [] || []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    const addTask = (newTask) => {
        const taskWithId = { ...newTask, id: uuidv4(), status: 'To Do' };
        setTasks(prevTasks => [...prevTasks, taskWithId]);
    };

    const editTask = (id, updatedFields) => {
        setTasks(prevTasks => prevTasks.map(task => task.id === id ? { ...task, ...updatedFields } : task));
    };

    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const updateTaskStatus = (id, newStatus) => {
        setTasks(prevTasks => prevTasks.map(task => {
            if (task.id === id) {
                // Return a new object for the task with the updated status
                return { ...task, status: newStatus };
            }
            return task;
        }));
    };


    // Handler to start the drag
    const onDragStart = (e, id) => {
        e.dataTransfer.setData("id", id);
    };

    // Handle drop to update the task's status
    const onDrop = (e, newStatus) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("id");
        updateTaskStatus(taskId, newStatus);
    };

    // Allow drop
    const onDragOver = (e) => {
        e.preventDefault();
    };

    // Modify this part to assign the draggable attribute and onDragStart handler to each task item in your TaskList component rendering.
    // The TaskList and TaskItem components will need to be updated accordingly to accept onDragStart and draggable props.
    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: 'grey.100',
                py: 6,
                px: 2,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, horizontally on medium and up
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: 2, // Adds gap between children
            }}
        >
            <TaskForm addTask={addTask} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap', // Allows items to wrap as needed
                    width: '100%', // Ensures the container takes full width of its parent
                    gap: 2, // Adds gap between boards
                }}
            >
                {['To Do', 'Doing', 'Done'].map((status, index) => (
                    <Box
                        onDrop={(e) => onDrop(e, status)}
                        onDragOver={onDragOver}
                        sx={{
                            border: '1px dashed gray',
                            padding: 2,
                            minWidth: '250px', // Minimum width for each board
                            maxWidth: '400px', // Maximum width to avoid boards getting too wide
                            width: { xs: '100%', sm: 'calc(33.333% - 16px)' }, // Adjusts width based on screen size
                            flex: '1 1 auto', // Allows boards to grow and shrink as needed
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1, // Adds gap between tasks
                        }}
                        key={index}
                    >
                        <Typography variant="h6" sx={{ textAlign: 'center' }}>{status}</Typography>
                        {tasks.filter(task => task.status === status).map((task, index) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                editTask={editTask}
                                deleteTask={deleteTask}
                                onDragStart={onDragStart}
                            />
                        ))}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default TaskBoard;


