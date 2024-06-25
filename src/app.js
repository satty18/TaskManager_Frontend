import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onTaskCreated={(task) => console.log(task)} />
            <TaskList />
        </div>
    );
}

export default App;