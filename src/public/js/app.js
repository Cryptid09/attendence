document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI
    ui.init();

    // Add User button click handler
    document.getElementById('add-user-btn').addEventListener('click', () => {
        ui.resetUserForm();
        ui.showModal('user-modal');
    });

    // Mark Attendance button click handler
    document.getElementById('mark-attendance-btn').addEventListener('click', () => {
        ui.showModal('attendance-modal');
    });

    // User form submission
    document.getElementById('user-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const userId = document.getElementById('user-id').value;
        const userData = ui.getUserFormData();

        try {
            if (userId) {
                await api.updateUser(userId, userData);
            } else {
                await api.createUser(userData);
            }
            ui.hideModal('user-modal');
            await ui.refreshUsers();
        } catch (error) {
            alert(error.message);
        }
    });

    // Attendance form submission
    document.getElementById('attendance-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const attendanceData = ui.getAttendanceFormData();

        try {
            await api.markAttendance(attendanceData);
            ui.hideModal('attendance-modal');
            await ui.refreshAttendance();
        } catch (error) {
            alert(error.message);
        }
    });
}); 