const Note = require("./model.notes");

const randomColor = require("./utils/randomColor");

exports.create = (req, res) => {
    const notes = new Note({
        type: "note",
        title: req.body.title,
        content: req.body.content ? req.body.content : null,
        color: req.body.color ? req.body.color : randomColor(),
        tasks: req.body.tasks ? req.body.tasks : null
    });

    notes.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

exports.findAll = (req, res) => {
    Note.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: `${err.message} + ${req}`
        });
    });
};

exports.findOne = (req, res) => {
    Note.findById(req.params.id)
    .then(note => {
        if (!note) {
            return res.status(404).send({
                message: `NOTE NOT FOUND WITH ID [${req.params.id}]`
            });
        }

        res.send(note);
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: `NOTE NOT FOUND WITH ID [${req.params.id}]`
            });
        }

        return res.status(500).send({
            message: `ERROR RETRIEVING NOTE WITH ID [${req.params.id}]`
        });
    })
}

exports.update = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Content cannot be empty"
        });
    }

    Note.findByIdAndUpdate(req.params.id, {
        type: req.body.type,
        title: req.body.title,
        content: req.body.content,
        color: req.body.color,
        tasks: req.body.tasks
    }, { new: true })
    .then(note => {
        if (!note) {
            return res.status(404).send({
                message: `NOTE NOT FOUND WITH ID [${req.params.id}]`
            });
        }

        res.send(note);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `NOTE NOT FOUND WITH ID [${req.params.id}]`
            });                
        }

        return res.status(500).send({
            message: `ERROR UPDATING NOTE WITH ID [${req.params.id}]`
        });
    });
};

exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.id)
    .then(note => {
        if (!note) {
            return res.status(404).send({
                message: `NOTE NOT FOUND WITH ID [${req.params.id}]`
            });
        }
        res.send({ message: "SUCCESSFULLY DELETED NOTE" });
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: `NOTE NOT FOUND WITH ID [${req.params.id}]`
            });                
        }
        return res.status(500).send({
            message: `ERROR DELETING NOTE WITH ID [${req.params.id}]`
        });
    });
};

// TODOS: Improve it (case sensitive, regex, etc)
exports.searchByTitle = (req, res) => {
    Note.find({ title: { $regex: req.body.title } })
    .then(note => {
        if (!note) {
            return res.status(404).send({
                message: `NOTE NOT FOUND WITH TITLE [${req.params.title}]`
            });
        }

        res.send(note);
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: `NOTE NOT FOUND WITH TITLE [${req.body.title}]`
            });                
        }
        return res.status(500).send({
            message: `something stupid happened: ${err}`
        });
    });
}