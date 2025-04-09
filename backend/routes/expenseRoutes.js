// const express = require('express');
// const router = express.Router();
// const Expense = require('../models/Expense');

// // Get all expenses
// router.get('/', async (req, res) => {
//   try {
//     const expenses = await Expense.find().sort({ date: -1 });
//     res.json(expenses);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error', error: error.message });
//   }
// });

// // Add new expense
// router.post('/', async (req, res) => {
//   try {
//     const expense = new Expense(req.body);
//     await expense.save();
//     res.status(201).json(expense);
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid Data', error: error.message });
//   }
// });

// // Update expense
// router.put('/:id', async (req, res) => {
//   try {
//     const expense = await Expense.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!expense) {
//       return res.status(404).json({ message: 'Expense not found' });
//     }
//     res.json(expense);
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid Data', error: error.message });
//   }
// });

// // Delete expense
// router.delete('/:id', async (req, res) => {
//   try {
//     const expense = await Expense.findByIdAndDelete(req.params.id);
//     if (!expense) {
//       return res.status(404).json({ message: 'Expense not found' });
//     }
//     res.json({ message: 'Expense deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error', error: error.message });
//   }
// });

// module.exports = router; 

const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Get all expenses for the logged in user
router.get('/', async (req, res) => {
  try {
    // Updated to only show expenses for the logged in user
    const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// Add new expense
router.post('/', async (req, res) => {
  try {
    const expense = new Expense({
      ...req.body,
      user: req.user.id // Associate expense with logged in user
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: 'Invalid Data', error: error.message });
  }
});

// Update expense
router.put('/:id', async (req, res) => {
  try {
    // Check if the expense belongs to the logged in user
    const expense = await Expense.findOne({ _id: req.params.id, user: req.user.id });
    
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found or unauthorized' });
    }

    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    res.json(updatedExpense);
  } catch (error) {
    res.status(400).json({ message: 'Invalid Data', error: error.message });
  }
});

// Delete expense
router.delete('/:id', async (req, res) => {
  try {
    // Check if the expense belongs to the logged in user
    const expense = await Expense.findOne({ _id: req.params.id, user: req.user.id });
    
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found or unauthorized' });
    }

    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = router;
