const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

// ROUTE routers
const indexRouter = require('./routes/index');

dotenv.config();
app.use(express.json());
app.use(cors);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.error('connection error:', err));

app.use('/', indexRouter);
app.use('*', (req, res) => {
	res.status(404).json({ message: '404 Page Not Found' });
});

app.listen(process.env.PORT || 3666, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
