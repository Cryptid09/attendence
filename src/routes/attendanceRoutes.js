const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendance');

// Get all attendance records
router.get('/', async (req, res) => {
    try {
        const records = await Attendance.findAll();
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get attendance record by ID
router.get('/:id', async (req, res) => {
    try {
        const record = await Attendance.findById(req.params.id);
        if (!record) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new attendance record
router.post('/', async (req, res) => {
    try {
        const record = await Attendance.create(req.body);
        res.status(201).json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update attendance record
router.put('/:id', async (req, res) => {
    try {
        const record = await Attendance.update(req.params.id, req.body);
        if (!record) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete attendance record
router.delete('/:id', async (req, res) => {
    try {
        await Attendance.delete(req.params.id);
        res.json({ message: 'Attendance record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 