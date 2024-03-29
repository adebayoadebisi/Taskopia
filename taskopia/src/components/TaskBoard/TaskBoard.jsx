import React, { useState, useEffect } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskItem from '../TaskItem/TaskItem';
import TaskCounter from '../TaskCounter/TaskCounter';
import { v4 as uuidv4 } from 'uuid';
import { Box, Typography, Button, Grid, useMediaQuery, useTheme} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ClearAllIcon from '@mui/icons-material/ClearAll';

function TaskBoard() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        const taskWithId = { ...newTask, id: uuidv4(), status: 'To Do' };
        setTasks((prevTasks) => [...prevTasks, taskWithId]);
    };

    const editTask = (id, updatedFields) => {
        setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, ...updatedFields } : task)));
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const clearAllTasks = () => {
        setTasks([]); // Clear the state
        localStorage.setItem('tasks', JSON.stringify([])); // Update localStorage
    };

    // Handle drag start
    const onDragStart = (e, id) => {
        e.dataTransfer.setData("id", id);
    };

    // Handle task drop
    const onDrop = (e, newStatus) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, status: newStatus };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    // Allow drop
    const onDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#0f1112',
                py: 6,
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            {/* Task View Title and Task Counter Component */}
            <Box sx={{ display: 'flex',flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center', gap: 2, marginTop: 0, }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0095ff' }}>Task View</Typography>
                <TaskCounter tasks={tasks} />
            </Box>
            <Box sx={{ display: 'flex', gap: 4 }}>
                <Button
                    variant="contained"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={handleOpen}
                    sx={{
                        backgroundImage: 'linear-gradient(45deg, #0095ff 30%, #0072ff 90%)',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                        transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
                    }}
                >
                    Create Task
                </Button>
                <Button
                    variant="contained"
                    startIcon={<ClearAllIcon />}
                    onClick={clearAllTasks} // Call clearAllTasks when clicked
                    sx={{
                        backgroundImage: 'linear-gradient(45deg, #ff1744 30%, #ff4569 90%)',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                        transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
                    }}
                >
                    Clear Board
                </Button>
            </Box>
            <TaskForm addTask={addTask} open={open} handleClose={handleClose} />
            <Grid container spacing={2} justifyContent="center">
                {['To Do', 'In Progress', 'Done'].map((status) => (
                    <Grid item xs={12} sm={4} key={status}>
                        <Box
                            onDrop={(e) => onDrop(e, status)}
                            onDragOver={onDragOver}
                            sx={{
                                border: '1px solid #0f1112',
                                borderRadius: 3,
                                padding: 2,
                                minHeight: '250px',
                                bgcolor: '#0f1112',
                                '&:hover': {
                                    borderColor: 'primary.main',
                                },
                                boxShadow: '0px 0px 5px rgba(255, 255, 255, 0.8)',
                            }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff', textAlign: 'center', borderRadius: 3, m: -2, p: 2, backgroundColor: '#0f1112' }}>{status}</Typography>
                            {tasks.filter((task) => task.status === status).map((task, index) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    editTask={editTask}
                                    deleteTask={deleteTask}
                                    onDragStart={onDragStart}
                                />
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default TaskBoard;



