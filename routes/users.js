const express = require('express');
const router = express.Router();
const User = require('../models/User');

// register a User
router.post('/new', async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	try {
		const newUser = await new User({
			email: email,
			password: password,
		});
		newUser.save();
		res.status(201).json(newUser);
	} catch (error) {
		console.error('Error while creating a new User', error);
	}
});

// read all Users
router.get('/', async (req, res) => {
	try {
		const users = await User.find({});

		res.status(200).json(users);
	} catch (error) {
		res.status(404).json({ message: error });
	}
});

// log in
router.get('/login', async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	try {
		const filteredUser = await User.findOne({
			email: email,
			password: password,
		});
		// if (filteredUser) {
		res.status(200).json(filteredUser);
		// } else {
		// 	res.status(404).json({ message: 'User is not registered!' });
		// }
	} catch (error) {
		console.error('Error while logging in a User');
	}
});

module.exports = router;
