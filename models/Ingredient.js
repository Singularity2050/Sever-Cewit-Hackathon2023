const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IngredientSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	expirationDate: {
		type: Date,
		required: true,
	},
	produced: {
		type: Boolean,
		required: true,
	},
	packaged: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model('Recipe', IngredientSchema);
