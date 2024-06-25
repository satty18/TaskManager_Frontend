import React, { useState } from 'react';

function TaskItem({ task, onUpdate, onDelete }) {
    const [status, setStatus] = useState(task.status);

    const handleStatusChange = (e) => {
        const updatedStatus = e.target.value;
        setStatus(updatedStatus);
        onUpdate(task.id, { ...task, status: updatedStatus });
    };

    return (
        <li>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {new Date(task.due_date).toLocaleDateString()}</p>
            <select value={status} onChange={handleStatusChange}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
}

export default TaskItem;