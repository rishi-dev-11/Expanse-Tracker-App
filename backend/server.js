const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Routes
const expenseRoutes = require('./routes/expenseRoutes');

app.use('/api/expenses', expenseRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Expense Tracker API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const auth = require('./middleware/authMiddleware');

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB Connection Error:', err));

// // Routes
// const expenseRoutes = require('./routes/expenseRoutes');
// const authRoutes = require('./routes/authRoutes');

// // Auth routes (public)
// app.use('/api/auth', authRoutes);

// // Expense routes (protected)
// app.use('/api/expenses', auth, expenseRoutes);

// // Basic Route
// app.get('/', (req, res) => {
//   res.send('Expense Tracker API is running');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
