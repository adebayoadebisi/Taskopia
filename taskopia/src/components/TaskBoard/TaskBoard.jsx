import React, { useState, useEffect } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@mui/material';

function TaskBoard() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
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
        setTasks(prevTasks => prevTasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100', py: 6, px: 2 }}>
            <TaskForm addTask={addTask} />
            <div>
                <TaskList title="To Do" tasks={tasks.filter(task => task.status === 'To Do')} editTask={editTask} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
                <TaskList title="Doing" tasks={tasks.filter(task => task.status === 'Doing')} editTask={editTask} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
                <TaskList title="Done" tasks={tasks.filter(task => task.status === 'Done')} editTask={editTask} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
            </div>
        </Box>
    );
}

export default TaskBoard;
