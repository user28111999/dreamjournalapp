const mongoose = require("mongoose")

const DreamSchema = mongoose.Schema(
	{
		type: String,
		title: String,
		content: String,
		color: String,
		mood: String,
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Dream", DreamSchema)
