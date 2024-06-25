import React, { useEffect, useState } from 'react';
import { fetchTasks, updateTask, deleteTask, searchTasks, sortTasks } from '../api';
import TaskItem from './TaskItem';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        async function loadTasks() {
            const tasks = await fetchTasks();
            setTasks(tasks);
        }
        loadTasks();
    }, []);

    const handleTaskUpdate = async (id, updatedTask) => {
        const updated = await updateTask(id, updatedTask);
        setTasks(tasks.map(task => (task.id === id ? updated : task)));
    };

    const handleTaskDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleSearch = async () => {
        const tasks = await searchTasks(searchQuery);
        setTasks(tasks);
    };

    const handleSort = async () => {
        const tasks = await sortTasks(sortBy);
        setTasks(tasks);
    };

    const filteredTasks = tasks.filter(task => filter === 'All' || task.status === filter);

    return (
        <div>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <input
                type="text"
                placeholder="Search tasks"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="">Sort by</option>
                <option value="title">Title</option>
                <option value="due_date">Due Date</option>
                <option value="status">Status</option>
            </select>
            <button onClick={handleSort}>Sort</button>
            <ul>
                {filteredTasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onUpdate={handleTaskUpdate}
                        onDelete={handleTaskDelete}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;