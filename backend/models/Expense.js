// const mongoose = require('mongoose');

// const expenseSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, 'Title is required'],
//     trim: true,
//     maxlength: [100, 'Title cannot be more than 100 characters']
//   },
//   amount: {
//     type: Number,
//     required: [true, 'Amount is required'],
//     min: [0, 'Amount cannot be negative'],
//     validate: {
//       validator: Number.isFinite,
//       message: 'Amount must be a valid number'
//     }
//   },
//   category: {
//     type: String,
//     required: [true, 'Category is required'],
//     enum: {
//       values: ['Food', 'Transport', 'Shopping', 'Bills', 'Entertainment', 'Other'],
//       message: '{VALUE} is not a valid category'
//     }
//   },
//   description: {
//     type: String,
//     trim: true,
//     maxlength: [500, 'Description cannot be more than 500 characters']
//   },
//   date: {
//     type: Date,
//     required: [true, 'Date is required'],
//     default: Date.now
//   }
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Expense', expenseSchema); 


const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [0, 'Amount cannot be negative'],
    validate: {
      validator: Number.isFinite,
      message: 'Amount must be a valid number'
    }
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['Food', 'Transport', 'Shopping', 'Bills', 'Entertainment', 'Other'],
      message: '{VALUE} is not a valid category'
    }
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Expense', expenseSchema);
