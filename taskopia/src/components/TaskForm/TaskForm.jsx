import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Typography } from '@mui/material';

function TaskForm({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description, dueDate, priority });
        // Reset form fields
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 'lg', margin: 'auto', my: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1, '& .MuiTextField-root': { mb: 2, width: '100%' } }}>
            <Typography variant="h6" gutterBottom>
                Add Task
            </Typography>
            <TextField
                label="Title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <TextField
                label="Description"
                id="description"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
                type="date"
                id="dueDate"
                label="Due Date"
                InputLabelProps={{
                    shrink: true,
                }}
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                sx={{ mb: 2 }}
            />
            <FormControl fullWidth>
                <InputLabel id="priority-label">Priority</InputLabel>
                <Select
                    labelId="priority-label"
                    id="priority"
                    value={priority}
                    label="Priority"
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
                Add Task
            </Button>
        </Box>
    );
}

export default TaskForm;