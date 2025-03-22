// backend/routes/bugRoutes.js
const express = require('express');
const Bug = require('../models/Bug');
const router = express.Router();

// Create Bug
router.post('/bugs', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newBug = new Bug({ title, description });
    await newBug.save();
    res.status(201).json(newBug);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All Bugs
router.get('/bugs', async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Bug Status
router.put('/bugs/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const updatedBug = await Bug.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(updatedBug);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete Bug
router.delete('/bugs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Bug.findByIdAndDelete(id);
    res.status(200).json({ message: 'Bug deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
