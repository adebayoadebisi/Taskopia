import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, TextField, MenuItem, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function TaskItem({ task, editTask, deleteTask, onDragStart }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description);
    const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
    const [editedPriority, setEditedPriority] = useState(task.priority);

    // Function to calculate the number of days left
    const calculateDaysLeft = (dueDate) => {
        const today = new Date();
        const due = new Date(dueDate);
        const difference = due - today;
        const daysLeft = Math.ceil(difference / (1000 * 3600 * 24));
        return daysLeft > 0 ? daysLeft : `-${Math.abs(daysLeft)}`; // Show negative days as past due
    };

    // Function to determine the color based on priority
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return 'error';
            case 'Medium':
                return 'warning';
            case 'Low':
                return 'success';
            default:
                return 'default';
        }
    };

    const handleSave = () => {
        editTask(task.id, { title: editedTitle, description: editedDescription, dueDate: editedDueDate, priority: editedPriority });
        setIsEditing(false); // Exit edit mode after saving changes
    };

    const handleDragStart = (e) => {
        onDragStart(e, task.id);
    };

    const daysLeft = calculateDaysLeft(task.dueDate); // Calculate days left
    const daysLeftColor = getPriorityColor(task.priority); // Use priority color for days left

    return (
        <Card sx={{ mt: 3 }} draggable onDragStart={handleDragStart}>
            <CardContent sx={{ p: 2 }}>
                {isEditing ? (
                    // Edit mode UI
                    <>
                        <TextField
                            fullWidth
                            label="Title"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            size="small"
                            margin="dense"
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            multiline
                            rows={2}
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                            size="small"
                            margin="dense"
                        />
                        <TextField
                            fullWidth
                            type="date"
                            value={editedDueDate}
                            onChange={(e) => setEditedDueDate(e.target.value)}
                            size="small"
                            margin="dense"
                        />
                        <TextField
                            select
                            fullWidth
                            label="Priority"
                            value={editedPriority}
                            onChange={(e) => setEditedPriority(e.target.value)}
                            size="small"
                            margin="dense"
                        >
                            <MenuItem value="High">High</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="Low">Low</MenuItem>
                        </TextField>
                    </>
                ) : (
                    // Display mode UI
                    <>
                        <Typography variant="h5">{task.title}</Typography>
                        <Typography color="textSecondary">{task.description}</Typography>
                        <Typography color="textSecondary" sx={{ mb: 2 }}>
                            Due Date: {task.dueDate}
                        </Typography>
                        <Chip
                            label={task.priority}
                            color={getPriorityColor(task.priority)}
                            size="small"
                        />
                    </>
                )}
                <CardActions sx={{ p: 0, mt: 2 }}>
                    <Button variant="contained" startIcon={<EditNoteIcon />} size="small" sx={{ backgroundImage: 'linear-gradient(45deg, #0095ff 30%, #0072ff 90%)', '&:hover': {
                            transform: 'scale(1.1)',
                        },
                        transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out', }}
                        onClick={isEditing ? handleSave : () => setIsEditing(true)}>
                        {isEditing ? 'Save' : 'Edit'}
                    </Button>
                    <Button variant="contained" startIcon={<DeleteIcon />} size="small" sx={{ backgroundImage: 'linear-gradient(45deg, #ff1744 30%, #ff4569 90%)', '&:hover': {
                            transform: 'scale(1.1)',
                        },
                        transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out', }} onClick={() => deleteTask(task.id)}>
                        Delete
                    </Button>
                    <Chip
                        icon={<AccessTimeIcon />}
                        label={`${daysLeft} days left`}
                        color={daysLeftColor}
                        size="small"
                    />
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default TaskItem;
