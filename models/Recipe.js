const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecipeSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	ingredients: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Ingredient',
		},
	],
});

module.exports = mongoose.model('Recipe', RecipeSchema);
