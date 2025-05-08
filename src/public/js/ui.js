const ui = {
    // Navigation
    initNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.dataset.page;
                this.showPage(page);
                navButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    },

    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(`${pageId}-section`).classList.add('active');
    },

    // Modal handling
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    },

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    },

    initModals() {
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                const modal = closeBtn.closest('.modal');
                modal.style.display = 'none';
            });
        });

        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
    },

    // User table
    renderUsersTable(users) {
        const tbody = document.getElementById('users-table-body');
        tbody.innerHTML = users.map(user => `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>
                    <button class="action-btn edit-btn" data-id="${user.id}">Edit</button>
                    <button class="action-btn delete-btn" data-id="${user.id}">Delete</button>
                </td>
            </tr>
        `).join('');

        // Add event listeners to action buttons
        tbody.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleEditUser(btn.dataset.id));
        });

        tbody.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleDeleteUser(btn.dataset.id));
        });
    },

    // Attendance table
    renderAttendanceTable(records) {
        const tbody = document.getElementById('attendance-table-body');
        tbody.innerHTML = records.map(record => `
            <tr>
                <td>${record.user_name}</td>
                <td>${new Date(record.check_in).toLocaleString()}</td>
                <td>${record.check_out ? new Date(record.check_out).toLocaleString() : '-'}</td>
                <td>${record.status}</td>
                <td>
                    <button class="action-btn edit-btn" data-id="${record.id}">Edit</button>
                </td>
            </tr>
        `).join('');

        // Add event listeners to action buttons
        tbody.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleEditAttendance(btn.dataset.id));
        });
    },

    // Form handling
    getUserFormData() {
        return {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            role: document.getElementById('role').value,
            password: document.getElementById('password').value
        };
    },

    getAttendanceFormData() {
        return {
            user_id: document.getElementById('user-select').value,
            status: document.getElementById('status').value
        };
    },

    resetUserForm() {
        document.getElementById('user-form').reset();
        document.getElementById('user-id').value = '';
        document.getElementById('modal-title').textContent = 'Add New User';
    },

    // Event handlers
    async handleEditUser(userId) {
        try {
            const user = await api.getUserById(userId);
            document.getElementById('user-id').value = user.id;
            document.getElementById('name').value = user.name;
            document.getElementById('email').value = user.email;
            document.getElementById('role').value = user.role;
            document.getElementById('modal-title').textContent = 'Edit User';
            this.showModal('user-modal');
        } catch (error) {
            alert(error.message);
        }
    },

    async handleDeleteUser(userId) {
        if (confirm('Are you sure you want to delete this user?')) {
            try {
                await api.deleteUser(userId);
                await this.refreshUsers();
            } catch (error) {
                alert(error.message);
            }
        }
    },

    async handleEditAttendance(attendanceId) {
        // Implement attendance edit functionality
    },

    // Refresh data
    async refreshUsers() {
        try {
            const users = await api.getUsers();
            this.renderUsersTable(users);
        } catch (error) {
            alert(error.message);
        }
    },

    async refreshAttendance() {
        try {
            const records = await api.getAttendance();
            this.renderAttendanceTable(records);
        } catch (error) {
            alert(error.message);
        }
    },

    // Initialize
    init() {
        this.initNavigation();
        this.initModals();
        this.refreshUsers();
        this.refreshAttendance();
    }
}; 