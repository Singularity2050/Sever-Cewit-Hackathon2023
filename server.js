const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routes/users');
const ripeRouter = require('./routes/ripe')

dotenv.config();
app.use(express.json());
app.use(cors()); // Use the cors middleware

mongoose.set('strictQuery', false);
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.error('connection error:', err));

app.use('/users', userRouter);
app.use('/ripe', ripeRouter);

app.use('*', (req, res) => {
  res.status(404).json({ message: '404 Page Not Found' });
});


app.listen(process.env.PORT || 3666, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
