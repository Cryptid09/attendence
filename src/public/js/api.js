const API_BASE_URL = 'http://localhost:3000/api';

const api = {
    // User API calls
    async getUsers() {
        const response = await fetch(`${API_BASE_URL}/users`);
        if (!response.ok) throw new Error('Failed to fetch users');
        return response.json();
    },

    async getUserById(id) {
        const response = await fetch(`${API_BASE_URL}/users/${id}`);
        if (!response.ok) throw new Error('Failed to fetch user');
        return response.json();
    },

    async createUser(userData) {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) throw new Error('Failed to create user');
        return response.json();
    },

    async updateUser(id, userData) {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) throw new Error('Failed to update user');
        return response.json();
    },

    async deleteUser(id) {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete user');
        return response.json();
    },

    // Attendance API calls
    async getAttendance() {
        const response = await fetch(`${API_BASE_URL}/attendance`);
        if (!response.ok) throw new Error('Failed to fetch attendance records');
        return response.json();
    },

    async markAttendance(attendanceData) {
        const response = await fetch(`${API_BASE_URL}/attendance`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(attendanceData),
        });
        if (!response.ok) throw new Error('Failed to mark attendance');
        return response.json();
    },

    async updateAttendance(id, attendanceData) {
        const response = await fetch(`${API_BASE_URL}/attendance/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(attendanceData),
        });
        if (!response.ok) throw new Error('Failed to update attendance');
        return response.json();
    }
}; 