import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, TextField, MenuItem, Chip } from '@mui/material';

function TaskItem({ task, editTask, deleteTask, updateTaskStatus }) {
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

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
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
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={isEditing ? handleSave : () => setIsEditing(true)}>
                    {isEditing ? 'Save' : 'Edit'}
                </Button>
                <Button size="small" color="error" onClick={() => deleteTask(task.id)}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default TaskItem;
