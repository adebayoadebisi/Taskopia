import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, TextField, MenuItem, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

function TaskItem({ task, editTask, deleteTask, onDragStart }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description);
    const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
    const [editedPriority, setEditedPriority] = useState(task.priority);

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

    return (
        <Card sx={{ mt: 2 }} draggable onDragStart={handleDragStart}>
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
                    <Button variant="contained" startIcon={<EditNoteIcon />} size="small" color="primary" onClick={isEditing ? handleSave : () => setIsEditing(true)}>
                        {isEditing ? 'Save' : 'Edit'}
                    </Button>
                    <Button variant="contained" startIcon={<DeleteIcon />} size="small" color="error" onClick={() => deleteTask(task.id)}>
                        Delete
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default TaskItem;
