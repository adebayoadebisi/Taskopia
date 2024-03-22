import React, { useState } from 'react';
import { Modal, TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CloseIcon from '@mui/icons-material/Close';


function TaskForm({ addTask, open, handleClose }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));
    const [priority, setPriority] = useState('Low');
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isSmallScreen ? '75%' : 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 2, 
    };   

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
                <CloseIcon aria-label="close" sx={{ color: 'rgb(0 123 255 / 61%)', position: 'absolute', top: 8, right: 10, cursor: 'pointer' }} onClick={handleClose} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'rgb(0 123 255 / 61%)', textAlign: 'center' }}>
                    Add Task
                </Typography>
                <TextField
                    label="Title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    fullWidth 
                    margin="dense" 
                />
                <TextField
                    label="Description"
                    id="description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="dense" 
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
                    fullWidth 
                    margin="dense" 
                />
                <FormControl fullWidth margin="dense">
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
