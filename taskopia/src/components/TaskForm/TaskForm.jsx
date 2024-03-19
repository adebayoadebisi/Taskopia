import React, { useState } from 'react';
import { Modal, TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400, // Adjust this width as needed
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex', // Use flex layout to organize children
    flexDirection: 'column', // Stack children vertically
    alignItems: 'center', // Center align the items
    gap: 2, // Add a gap between items
};

function TaskForm({ addTask, open, handleClose }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));
    const [priority, setPriority] = useState('Low');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description, dueDate, priority });
        // Reset form fields and close modal
        setTitle('');
        setDescription('');
        setDueDate(new Date().toISOString().slice(0, 10));
        setPriority('Low');
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} component="form" onSubmit={handleSubmit}>
                <Typography variant="h6" gutterBottom>
                    Add Task
                </Typography>
                <TextField
                    label="Title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    fullWidth // Make TextField full width
                    margin="dense" // Reduce margin
                />
                <TextField
                    label="Description"
                    id="description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth // Make TextField full width
                    margin="dense" // Reduce margin
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
                    fullWidth // Make TextField full width
                    margin="dense" // Reduce margin
                />
                <FormControl fullWidth margin="dense"> {/* Make FormControl full width and reduce margin */}
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
                <Button startIcon={<AddTaskIcon />} type="submit" variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
                    Add Task
                </Button>
            </Box>
        </Modal>
    );
}

export default TaskForm;
