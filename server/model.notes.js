const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
    type: String,
    title: String,
    content: String,
    color: String,
    tasks: [ 
        {
            name: String,
            completed: Boolean
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model("Note", NoteSchema);