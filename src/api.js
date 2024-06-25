const API_URL = 'http://localhost:8080';

// Task APIs
export async function fetchTasks() {
    const response = await fetch(`${API_URL}/tasks`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.json();
}

export async function createTask(task) {
    const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(task),
    });
    return response.json();
}

export async function updateTask(id, task) {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(task),
    });
    return response.json();
}

export async function deleteTask(id) {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.json();
}

export async function searchTasks(query) {
    const response = await fetch(`${API_URL}/tasks/search?q=${query}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.json();
}

export async function sortTasks(sortBy) {
    const response = await fetch(`${API_URL}/tasks/sort?sort_by=${sortBy}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.json();
}

// User APIs
export async function registerUser(user) {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
}

export async function loginUser(user) {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
}

export async function fetchProfile() {
    const response = await fetch(`${API_URL}/profile`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.json();
}

export async function updateProfile(profile) {
    const response = await fetch(`${API_URL}/profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(profile),
    });
    return response.json();
}