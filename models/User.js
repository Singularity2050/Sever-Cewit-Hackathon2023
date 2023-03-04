const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	favourites: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Recipe',
		},
	],
});

module.exports = mongoose.model('Recipe', UserSchema);
